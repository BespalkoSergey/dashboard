import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { MonoEventsModule } from '../repositories/mono-events/mono-events.module'

@Module({
  imports: [MonoEventsModule],
  controllers: [ApiController]
})
export class ApiModule {}
