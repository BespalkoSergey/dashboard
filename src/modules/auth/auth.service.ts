import { Injectable } from '@nestjs/common'
import { AdminRepository } from '../repositories/admin/admin.repository'
import { JwtService } from '@nestjs/jwt'
import { comparePassword } from '../../utils/bcrypt.util'
import { isNotEmptyString } from '../../utils/in-not-empty-string.util'

@Injectable()
export class AuthService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly jwtService: JwtService
  ) {}
  public async validateAdmin(login: string, pass: string): Promise<{ id: string } | null> {
    const admin = await this.adminRepository.findByLogin(login)

    if (admin && (await comparePassword(pass, admin.hash))) {
      return { id: admin.id }
    }

    return null
  }

  public async login(context: Express.User | undefined): Promise<string | null> {
    const id = this.getId(context)
    return id ? this.jwtService.signAsync({ id }) : null
  }

  private getId(context: unknown): string | null {
    const id = typeof context === 'object' && context !== null && 'id' in context ? context.id : null
    return isNotEmptyString(id) ? id : null
  }
}
