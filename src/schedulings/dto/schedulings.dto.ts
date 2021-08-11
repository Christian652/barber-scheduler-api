import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SchedulingDTO {

    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    client_name: string;

    @IsString()
    @IsNotEmpty()
    whatsapp_phone: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    date: Date;

}