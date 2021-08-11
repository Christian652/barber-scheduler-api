import { HttpException, HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Scheduling } from './schedulings.entity';
import { SchedulingDTO } from './dto/schedulings.dto';
import { SchedulingRepository } from './schedulings.repository';

@Injectable()
export class SchedulingService {
  private readonly logger = new Logger(SchedulingService.name);
  
  constructor(
    @InjectRepository(SchedulingRepository)
    private SchedulingRepository: SchedulingRepository,
  ) { }

  public async save(
    SchedulingDTO: SchedulingDTO,
  ): Promise<Scheduling> {
    try {
      this.logger.log(` Saving ${SchedulingDTO.client_name} Scheduling`);
      return await this.SchedulingRepository.saveScheduling(SchedulingDTO);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAll(): Promise<Scheduling[]> {
    return await this.SchedulingRepository.getAll();
  }

  public async getOne(id: number): Promise<Scheduling> {

    const foundScheduling = await this.SchedulingRepository.findOne(id);
    if (!foundScheduling) {
      this.logger.warn(` Can't Found Scheduling With Id : ${id} `);
      throw new NotFoundException(`Não Existe Agendamento Com o Id: ${id}`);
    }
    return foundScheduling;
  }

  public async delete(SchedulingId: number): Promise<void> {
    try {
      this.logger.log(` Deleting Scheduling : ${SchedulingId} `);
      await this.SchedulingRepository.delete(SchedulingId);
    } catch (e) {
      throw new HttpException(e.code, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}