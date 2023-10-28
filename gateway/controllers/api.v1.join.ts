import { Response } from "express";
import { AppRequest, AppResponse } from "@/app/context.js";
import { ResCode } from "@/app/res-codes.js";
import { startTxn, UserCreationServiceError } from "@/services/user-creation.js";
import { StatusCodes } from 'http-status-codes'
import { blend } from '@/proto/index.js'

import UserCreation = blend.services.user_creation.proto;

export default async function Handler_api_v1_join(req: AppRequest, res: AppResponse) {
    const { action } = req.query
    switch (action) {
        case '1':
            return await handleAction1(req, res)
        case '2':
            return await handleAction2(req, res)
        default:
            return res.status(StatusCodes.BAD_REQUEST).json({ ok: false })
    }
}


async function handleAction1(req: AppRequest, res: AppResponse) {
    let { phone } = req.query
    if (!phone || typeof (phone) !== 'string') {
        return res.status(StatusCodes.BAD_REQUEST)
            .json({
                ok: false,
                code: ResCode.USER_CREATION_PHONE_NUMBER_MISSING
            })
    }

    if (!phone.startsWith('+')) phone = '+' + phone

    try {
        const txnId = await startTxn(req.ctx, phone)
        return res.json({ ok: true, data: { txnId } })
    } catch (err) {
        if (err instanceof UserCreationServiceError) {
            switch (err.code) {
                default:
                case UserCreation.StatusCode.STATUS_CODE_INTERNAL_ERROR:
                    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                        ok: false,
                        code: ResCode.INTERNAL_ERROR
                    })
                case UserCreation.StatusCode.STATUS_CODE_INVALID_NUMBER:
                    return res.json({
                        ok: false,
                        code: ResCode.FAILED,
                        errors: [
                            { code: ResCode.INVALID_PHONE_NUMBER, msg: "Phone Number is invalid" }
                        ]
                    })
                case UserCreation.StatusCode.STATUS_CODE_NUMBER_ALREADY_TAKEN:
                    return res.json({
                        ok: false,
                        code: ResCode.FAILED,
                        errors: [
                            { code: ResCode.USER_CREATION_PHONE_NUMBER_ALREADY_TAKEN, msg: "Phone number already taken" }
                        ]
                    })
            }
        } else {
            console.log(err.code)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                ok: false,
                code: ResCode.INTERNAL_ERROR
            })
        }
    }
}

async function handleAction2(req: AppRequest, res: AppResponse) {
}

