import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Request as ExpressRequest } from 'express'
import { AuthService } from './auth.service'
import { UserTokenData } from '../../models/models'

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() req: ExpressRequest): Promise<string | null> {
    return this.auth.login(req.user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  public async getProfile(@Request() req: ExpressRequest): Promise<UserTokenData> {
    return this.auth.profile(req.user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  public async refresh(@Request() req: ExpressRequest): Promise<string | null> {
    return this.auth.refresh(req.user)
  }
}
