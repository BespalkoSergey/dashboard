import { Injectable } from '@nestjs/common'

@Injectable()
export class MonoEventsService {
  public async setEvent(event: unknown) {
    try {
      const text = JSON.stringify(event)
    } catch (e) {}

    return true
  }
}
