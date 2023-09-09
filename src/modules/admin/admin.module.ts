import { Module } from '@nestjs/common'
import { AdminRepository } from './admin.repository'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [ConfigModule, DatabaseModule],
  providers: [AdminRepository],
  exports: [AdminRepository]
})
export class AdminModule {}
