import 'dotenv/config'

export default {
    mode: String(process.env.PAYPAL_MODE),
    client_id: String(process.env.PAYPAL_CLIENT_ID),
    client_secret: String(process.env.PAYPAL_CLIENT_SECRET)
}