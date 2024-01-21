import { PubSubManager } from './core';

describe('testing pubsub-manager', () => {
  const pubsub = new PubSubManager();
  it('can subscribe', () => {
    const handler = jest.fn();
    pubsub.subscribe('hello', handler);
    pubsub.publish({ type: 'hello' });
    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledTimes(1);
  });
  it('can unsubscribe', () => {
    const handler = jest.fn();
    pubsub.subscribe('hello', handler);
    pubsub.unsubscribe('hello', handler);
    pubsub.publish({ type: 'hello' });
    expect(handler).not.toHaveBeenCalled();
  });
  it('can initialize', () => {
    const handler = jest.fn();
    pubsub.subscribe('hello', handler);
    pubsub.initialize();
    pubsub.publish({ type: 'hello' });
    expect(handler).not.toHaveBeenCalled();
  });
  it('can initiate', () => {
    const handler = jest.fn();
    pubsub.initiate({
      hello: [handler, handler],
      hi: [handler, handler],
    });
    pubsub.publish({ type: 'hello' });
    pubsub.publish({ type: 'hi' });
    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledTimes(4);
  });
});
