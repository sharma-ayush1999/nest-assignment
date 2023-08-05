import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { inputDto } from './dto/input.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
