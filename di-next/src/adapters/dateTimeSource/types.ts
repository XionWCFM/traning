import { UtcDateTimeString, TimeStamp } from '@/src/domain';

export interface DateTimeSource {
  toString(): UtcDateTimeString;
  valueOf(): TimeStamp;
}
