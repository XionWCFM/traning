import { container } from '@/src/compositions';
import { ThirdPartyGenerator, UuidGenerator, IdGenerator } from '.';
import { nanoid } from 'nanoid';

container.registerSingleton<ThirdPartyGenerator>(() => nanoid);
container.registerSingleton<UuidGenerator, IdGenerator>();
