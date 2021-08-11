import {MigrationInterface, QueryRunner} from "typeorm";

export class alterTrainersTable31628106651464 implements MigrationInterface {
    name = 'alterTrainersTable31628106651464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `schedulings` (`id` int NOT NULL AUTO_INCREMENT, `client_name` varchar(255) NOT NULL, `whatsapp_phone` varchar(255) NOT NULL, `date` timestamp NOT NULL, `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `role` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `schedulings`");
    }

}
