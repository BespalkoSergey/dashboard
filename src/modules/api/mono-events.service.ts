import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../database/database.service'

@Injectable()
export class MonoEventsService {
  constructor(private readonly database: DatabaseService) {}
  public async setSystemEvent(event: object) {
    try {
      await this.database.monoEvent.create({ data: { event } })
    } catch {}
  }

  public async getEvents() {
    try {
      const rows = await this.database.monoEvent.findMany()
      return rows.map(v => v.event)
    } catch {
      return []
    }
  }
}
