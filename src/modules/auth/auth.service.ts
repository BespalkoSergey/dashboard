import { Injectable } from '@nestjs/common'
import { AdminRepository } from '../admin/admin.repository'
import { Admin } from '../admin/admin.model'

@Injectable()
export class AuthService {
  constructor(private readonly adminRepository: AdminRepository) {}
  public async validateAdmin(login: string, pass: string): Promise<Omit<Admin, 'password'> | null> {
    const admin = await this.adminRepository.findByLogin(login)

    if (admin && admin.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...res } = admin
      return res
    }

    return null
  }
}
