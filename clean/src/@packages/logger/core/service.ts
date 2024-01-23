import { DeviceHelper } from '../../device-helper/device-helper';
import {
  LogEventName,
  LogEventNameTuple,
  LogEventPath,
  LogEventPathTuple,
} from '../@types/type';
import { LogEventDetailCreator } from '../@types/creator/log-event-detail-creator';
import { LogEventCreator } from '../@types/creator/log-event-creator';
import { LogAtomCreator } from '../@types/creator/log-atom-creator';
/**
 *
 *
 * GENERIC의 순서
 * Feature , Page , At , Target, Action, Glue
 * Glue는 선택값이며 기본값은 "_"입니다.
 *
 * @template EventDetail - 로그 이벤트의 유저, 환경 등을 나타냅니다 .
 * @template LogAtom - 로그이벤트의 각 구성요소들을 의미합니다.
 * @template Glue - 로그 이벤트의 각 요소를 연결하는 구분자로 사용되는 문자열 타입입니다. 기본값은 '_' 입니다.
 *
 * @param {Glue} [config.defaultOptions.glue] - 로그 이벤트 요소를 연결할 때 사용할 구분자입니다.
 *

 */
export class LoggerService<
  EventDetail extends LogEventDetailCreator<string, {}, {}, {}>,
  LogAtom extends LogAtomCreator<string, string, string, string, string>,
  Glue extends string = '_',
> {
  private glue: Glue;
  constructor(config?: {
    defaultOptions?: {
      glue?: Glue;
    };
  }) {
    this.glue = config?.defaultOptions?.glue ?? ('_' as Glue);
  }

  nameTupleToString(
    tuple: readonly [LogAtom['feature'], LogAtom['target'], LogAtom['action']],
  ): LogEventName<LogAtom['feature'], LogAtom['target'], LogAtom['action']> {
    return tuple.join(this.glue) as LogEventName<
      LogAtom['feature'],
      LogAtom['target'],
      LogAtom['action']
    >;
  }

  pathTupleToString(
    tuple: readonly [
      LogAtom['feature'],
      LogAtom['page'],
      LogAtom['at'],
      LogAtom['target'],
    ],
  ): LogEventPath<
    LogAtom['feature'],
    LogAtom['page'],
    LogAtom['at'],
    LogAtom['target']
  > {
    return tuple.join(this.glue) as LogEventPath<
      LogAtom['feature'],
      LogAtom['page'],
      LogAtom['at'],
      LogAtom['target']
    >;
  }

  nameStringToTuple(
    eventName: LogEventName<
      LogAtom['feature'],
      LogAtom['target'],
      LogAtom['action'],
      Glue
    >,
  ): LogEventNameTuple<
    LogAtom['feature'],
    LogAtom['target'],
    LogAtom['action']
  > {
    return eventName.split(this.glue) as LogEventNameTuple<
      LogAtom['feature'],
      LogAtom['target'],
      LogAtom['action']
    >;
  }

  pathStringToTuple(
    eventPath: LogEventPath<
      LogAtom['feature'],
      LogAtom['page'],
      LogAtom['at'],
      LogAtom['target'],
      Glue
    >,
  ): LogEventPathTuple<
    LogAtom['feature'],
    LogAtom['page'],
    LogAtom['at'],
    LogAtom['target']
  > {
    return eventPath.split(this.glue) as LogEventPathTuple<
      LogAtom['feature'],
      LogAtom['page'],
      LogAtom['at'],
      LogAtom['target']
    >;
  }
  protected createLogEnvironment(
    envObj?: Omit<EventDetail['eventEnvironment'], 'device' | 'environment'>,
  ) {
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
  createLogEvent(event: {
    type: EventDetail['type'];
    eventProperty?: EventDetail['eventProperty'];
    eventName: LogEventNameTuple<
      LogAtom['feature'],
      LogAtom['target'],
      LogAtom['action']
    >;
    eventPath: LogEventPathTuple<
      LogAtom['feature'],
      LogAtom['page'],
      LogAtom['at'],
      LogAtom['target']
    >;
    eventUser: EventDetail['eventUser'];
    eventEnvironment?: EventDetail['eventEnvironment'];
  }): LogEventCreator<EventDetail, LogAtom> {
    const eventEnvironment = this.createLogEnvironment(event.eventEnvironment);
    const eventProperty = event.eventProperty ?? {};
    const eventTime = new Date().toISOString();
    const eventName = this.nameTupleToString(event.eventName);
    const eventPath = this.pathTupleToString(event.eventPath);
    return {
      eventEnvironment,
      eventProperty,
      eventTime,
      eventName,
      eventPath,
      type: event.type,
      eventUser: event.eventUser,
    } as LogEventCreator<EventDetail, LogAtom>;
  }
}
