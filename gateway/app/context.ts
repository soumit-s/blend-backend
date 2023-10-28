import { NatsConnection } from "nats";
import { Express, Request, Response } from "express";

export class AppContext {
    private _conn: NatsConnection
    private _app: Express

    constructor({app, conn}: {app: Express, conn: NatsConnection}) {
        this._app = app
        this._conn = conn
    }

    get app(): Express { return this._app }
    get nc(): NatsConnection { return this._conn }
}

export type AppRequest = Request & { ctx: AppContext };
export type AppResponse = Response


