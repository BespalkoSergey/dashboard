import { Body, Controller, Get, HttpStatus, Post, Response } from '@nestjs/common'
import { MonoEventsService } from './mono-events.service'
import { Response as ExpressResponse } from 'express'

@Controller('api')
export class ApiController {
  constructor(private readonly mono: MonoEventsService) {}

  @Get('mono/system/event')
  public getMonoCheck(@Response() res: ExpressResponse) {
    res.status(HttpStatus.OK).send()
  }

  @Post('mono/system/event')
  public async setMonoEvent(@Body() body: unknown, @Response() res: ExpressResponse) {
    res.status(HttpStatus.OK).send()

    await this.mono.setEvent(body)
  }
}
