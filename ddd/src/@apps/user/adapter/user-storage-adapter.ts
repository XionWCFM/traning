import { useStore } from '@/src/@infrastructure/store';
import { UserStorageService } from '../application/ports';

export const useUserStorage = (): UserStorageService => useStore();
