
type SubjectEvent = { type: 'sub'; hello: 'world' };
type ExampEvent = { type: 'bsd'; hal: 'wosa' };

export type MyEvent = SubjectEvent | ExampEvent;

