import { Injectable } from '@nestjs/common'
import { AdminRepository } from '../admin/admin.repository'
import { JwtService } from '@nestjs/jwt'
import { Admin } from '@prisma/client'
import { comparePassword } from '../../utils/bcrypt.util'

@Injectable()
export class AuthService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly jwtService: JwtService
  ) {}
  public async validateAdmin(login: string, pass: string): Promise<Omit<Admin, 'hash'> | null> {
    const admin = await this.adminRepository.findByLogin(login)

    if (admin && (await comparePassword(admin.hash, pass))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { hash, ...res } = admin
      return res
    }

    return null
  }

  public async login(context: Express.User | undefined) {
    return {
      accessToken: this.jwtService.sign({ id: this.getAdminId(context) })
    }
  }

  private getAdminId(context: unknown): string {
    return this.isOmitAdminModel(context) ? context.id : 'error'
  }

  private isOmitAdminModel(context: unknown): context is Admin {
    return typeof context === 'object' && context !== null && 'id' in context
  }
}
