import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { spareParts } from "./spare-parts";
import { Repository } from "typeorm";

@Injectable()
export class SparePartsService {
  constructor(
    @InjectRepository(spareParts) private readonly sparePartsRepository: Repository<spareParts>
  ) {
  }
  async save(options) {
    return this.sparePartsRepository.save(options);
  }
  async find(options) {
    return this.sparePartsRepository.find(options);
  }
  async findOne(options) {
    return this.sparePartsRepository.findOne(options);
  }
  async update(id: number, options){
    return this.sparePartsRepository.update(id, options);
  }
  async delete(id: number) {
    return this.sparePartsRepository.delete(id);
  }
}
