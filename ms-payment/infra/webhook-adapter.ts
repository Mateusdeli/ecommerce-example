import WebhookHandler, { WebhookProps } from "../service/contracts/webhook-handler";
import AxiosAdapter from "./axios-adapter";
import CronAdapter from "./cron-adapter";

export default class WebhookAdapter implements WebhookHandler {
  private TIME_IN_SECONDS_SEND_NOTIFICATION = 10;
  private TIME_IN_SECONDS_CANCEL_JOB = 2;
  constructor(private httpClient: AxiosAdapter, private cron: CronAdapter) {}

  async sendNotification({ url, data }: WebhookProps): Promise<any> {
    this.cron.executeJob({ second: this.TIME_IN_SECONDS_SEND_NOTIFICATION }, async () => {
      try {
        await this.httpClient.post(url, data)
        setTimeout(() => {
          this.cron.cancelJob();
        }, 1000 * this.TIME_IN_SECONDS_CANCEL_JOB)
      } catch (error) {
        console.log(error);
      }
    })
  }
}