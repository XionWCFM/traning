import { LogEventDetailCreator } from '../creator/log-event-detail-creator';
import { LogAtomCreator } from '../creator/log-atom-creator';

export type LogEventDetailDefault = LogEventDetailCreator<string, {}, {}, {}>;
export type LogAtomDefault = LogAtomCreator<
  string,
  string,
  string,
  string,
  string
>;
