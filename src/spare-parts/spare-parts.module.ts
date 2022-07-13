import { Module } from '@nestjs/common';
import { SparePartsController } from './spare-parts.controller';
import { SparePartsService } from './spare-parts.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { spareParts } from "./spare-parts";

@Module({
  imports:[
    TypeOrmModule.forFeature([spareParts])
  ],
  controllers: [SparePartsController],
  providers: [SparePartsService]
})
export class SparePartsModule {}
