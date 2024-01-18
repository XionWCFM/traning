import { Logger } from './types';
import { ConsoleLogger } from './consoleLogger';
import { container } from '@/src/compositions/core';

container.registerSingleton<Logger, ConsoleLogger>();
