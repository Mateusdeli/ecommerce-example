import { json } from 'express'
import app from './server'
import { makeGeneratePaymentService } from './main/factories/usecases/create-payment-service-factory';

app.use(json())
app.set('view engine', 'ejs');

app.post('/v1/payments/payment', async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Request body is missing.'
      })
    }

  const { redirect_urls, transactions } = req.body

  const generatePaymentService = makeGeneratePaymentService()

  const response = await generatePaymentService.execute({
    redirect_urls,
    transactions
  });
    
    return res.status(200).send(response.confirm_payment)
})

// app.get('/v1/payments/payment', async (req, res) => {
//  const { token } = req.query

//  if (!token) {
//   return res.status(400).send({
//     message: 'Token is missing.'
//   })
//  }

//  const payments = await fs.readFile(paymentsPath, { encoding: 'utf-8' })

//  const payment = JSON.parse(payments).find((payment: any) => payment.tokenId === token)

//  res.render('pages/payment', {
//    payment
//  })
// })

// function validData(value: any): boolean {
//   return value !== undefined && value !== null && typeof(value) === 'string'
// }