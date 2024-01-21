import { PubSubManager } from '@/src/@packages/pub-sub/core';

type SubjectEvent = { type: 'sub'; hello: 'world' };
type ExampEvent = { type: 'bsd'; hal: 'wosa' };

const pubsub = new PubSubManager<SubjectEvent | ExampEvent>();

