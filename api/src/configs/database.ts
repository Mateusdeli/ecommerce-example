export default {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    name: String(process.env.DB_NAME),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD)
}