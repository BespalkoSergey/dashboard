import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: AuthService) {
    super()
  }

  public async validate(username: string, password: string) {
    const admin = await this.auth.validateAdmin(username, password)

    if (!admin) {
      throw new UnauthorizedException()
    }

    return admin
  }
}
