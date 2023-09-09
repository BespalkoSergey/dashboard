import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DatabaseService } from '../database/database.service'
import { Admin } from '@prisma/client'
import { hashPassword } from '../../utils/bcrypt.util'
import { isNotEmptyString } from '../../utils/in-not-empty-string.util'

@Injectable()
export class AdminRepository {
  constructor(
    private readonly config: ConfigService,
    private readonly database: DatabaseService
  ) {
    this.createMainAdmin()
  }

  public async findByLogin(login: string): Promise<Admin | null> {
    return this.database.admin.findFirst({ where: { login } })
  }

  public async findById(id: string): Promise<Admin | null> {
    return this.database.admin.findUnique({ where: { id } })
  }

  private async createMainAdmin() {
    const login = this.config.get<string>('ADMIN_LOGIN')
    const pass = this.config.get<string>('ADMIN_PASS')

    if (!isNotEmptyString(login) || !isNotEmptyString(pass)) {
      return
    }

    if (await this.database.admin.findFirst({ where: { login } })) {
      return
    }

    await this.database.admin.create({
      data: {
        login,
        hash: await hashPassword(pass)
      }
    })
  }
}
