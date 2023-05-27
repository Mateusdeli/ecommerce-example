export default {
    secret: String(process.env.TOKEN_SECRET_KEY),
    expiryTime: String(process.env.TOKEN_EXPIRY_TIME)
}