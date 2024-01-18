import { TimeStamp, UtcDateTimeString } from '@/src/domain/common';
import { DateTimeSource } from './types';

export class BrowserDateTimeSource implements DateTimeSource {
  get source() {
    return new Date();
  }

  public toString = (): UtcDateTimeString => this.source.toUTCString();
  public valueOf = (): TimeStamp => this.source.getTime();
}
