import { LogEventDetailCreator } from '../creator/log-event-detail-creator';
import { LogAtomCreator } from '../creator/log-atom-creator';
import { LogEventCreator } from '../creator/log-event-creator';

export type LogEventDetailDefault = LogEventDetailCreator<string, {}, {}, {}>;
export type LogAtomDefault = LogAtomCreator<
  string,
  string,
  string,
  string,
  string
>;
export type LogEventDefault = LogEventCreator<
  LogEventDetailDefault,
  LogAtomDefault
>;
