import { PubSubManager } from '../../pub-sub/core/core';

export class LoggerPubSubManager<
  Event extends LogEventDefault = LogEventDefault,
> extends PubSubManager<Event> {
  constructor() {
    super();
  }
}
