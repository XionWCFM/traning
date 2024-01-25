import { PubSubManager } from '../../pub-sub/core/core';
import { DefaultLogType } from '../@types/type';

export class LoggerPubSubManager<
  Event extends DefaultLogType['logEvent'] = DefaultLogType['logEvent'],
> extends PubSubManager<Event> {
  constructor() {
    super();
  }
}
