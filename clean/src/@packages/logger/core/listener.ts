import { PubSubManager } from '../../pub-sub/core/core';
import { LogEventDetailCreator } from '../@types/creator/log-event-detail-creator';
import { LogEventCreator } from '../@types/creator/log-event-creator';
import { LogAtomCreator } from '../@types/creator/log-atom-creator';

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
