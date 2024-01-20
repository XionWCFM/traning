import { MockSlice } from '../client-store';

export interface MockSliceState {
  dummy: {
    mock: string;
  };
  setMock: (newMock: string) => void;
}

export const createMockSlice: MockSlice = (set) => ({
  dummy: {
    mock: '',
  },
  setMock: (mockdata) => {
    set(() => ({
      dummy: {
        mock: mockdata,
      },
    }));
  },
});
