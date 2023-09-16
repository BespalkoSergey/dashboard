import { Body, Controller, Get, HttpStatus, Post, Response, UseGuards } from '@nestjs/common'
import { MonoEventsService } from './mono-events.service'
import { Response as ExpressResponse } from 'express'
import { AuthGuard } from '@nestjs/passport'

@Controller('api')
export class ApiController {
  constructor(private readonly mono: MonoEventsService) {}

  @Get('mono/system/event')
  public getMonoSystemCheck(@Response() res: ExpressResponse) {
    res.status(HttpStatus.OK).send()
  }

  @Post('mono/system/event')
  public async setMonoSystemEvent(@Body() body: object, @Response() res: ExpressResponse) {
    res.status(HttpStatus.OK).send()

    await this.mono.setSystemEvent(body)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('mono/events')
  public async getMonoEvents() {
    return this.mono.getEvents()
  }
}
