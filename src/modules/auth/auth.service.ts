import { Injectable } from '@nestjs/common'
import { AdminRepository } from '../admin/admin.repository'
import { JwtService } from '@nestjs/jwt'
import { comparePassword } from '../../utils/bcrypt.util'

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

  public async login(context: Express.User | undefined): Promise<{ token: string } | null> {
    return { token: this.jwtService.sign({ id: this.getId(context) }) }
  }

  private getId(context: unknown): string {
    return typeof context === 'object' && context !== null && 'id' in context && typeof context.id === 'string' ? context.id : 'error'
  }
}
