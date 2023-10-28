import express, { Express } from 'express'
import dotenv from 'dotenv'
import { initMiddlewares } from '@/middlewares/index.js'
import { AppContext } from '@/app/context.js'
import nats, { NatsConnection } from 'nats'
import { initRoutes } from '@/app/routes.js'

const logger = console

function loadConfig() {
    const { error } = dotenv.config()
    if (error) {
        logger.error('failed to load .env file')
        logger.log("falling back to default configuration")
    }
}

// Loads the .env configuration file.
loadConfig()

// Try to connect to NATS server.
const nc: NatsConnection = await nats.connect({ servers: ['localhost:4222'] })
    .then(nc => {
        console.log("successfully connected to NATS ...")
        return nc
    })
    .catch(e => process.emit('SIGINT')) as NatsConnection

const port = process.env.PORT || 8000

const app: Express = express()

// Create the App context.
const appCtx = new AppContext({ app, conn: nc })

// Initialize the middlewares.
initMiddlewares(appCtx)
initRoutes(appCtx)

// Start the server.
const server = app.listen(port, () => {
    console.log(`server listening at ${port}`)
})

// Hook for shutting down the server on encountering SIGINT.
process.on('SIGINT', async () => {
    await new Promise<void>((resolve, reject) => {
        server.close(err => {
            err ? reject(err) : resolve()
        })
    })
        .then(() => logger.log("'express' server has been shutdown successfully"))
        .catch(err => logger.error(err))
    
    // Start draining the connection.
    await nc.drain()
});

await (async () => {
    const err = await nc.closed()
    if (err) {
        logger.error('error while closing NATS connection ...')
        logger.error(err)
    }
})()