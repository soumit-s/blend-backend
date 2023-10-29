import nats, { NatsConnection } from 'nats'
import { createClient } from 'redis'

export class Service {
    private conn: NatsConnection | null
    private rclient: ReturnType<typeof createClient> | null
    private _fulfill: Function | null
    private _reject: Function | null
    private _running: Promise<void> | null
    private _isRunning: boolean

    constructor() {
        this.conn = null
        this.rclient = null
        this._fulfill = null
        this._reject = null
        this._running = null
        this._isRunning = false
    }

    /**
     * Initializes the service which includes establishing the connection
     * to NATS and the Redis database.
     */
    async init() {
        try {
            await Promise.all([
                this.connectNats(),
                this.connectRedis()
            ])
            this.logOK('successfully completed service initialization')

            this._running = new Promise<void>((resolve, reject) => {
                this._isRunning = true
                this._fulfill = () => resolve()
                this._reject = (err: any) => reject(err)
            }).finally(() => {
                this._isRunning = false
            })

        } catch (err) {
            this.logError('failed to initialize service')
            throw err
        }
    }

    private async connectNats() {
        this.conn = await nats.connect({ servers: ['localhost:4222'] })
            .catch(err => {
                this.logError("failed to establish connection to NATS")
                return err
            })
        this.logOK("successfully connected to NATS")
    }

    private async connectRedis() {
        this.rclient = await createClient()
            .on('end', () => this.logOK('successfully closed redis client'))
            .on('error', (err) => this.logError(err))
            .on('connect', () => this.logOK('successfully connected to Redis database'))
            .on('reconnecting', () => this.log('reconnecting to redis'))
            .connect()
    }

    log(...args: any[]) {
        args.forEach(arg => console.log(`[ user-auth-service ] ${arg}`))
    }

    logInfo(...args: any[]) {
        args.forEach(arg => this.log(`[ INFO ] ${arg}`))
    }

    logOK(...args: any[]) {
        this.log(...args.map(arg => `[ OK ] ${arg}`))
    }

    logError(...args: any[]) {
        this.log(...args.map(arg => `[ ERR ] ${arg}`))
    }

    /**
     * Returns Promise object that is resolved when the service
     * has been shutdown.
     * @returns Returns Promise<void> object that is resolved when the service has been shutdown.
     */
    running(): Promise<void> {
        if (this._running) {
            return this._running
        }
        throw new Error("service not running")
    }

    /**
     * Gracefully stops the workers and shuts down the service.
     */
    async stop() {
        if (!this._isRunning) return

        // Close the NATS connection to prevent
        // the service from recieving any further
        // requests.
        await this.conn?.drain();

        // Wait for all the workers to shutdown.
        try {
            await this.conn?.closed()
            this.logOK('successfully closed NATS connection')
        } catch (err) {
            this.logError('encountered error while closing NATS connection', err)
        }

        // Close the redis connection.
        try {
            const msg = await this.rclient?.quit()
            this.logOK('closed connection to redis', `redis returned '${msg}'`)
        } catch (err) {
            this.logError('encountered error while disconnecting from redis', err)
        }

        if (this._isRunning && this._fulfill)
            this._fulfill()
    }
}
