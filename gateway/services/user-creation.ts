import { AppContext } from "@/app/context";
import { blend } from '@/proto/index.js'

import UserCreation = blend.services.user_creation.proto
import { Empty } from "nats";

export class UserCreationServiceError {
    private _code: UserCreation.StatusCode
    constructor(code: UserCreation.StatusCode) {
        this._code = code;
    }

    get code(): UserCreation.StatusCode { return this._code }
}

export async function startTxn(ctx: AppContext, phn: string): Promise<string> {
    const reply = await ctx.nc.request(`service.user-creation.action.1.${phn}`, Empty, {timeout: 5000})
    const {ok, code, action_1} = UserCreation.Response.decode(reply.data)
    if (!ok) {
        throw new UserCreationServiceError(code)
    }

    const { txnId } = action_1 as UserCreation.Action1Response
    return txnId
}