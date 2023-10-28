import { AppContext, AppRequest } from "@/app/context.js";
import Handler_api_v1_join from "@/controllers/api.v1.join.js";
import { Request, RequestHandler, Response } from "express";


export function initRoutes(ctx: AppContext) {
    ctx.app.get('/api/ping', (_, res: Response) => res.json({ok: true, msg: "pong"}))
    ctx.app.post('/api/v1/join', Handler_api_v1_join)
}
