import { Job, JobsOptions } from 'bullmq'
import mail from '../../../libs/mail'

const options: JobsOptions = {}

export default {
    name: 'EmailConfirmPayment',
    options,
    async handle(job: Job) {
        await mail.sendMail({
            subject: 'Confirmação Pagamento',
            from: 'teste@teste.com',
            to: job.data.user.email,
            html: templateEmail(job.data),
        })
    }
}

const templateEmail = (data: any) => {
    return `
        <p>
            Olá
            <b>${data.user.name}</b>
        </p>
        <p>
            Lembre-se de confirmar o pagamento dos produtos.
        </p>
        <p>
            <b>
                Quando o pagamento for aprovado, você receberá um email com as informações com mais detalhes sobre o produto.
            </b>
        </p>
        <a href="${data.payment_link}" style="text-decoration: none; cursor: pointer; padding: 10px; background-color: grey; color: white; border-radius: 5px;">
            Pague agora
        </a>
    `
}