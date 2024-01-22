import { DeviceHelper } from '../../device-helper/device-helper';
import { EventCreator } from '../../pub-sub/core/type';
import { LoggerService } from './service';
import {
  DefaultLogEventEnvironment,
  LogEvent,
  LogEventEnvironment,
  LogEventParam,
} from './type';

export class LogEventCreator<
  LoggerServiceInstance extends typeof LoggerService<
    string,
    string,
    string,
    string,
    string
  >,
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
    NewEvent extends LogEventParam<
      [string, string, string],
      [string, string, string, string],
      {},
      {},
      {}
    > = LogEventParam<
      [string, string, string],
      [string, string, string, string],
      {},
      {},
      {}
    >,
  >(
    eventType: Event['type'],
    logEvent: NewEvent,
  ): { type: Event['type'] } & LogEvent<
    NewEvent['eventUser'],
    NewEvent['eventProperty'],
    NewEvent['eventEnvironment']
  > {
    const eventEnvironment = this.createLogEnvironment(
      logEvent.eventEnvironment,
    );
    const eventProperty = this.createEventProperty(logEvent.eventProperty);
    const eventTime = new Date().toISOString();
    const service = LoggerService.createInferInstance<LoggerServiceInstance>();

    return {
      type: eventType,
      eventEnvironment,
      eventProperty,
      eventTime,
      eventName: service.nameTupleToString(logEvent.eventName),
      eventPath: service.pathTupleToString(logEvent.eventPath),
      eventUser: logEvent.eventUser,
    };
  }
}
