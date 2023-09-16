import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { MonoEventsModule } from '../repositories/mono-events/mono-events.module'
import { MonoEventsService } from './mono-events.service'

@Module({
  imports: [MonoEventsModule],
  controllers: [ApiController],
  providers: [MonoEventsService]
})
export class ApiModule {}
