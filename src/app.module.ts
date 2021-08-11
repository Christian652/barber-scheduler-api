import { Module } from '@nestjs/common';
import { configService } from './config/orm'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/role.module';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { SchedulingModule } from './schedulings/schedulings.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ TypeOrmModule.forRoot(configService.getTypeOrmData()), 
    UserModule, AuthModule, RolesModule, SchedulingModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


