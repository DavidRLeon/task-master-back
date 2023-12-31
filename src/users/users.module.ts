import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './model/users.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports :[ SequelizeModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}