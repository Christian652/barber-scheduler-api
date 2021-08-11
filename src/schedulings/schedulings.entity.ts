import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: "schedulings" })
export class Scheduling extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  client_name: string;

  @Column({ length: 255, nullable: false })
  whatsapp_phone: string;

  @Column({ type: 'timestamp', nullable: false })
  date: Date;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

}