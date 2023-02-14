import { Request, Response } from "express";
import { ConfirmPaymentDTO } from "../../dtos/confirm-payment.dto";
import OrderService from "../../services/order.services";

const orderService = new OrderService()

const get = async (req: Request, res: Response) => {
    try {
        const { paymentId, PayerID } = req.query
        await orderService.confirmPayment(new ConfirmPaymentDTO(String(PayerID), String(paymentId)))
        return res.status(201).send({
            message: 'Pagamento confirmado com sucesso!',
            data: req.body
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default {
    get
}