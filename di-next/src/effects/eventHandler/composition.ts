import { EventHandler } from './types';
import { ClickHandler } from './clickHandler';
import { container } from '@/src/compositions/core';

container.registerSingleton<EventHandler<MouseEvent>, ClickHandler>();
