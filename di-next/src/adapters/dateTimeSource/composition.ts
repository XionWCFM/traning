import { container } from '@/src/compositions/core';
import { BrowserDateTimeSource } from './browserDateTimeSource';
import { DateTimeSource } from './types';

container.registerSingleton<DateTimeSource, BrowserDateTimeSource>();
