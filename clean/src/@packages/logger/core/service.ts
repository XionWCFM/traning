import { DeviceHelper } from '../../device-helper/device-helper';
import { DefaultLogType } from '../@types/type';

export class LoggerService<Event extends DefaultLogType = DefaultLogType> {
  private glue: Event['glue'];
  constructor(config?: {
    defaultOptions?: {
      glue?: Event['glue'];
    };
  }) {
    this.glue = config?.defaultOptions?.glue ?? ('_' as Event['glue']);
  }

  nameTupleToString(tuple: Event['eventNameTuple']) {
    return tuple.join(this.glue) as Event['eventName'];
  }

  pathTupleToString(tuple: Event['eventPathTuple']) {
    return tuple.join(this.glue) as Event['eventPath'];
  }

  nameStringToTuple(eventName: Event['eventName']) {
    return eventName.split(this.glue) as unknown as Event['eventNameTuple'];
  }

  pathStringToTuple(eventPath: Event['eventPath']) {
    return eventPath.split(this.glue) as unknown as Event['eventPathTuple'];
  }
  protected createEventEnvironment() {
    const deviceHelper = new DeviceHelper();
    const device = deviceHelper.getDevice();
    const environment = process.env.NODE_ENV;
    return {
      device,
      environment,
    };
  }
  protected createEventTime(date: Date) {
    return date.toISOString();
  }
  createLogEvent(event: Event['logEventParam']): Event['logEvent'] {
    const eventEnvironment = this.createEventEnvironment();
    const eventTime = this.createEventTime(new Date());
    const eventName = this.nameTupleToString(event.eventName);
    const eventPath = this.pathTupleToString(event.eventPath);

    return {
      ...event,
      eventEnvironment,
      eventTime,
      eventName,
      eventPath,
    };
  }
}
