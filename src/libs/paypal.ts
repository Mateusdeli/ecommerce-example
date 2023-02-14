import sdk, { Payment, PaymentResponse } from 'paypal-rest-sdk'
import paypal from '../configs/paypal';

sdk.configure(paypal)

interface CreatePaymentProps {
    data: Payment,
    callbackResponse: (payment: PaymentResponse) => void,
}

interface ExecutePaymentProps {
    paymentId: string,
    payer_id: string,
    callbackResponse: (payment: PaymentResponse) => void,
}

const createPayment = ({ data, callbackResponse }: CreatePaymentProps): void => {
    sdk.payment.create(data, function (error, payment: PaymentResponse) {
        if (error) {
            throw error;
        }
        callbackResponse(payment)
    }) 
}

const executePayment = ({ paymentId, payer_id, callbackResponse }: ExecutePaymentProps): void => {
    sdk.payment.execute(paymentId, { payer_id }, function (error, payment) {
        if (error) {
            throw error;
        } else {
            callbackResponse(payment)
        }
    })
}

export default {
    createPayment,
    executePayment
}