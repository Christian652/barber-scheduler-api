import { Repository, EntityRepository } from 'typeorm';
import { Scheduling } from './schedulings.entity';
import { SchedulingDTO } from './dto/schedulings.dto';

@EntityRepository(Scheduling)
export class SchedulingRepository extends Repository<Scheduling> {

  public async saveScheduling(
    schedulingDto: SchedulingDTO,
  ): Promise<Scheduling> {
    const { id, client_name, date, whatsapp_phone } = schedulingDto;

    const Scheduling_ = this.create();
    Scheduling_.id = id ? id : null;
    Scheduling_.client_name = client_name;
    Scheduling_.whatsapp_phone = whatsapp_phone;
    Scheduling_.date = date;

    return (await Scheduling_.save());
  }

  public async getAll() {
    return (await this.find());
  }
}