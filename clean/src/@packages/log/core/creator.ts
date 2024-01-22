import { DeviceHelper } from '../../device-helper/device-helper';
import { LoggerService } from './service';
import {
  DefaultLogEventEnvironment,
  LogEventCreator,
  LogEventEnvironment,
} from './type';

export class LogCreator<
  Event extends LogEventCreator<string, {}, {}, {}>,
  T extends LoggerService<
    string,
    string,
    string,
    string,
    string
  > = LoggerService<string, string, string, string, string>,
> {
  constructor(private loggerService: T) {}
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

  createLogEvent(
    eventType: Event['type'],
    logEvent: {
      eventEnvironment: Omit<
        Event['eventEnvironment'],
        'device' | 'environment'
      >;
      eventProperty: Event['eventProperty'];
      eventPath: [string, string, string, string];
      eventName: [string, string, string];
      eventUser: Event['eventUser'];
    },
  ): Event {
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
      eventName: this.loggerService.nameTupleToString(logEvent.eventName),
      eventPath: this.loggerService.pathTupleToString(logEvent.eventPath),
      eventUser: logEvent.eventUser,
    } as Event;
  }
}
