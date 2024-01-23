import { LoggerService } from '@/src/@packages/logger/core/service';
import { UserLogEvent } from './organism/log-event';
import { MyAtom } from './atom/atom';
import { LoggerPubSubManager } from '@/src/@packages/logger/core/listener';
import { LogParamCreator } from '@/src/@packages/logger/core/type';

export const loggerService = new LoggerService<UserLogEvent, MyAtom>();
export const loggerPubSub = new LoggerPubSubManager<UserLogEvent>();

export type LogParama = LogParamCreator<typeof loggerService>;
