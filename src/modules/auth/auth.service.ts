import { Injectable } from '@nestjs/common'
import { AdminRepository } from '../repositories/admin/admin.repository'
import { JwtService } from '@nestjs/jwt'
import { comparePassword } from '../../utils/bcrypt.util'
import { UserTokenData } from '../../models/models'

@Injectable()
export class AuthService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly jwtService: JwtService
  ) {}
  public async validate(login: string, pass: string): Promise<UserTokenData | null> {
    const admin = await this.adminRepository.findByLogin(login)

    if (admin && (await comparePassword(pass, admin.hash))) {
      return { id: admin.id }
    }

    return null
  }

  public async login(context: Express.User | undefined): Promise<string | null> {
    return this.jwtService.signAsync({ id: this.getUser(context).id })
  }

  public async refresh(context: Express.User | undefined) {
    const admin = await this.adminRepository.findById(this.getUser(context).id)
    return admin ? this.login(admin) : null
  }

  public async profile(context: Express.User | undefined): Promise<UserTokenData> {
    return this.getUser(context)
  }

  // TODO: fix type assertion
  private getUser(context: Express.User | undefined): UserTokenData {
    return context as UserTokenData
  }
}
