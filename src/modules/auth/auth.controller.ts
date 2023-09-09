import { Controller, Post, UseGuards, Request } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request as ExpressRequest } from 'express'
import { AuthService } from './auth.service'
import { AdminRepository } from '../admin/admin.repository'
import { Admin } from '@prisma/client'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly adminRepository: AdminRepository
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() req: ExpressRequest) {
    return this.auth.login(req.user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('profile')
  public async getProfile(@Request() req: ExpressRequest) {
    return req.user
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  public async refresh(@Request() req: ExpressRequest) {
    const admin = this.adminRepository.findById((req.user as Admin)?.id ?? '')
    return this.auth.login(admin)
  }
}
