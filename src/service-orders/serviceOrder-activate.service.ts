import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ServiceOrderActivate } from "./serviceOrder-activate";

@Injectable()
export class ServiceOrderActivateService {
  constructor(
    @InjectRepository(ServiceOrderActivate) protected readonly serviceOrdersActiveRepository: Repository<ServiceOrderActivate>
  ) {
  }
  async save(options) {
    return this.serviceOrdersActiveRepository.save(options);
  }
  async find(options) {
    return this.serviceOrdersActiveRepository.find(options);
  }
  async findOne(options) {
    return this.serviceOrdersActiveRepository.findOne(options);
  }
  async update(id: number, options){
    return this.serviceOrdersActiveRepository.update(id, options);
  }
  async delete(id: number) {
    return this.serviceOrdersActiveRepository.delete(id);

  }
}
