import { Injectable } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { SchedulingService } from './schedulings/schedulings.service';
import { CronJob } from 'cron';
import { Scheduling } from './schedulings/schedulings.entity';

@Injectable()
export class AppService {

  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private schedulingsService: SchedulingService
  ) { }
  getHello() {
    console.log('aaaaaaaaaaaaa');
  }

  async dispatchNotification() {
    console.log('passei aqui 1');
    const schedulings = await this.schedulingsService.getAll();

    schedulings.map(scheduling_ => {
      const date = new Date(scheduling_.date);
      const job = new CronJob(date, () => this.schedulingNotification(scheduling_));

      this.schedulerRegistry.addCronJob(`scheduling_${scheduling_.id}`, job);
      job.start();
    });
  }

  schedulingNotification(scheduling: Scheduling) {
    // send whatsapp notification
    console.log(`aaaaa ${scheduling.client_name}`);
  }
}
