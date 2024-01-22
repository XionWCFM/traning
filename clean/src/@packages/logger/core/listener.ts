import { PubSubManager } from '../../pub-sub/core/core';
import { EventCreator } from '../../pub-sub/core/type';

export class LoggerListener<
  Event extends EventCreator<string, {}> = EventCreator<string, {}>,
> extends PubSubManager<Event> {
  constructor() {
    super();
  }
}
