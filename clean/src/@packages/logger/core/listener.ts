import { PubSubManager } from '../../pub-sub/core/core';
import { LogAtomCreator, LogEventCreator, LogEventDetailCreator } from './type';

export class LoggerPubSubManager<
  Event extends LogEventCreator<
    LogEventDetailCreator<string, {}, {}, {}>,
    LogAtomCreator<string, string, string, string, string>
  > = LogEventCreator<
    LogEventDetailCreator<string, {}, {}, {}>,
    LogAtomCreator<string, string, string, string, string>
  >,
> extends PubSubManager<Event> {
  constructor() {
    super();
  }
}
