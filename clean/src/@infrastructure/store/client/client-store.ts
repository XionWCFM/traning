import { create, StateCreator } from 'zustand';
import { AuthSliceState, createAuthSlice } from './slice/auth-slice';
import { createMockSlice, MockSliceState } from './slice/mock-slice';

export type StoreType = AuthSliceState & MockSliceState;
export type AuthSlice = StateCreator<StoreType, [], [], AuthSliceState>;
export type MockSlice = StateCreator<StoreType, [], [], MockSliceState>;

export const useStore = create<StoreType>()((...a) => ({
  ...createAuthSlice(...a),
  ...createMockSlice(...a),
}));
