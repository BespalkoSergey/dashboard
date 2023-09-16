import { Controller, Get, Post } from '@nestjs/common'

@Controller('api')
export class ApiController {
  @Get('mono/events')
  public getMonoEvents() {
    return true
  }

  @Post('mono/events')
  public setMonoEvents() {
    return true
  }
}
