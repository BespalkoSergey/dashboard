import { Injectable } from '@nestjs/common'
import { AdminRepository } from '../admin/admin.repository'
import { Admin } from '../admin/admin.model'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly jwtService: JwtService
  ) {}
  public async validateAdmin(login: string, pass: string): Promise<Omit<Admin, 'password'> | null> {
    const admin = await this.adminRepository.findByLogin(login)

    if (admin && admin.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...res } = admin
      return res
    }

    return null
  }

  public async login(context: Express.User | undefined) {
    return {
      accessToken: this.jwtService.sign({ id: this.getAdminId(context) })
    }
  }

  private getAdminId(context: unknown): number {
    return this.isOmitAdminModel(context) ? context.id : 0
  }

  private isOmitAdminModel(context: unknown): context is Admin {
    return typeof context === 'object' && context !== null && Object.keys(context).every(k => ['id', 'login'].includes(k))
  }
}
