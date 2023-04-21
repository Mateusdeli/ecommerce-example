import nodemailer from 'nodemailer'
import mail from '../configs/mail'

export default nodemailer.createTransport(mail)