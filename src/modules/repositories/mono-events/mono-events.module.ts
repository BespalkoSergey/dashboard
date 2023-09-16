import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../database/database.module'
import { MonoEventsRepository } from './mono-events.repository'

@Module({
  imports: [DatabaseModule],
  providers: [MonoEventsRepository],
  exports: [MonoEventsRepository]
})
export class MonoEventsModule {}
