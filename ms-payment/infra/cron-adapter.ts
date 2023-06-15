import schedule, { Job } from "node-schedule";

type JobTimeOptions = {
  date?: number;
  hour?: number;
  minute?: number;
  second?: number;
};

export default class CronAdapter {
  constructor(private job: Job) {}

  executeJob(options: JobTimeOptions, callback: Function): void {
    this.job = schedule.scheduleJob({ ...options }, () => {
      callback();
    });
  }

  cancelJob() {
    if (this.job) {
      this.job.cancel();
    }
  }
}
