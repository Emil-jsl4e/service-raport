import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceOrders } from "./serviceOrders";
import { Repository } from "typeorm";

@Injectable()
export class ServiceOrdersService {
  constructor(
    @InjectRepository(ServiceOrders) protected readonly serviceOrdersRepository: Repository<ServiceOrders>
  ) {
  }
    async save(options) {
      return this.serviceOrdersRepository.save(options);
    }
    async find(options) {
      return this.serviceOrdersRepository.find(options);
    }
    async findOne(options) {
      return this.serviceOrdersRepository.findOne(options);
    }
    async update(id: number, options){
      return this.serviceOrdersRepository.update(id, options);
    }
    async delete(id: number) {
      return this.serviceOrdersRepository.delete(id);

  }
}
