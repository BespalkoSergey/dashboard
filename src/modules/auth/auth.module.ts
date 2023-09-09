import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AdminModule } from '../admin/admin.module'
import { LocalStrategy } from './local.strategy'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller'

@Module({
  imports: [AdminModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
