import express, { Express } from 'express'
import dotenv from 'dotenv'

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

const port = process.env.PORT || 8000
const app: Express = express()

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
})
