import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
  UseGuards,
  HttpException,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  Query
} from '@nestjs/common';
import { SchedulingService } from './schedulings.service';
import { SchedulingDTO } from './dto/schedulings.dto';
import { Scheduling } from './schedulings.entity';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'src/auth/enums/role.enum';
import { Roles } from 'src/auth/decorators/roles.decorator'
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('schedulings')
export class SchedulingController {
  constructor(
    private schedulingService: SchedulingService
  ) { }

  @Post()
  @UsePipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  )
  public async create(
    @Body() schedulingDTO: SchedulingDTO,
  ): Promise<Scheduling> {
    try {
      const scheduling = await this.schedulingService.save(schedulingDTO);
      return scheduling;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put()
  @UsePipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  )
  public async update(
    @Body() schedulingDTO: SchedulingDTO,
  ): Promise<Scheduling> {
    try {
      const scheduling = await this.schedulingService.save(schedulingDTO);
      return scheduling;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @UseGuards(AuthGuard(), RolesGuard)
  @Roles(Role.Admin)
  public async getAll(): Promise<Scheduling[]> {
    try {
      const scheduling = await this.schedulingService.getAll();
      return scheduling;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard(), RolesGuard)
  @Roles(Role.Admin)
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<Scheduling> {
    const scheduling = await this.schedulingService.getOne(id);
    return scheduling;
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), RolesGuard)
  @Roles(Role.Admin)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      const deletedScheduling = await this.schedulingService.delete(id);
      return deletedScheduling
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}