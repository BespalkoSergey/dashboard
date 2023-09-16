import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserTokenData } from '../../models/models'
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly auth: AuthService) {
    super()
  }

  public async validate(username: string, password: string): Promise<UserTokenData> {
    const admin = await this.auth.validate(username, password)

    if (!admin) {
      throw new UnauthorizedException()
    }

    return admin
  }
}
