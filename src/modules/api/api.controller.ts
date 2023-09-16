import { Controller, Get, Post } from '@nestjs/common'
import { MonoEventsService } from './mono-events.service'

@Controller('api')
export class ApiController {
  constructor(private readonly mono: MonoEventsService) {}

  @Get('mono/events')
  public getMonoEvents() {
    return true
  }

  @Post('mono/events')
  public setMonoEvents() {
    return true
  }
}
