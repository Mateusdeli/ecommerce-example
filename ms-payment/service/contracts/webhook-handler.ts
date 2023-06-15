import { Webhook } from './../../domain/models/webhook';

export type WebhookProps  = {
  data: any
} & Webhook

export default interface WebhookHandler {
  sendNotification(webhook: WebhookProps): Promise<void>
}