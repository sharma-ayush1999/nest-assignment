import { Body, Controller, Get, Post } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { inputDto } from '../dto/input.dto';

@Controller('elements')
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Post()
  getElements(@Body() inputDto: inputDto): number[] {
    return this.elementsService.getElements(inputDto);
  }
}
