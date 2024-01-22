import { DeviceHelper } from '../../device-helper/device-helper';
import {
  LogEvent,
  LogEventEnvironment,
  LogEventName,
  LogEventNameTuple,
  LogEventPath,
  LogEventPathTuple,
} from './type';
/**
 *
 *
 * GENERIC의 순서
 * Feature , Page , At , Target, Action, Glue
 * Glue는 선택값이며 기본값은 "_"입니다.
 *
 * @template Feature - 로그 이벤트와 관련된 기능을 나타내는 문자열 타입입니다.
 * @template Page - 로그 이벤트가 발생한 페이지를 나타내는 문자열 타입입니다.
 * @template At - 로그 이벤트가 발생한 위치를 나타내는 문자열 타입입니다.
 * @template Target - 로그 이벤트의 대상을 나타내는 문자열 타입입니다.
 * @template Action - 로그 이벤트의 행동을 나타내는 문자열 타입입니다.
 * @template Glue - 로그 이벤트의 각 요소를 연결하는 구분자로 사용되는 문자열 타입입니다. 기본값은 '_' 입니다.
 *
 * @param {Glue} [config.defaultOptions.glue] - 로그 이벤트 요소를 연결할 때 사용할 구분자입니다.
 *

 */
export class LoggerService<
  Feature extends string,
  Page extends string,
  At extends string,
  Target extends string,
  Action extends string,
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
    tuple: [Feature, Target, Action] | readonly [Feature, Target, Action],
  ): LogEventName<Feature, Target, Action> {
    return tuple.join(this.glue) as LogEventName<Feature, Target, Action>;
  }

  pathTupleToString(
    tuple: [Feature, Page, At, Target],
  ): LogEventPath<Feature, Page, At, Target> {
    return tuple.join(this.glue) as LogEventPath<Feature, Page, At, Target>;
  }

  nameStringToTuple(
    eventName: LogEventName<Feature, Target, Action, Glue>,
  ): LogEventNameTuple<Feature, Target, Action> {
    return eventName.split(this.glue) as LogEventNameTuple<
      Feature,
      Target,
      Action
    >;
  }

  pathStringToTuple(
    eventPath: LogEventPath<Feature, Page, At, Target, Glue>,
  ): LogEventPathTuple<Feature, Page, At, Target> {
    return eventPath.split(this.glue) as LogEventPathTuple<
      Feature,
      Page,
      At,
      Target
    >;
  }
  static createInferInstance<
    T extends typeof LoggerService<string, string, string, string, string>,
  >() {
    return new LoggerService<
      LoggerInfer<T>['feature'],
      LoggerInfer<T>['page'],
      LoggerInfer<T>['at'],
      LoggerInfer<T>['target'],
      LoggerInfer<T>['action'],
      LoggerInfer<T>['glue']
    >();
  }
}

export type LoggerInfer<Instance> =
  Instance extends LoggerService<
    infer Feature,
    infer Page,
    infer At,
    infer Target,
    infer Action,
    infer Glue
  >
    ? {
        feature: Feature;
        page: Page;
        at: At;
        target: Target;
        action: Action;
        glue: Glue;
      }
    : never;
