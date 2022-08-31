import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SparePartsService } from './spare-parts.service';
import { SparePartsDto } from './dto/spareParts.dto';

@Controller()
export class SparePartsController {
  constructor(private readonly spareParts: SparePartsService) {}
  @Get('admin/spareParts')
  async all() {
    return this.spareParts.find({});
  }

  @Post('admin/spareParts')
  async create(@Body() body: SparePartsDto) {
    return this.spareParts.save(body);
  }

  @Get('admin/spareParts/:id')
  async get(@Param('id') id: number) {
    return this.spareParts.findOne({ where: { id } });
  }

  @Put('admin/spareParts/:id')
  async update(@Param('id') id: number, @Body() body: SparePartsDto) {
    await this.spareParts.update(id, body);

    return this.spareParts.findOne({ where: { id } });
  }

  @Delete('admin/spareParts/:id')
  async delete(@Param('id') id: number) {
    return this.spareParts.delete(id);
  }
}
