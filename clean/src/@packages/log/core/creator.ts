import { DeviceHelper } from '../../device-helper/device-helper';
import { EventCreator } from '../../pub-sub/core/type';
import {
  DefaultLogEventEnvironment,
  LogEvent,
  LogEventEnvironment,
  LogEventParam,
} from './type';

export class LogEventCreator<
  Event extends EventCreator<string, {}> = EventCreator<string, {}>,
> {
  constructor() {}
  createLogEnvironment<EnvironmentObject extends LogEventEnvironment = {}>(
    envObj?: EnvironmentObject,
  ):
    | (EnvironmentObject & DefaultLogEventEnvironment)
    | DefaultLogEventEnvironment {
    const deviceHelper = new DeviceHelper();
    const device = deviceHelper.getDevice();
    const environment = process.env.NODE_ENV;
    if (!envObj) {
      return { device, environment };
    }
    return {
      device,
      environment,
      ...envObj,
    };
  }
  createEventProperty<T extends Record<string, any> = {}>(
    property: unknown,
  ): T | {} {
    if (property === null) return {};
    if (typeof property !== 'object') return {};
    return property;
  }

  createLogEvent<
    NewEvent extends LogEventParam<string, string, {}, {}, {}> = LogEventParam<
      string,
      string,
      {},
      {},
      {}
    >,
  >(
    eventType: Event['type'],
    logEvent: NewEvent,
  ): { type: Event['type'] } & LogEvent<
    NewEvent['eventName'],
    NewEvent['eventPath'],
    NewEvent['eventUser'],
    NewEvent['eventProperty'],
    NewEvent['eventEnvironment']
  > {
    const eventEnvironment = this.createLogEnvironment(
      logEvent.eventEnvironment,
    );
    const eventProperty = this.createEventProperty(logEvent.eventProperty);
    const eventTime = new Date().toISOString();
    return {
      type: eventType,
      eventEnvironment,
      eventProperty,
      eventTime,
      eventName: logEvent.eventName,
      eventPath: logEvent.eventPath,
      eventUser: logEvent.eventUser,
    };
  }
}
