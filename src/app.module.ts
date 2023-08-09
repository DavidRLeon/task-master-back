import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksModule } from './tasks/tasks.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { TestingModule } from './testing/testing.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'task-master',
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    TasksModule,
    MailModule,
    TestingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }