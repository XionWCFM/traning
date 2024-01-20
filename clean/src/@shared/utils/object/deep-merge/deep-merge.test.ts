import { deepMerge } from './deep-merge';

describe('', () => {
  it('', () => {
    const obj = {
      hi: {
        hey: 'dsa',
        hi: 'das',
      },
      dsa: {
        he: 'dfa',
      },
    };

    const result = deepMerge(obj, {
      hi: {
        hey: '123',
      },
    });
    expect(result).toEqual({
      hi: {
        hey: '123',
        hi: 'das',
      },
      dsa: {
        he: 'dfa',
      },
    });
  });
  it('', () => {
    const obj = {};
    const result = deepMerge(obj, { hey: 'hi' });
    expect(result).toEqual({
      hey: 'hi',
    });
  });
});
