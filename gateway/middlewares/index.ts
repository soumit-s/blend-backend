import express, { Response, NextFunction, RequestHandler } from "express"
import { AppContext, AppRequest } from "@/app/context.js"

export function initMiddlewares(ctx: AppContext) {
    ctx.app.use(express.json())
    ctx.app.use(useInjectAppContext(ctx))
}

export function useInjectAppContext(ctx: AppContext): any  {
    return (req: AppRequest, res: Response, next: NextFunction) => {
        req.ctx = ctx
        next()
    }
}