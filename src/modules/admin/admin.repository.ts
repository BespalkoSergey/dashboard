import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../database/database.service'
import { Admin } from '@prisma/client'

@Injectable()
export class AdminRepository {
  constructor(private readonly database: DatabaseService) {}

  public async findByLogin(login: string): Promise<Admin | null> {
    return this.database.admin.findFirst({ where: { login } })
  }

  public async findById(id: string): Promise<Admin | null> {
    return this.database.admin.findUnique({ where: { id } })
  }
}
