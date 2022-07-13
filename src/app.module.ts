import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { User } from "./user/user";
import { AuthModule } from "./auth/auth.module";
import { SparePartsModule } from './spare-parts/spare-parts.module';
import { spareParts } from "./spare-parts/spare-parts";
import { ServiceOrdersModule } from './service-orders/service-orders.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'service',
    entities: [User, spareParts],
    bigNumberStrings: false,
    logging: true,
    synchronize: true,
  }), UserModule,AuthModule, SparePartsModule, ServiceOrdersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
