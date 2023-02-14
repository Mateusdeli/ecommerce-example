import { Job, JobsOptions } from 'bullmq'
import mail from '../../../libs/mail'
import emailRequestPaymentTemplate from '../templates/emails/orders/email-request-payment.template'

const options: JobsOptions = {}

export default {
    name: 'RequestPaymentJob',
    options,
    async handle(job: Job) {
        try {
            await mail.sendMail({
                subject: 'Confirmação Pagamento',
                from: 'teste@teste.com',
                to: job.data.user.email,
                html: emailRequestPaymentTemplate(job.data),
            })
        } catch(error) {
            console.log('Send email error:', error);
        }
    }
}
