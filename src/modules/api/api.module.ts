import { Module } from '@nestjs/common'
import { ApiController } from './api.controller'
import { MonoEventsModule } from '../repositories/mono-events/mono-events.module'
import { MonoEventsService } from './mono-events.service'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [MonoEventsModule, DatabaseModule],
  controllers: [ApiController],
  providers: [MonoEventsService]
})
export class ApiModule {}
