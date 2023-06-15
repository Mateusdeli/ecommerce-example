import { Request, Response } from "express"
import { HttpStatusCodeEnum } from "../../../enums/http-status-code.enum"

const post = async (req: Request, res: Response) => {
    try {
        const body = req.body
        return res.status(HttpStatusCodeEnum.SUCCESS).send(body)
    } catch (error) {
        return res.status(HttpStatusCodeEnum.BAD_REQUEST).send(error)
    }
}

export default {
    post
}