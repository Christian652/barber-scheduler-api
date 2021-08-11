import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/roles.guard';
import { SchedulingRepository } from 'src/schedulings/schedulings.repository';
import { SchedulingService } from 'src/schedulings/schedulings.service';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { SchedulingController } from './schedulings.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([SchedulingRepository, UserRepository]),
    AuthModule
  ], 
  controllers: [SchedulingController],
  providers: [SchedulingService, UserService, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
  exports: [
    SchedulingService
  ]
})
export class SchedulingModule {}
