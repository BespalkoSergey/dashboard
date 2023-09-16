import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../database/database.service'

@Injectable()
export class MonoEventsService {
  constructor(private readonly database: DatabaseService) {}
  public async setEvent(event: unknown) {
    try {
      await this.database.monoEvent.create({ data: { text: JSON.stringify(event) } })
    } catch {}
  }
}
