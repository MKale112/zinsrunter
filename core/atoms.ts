import { FormValues } from '@/components/Formular/types';
import { atom } from 'recoil';

export const stepState = atom<[number, FormValues]>({
  key: 'step',
  default: [0, {} as FormValues],
});
