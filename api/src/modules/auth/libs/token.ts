import jwt from "jsonwebtoken";
import tokenConfig from '../config/token'

interface GenerateTokenProps {
    issuer: string
    payload: any
}

const generate = ({ issuer, payload }: GenerateTokenProps) => {
    return jwt.sign(payload, tokenConfig.secret, {
        issuer,
        expiresIn: tokenConfig.expiryTime
    });
}

export default {
    generate
}