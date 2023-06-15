import * as orderRoutes from '../modules/orders/routes/index.route'
import * as authRoutes from '../modules/auth/routes/index.route'
import * as webhookRoutes from '../modules/webhook/routes/index.route'

export default {
    ...orderRoutes,
    ...authRoutes,
    ...webhookRoutes,
}