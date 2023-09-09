import { Injectable } from '@nestjs/common'
import { Admin } from './admin.model'

@Injectable()
export class AdminRepository {
  private readonly admins: Admin[]

  constructor() {
    this.admins = [
      {
        id: 1,
        login: 'admin',
        password: 'secret'
      }
    ]
  }

  async findByLogin(login: string): Promise<Admin | undefined> {
    return this.admins.find(v => v.login === login)
  }
}
