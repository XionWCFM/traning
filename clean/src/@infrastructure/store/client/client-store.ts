import { create, StateCreator } from 'zustand';
import { AuthSliceState, createAuthSlice } from './slice/auth-slice';
import { createMockSlice, MockSliceState } from './slice/mock-slice';
import { devtools, persist } from 'zustand/middleware';
const STORAGE_NAME = 'traning-store';

export type StoreType = AuthSliceState & MockSliceState;
export type AuthSlice = StateCreator<StoreType, [], [], AuthSliceState>;
export type MockSlice = StateCreator<StoreType, [], [], MockSliceState>;

export const useRootStore = create<StoreType>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createMockSlice(...a),
      }),
      {
        name: STORAGE_NAME,
      },
    ),
  ),
);
