import { PubSubManager } from '../../pub-sub/core/core';
import { EventCreator } from '../../pub-sub/core/type';
import { LoggerService } from './service';

export class LoggerListener<
  Log extends LoggerService<string, string, string, string, string>,
  Event extends EventCreator<string, {}> = EventCreator<string, {}>,
> extends PubSubManager<Event> {
  constructor() {
    super();
  }
}
