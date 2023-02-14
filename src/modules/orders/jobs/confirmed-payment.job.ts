import { Job, JobsOptions } from "bullmq"
import mail from "../../../libs/mail"
import paypal from "../../../libs/paypal"
import emailPaymentConfirmedTemplate from "../templates/emails/orders/email-confirmed-payment.template"

const options: JobsOptions = {}

export default {
    name: 'ConfirmedPaymentJob',
    options,
    async handle(job: Job) {
        const { paymentId, payerId } = job.data
        paypal.executePayment({ paymentId, payer_id: payerId, callbackResponse: async (payment) => {
             try {
                await mail.sendMail({
                    subject: 'Pagamento Confirmado!',
                    from: 'teste@teste.com',
                    to: 'teste@teste.com',
                    html: emailPaymentConfirmedTemplate(job.data),
                })
            } catch (error) {
                console.error(error);
            }
        }})
    }
}