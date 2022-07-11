import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { User } from "./user/user";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'service',
    entities: [User],
    bigNumberStrings: false,
    logging: true,
    synchronize: true,
  }), UserModule,AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
