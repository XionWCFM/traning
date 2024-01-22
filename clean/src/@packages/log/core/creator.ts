import { DeviceHelper } from '../../device-helper/device-helper';
import { EventCreator } from '../../pub-sub/core/type';

export class LogEventCreator<
  Event extends EventCreator<string, {}> = EventCreator<string, {}>,
> {
  private deviceHelper: DeviceHelper;
  constructor() {
    this.deviceHelper = new DeviceHelper();
  }
  createLogEnvironment<EnvironmentObject extends Record<string, any> = {}>(
    envObj?: EnvironmentObject,
  ) {
    const device = this.deviceHelper.getDevice();
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
  createEventProperty(property: unknown) {
    if (property === null) return {};
    if (typeof property !== 'object') return {};
    return property;
  }

  createLogEvent() {}
}
