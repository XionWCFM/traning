import { Timer } from './types';
import { FlushTimer } from './timer';
import { container } from '@/src/compositions/core';

container.registerSingleton<Timer, FlushTimer>();
