import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
import { IProduct } from '../customTypes';

const { persistAtom } = recoilPersist()

export const productState = atom<Array<IProduct>>({
  key: "productState",
  default: [] as Array<IProduct>,
  effects_UNSTABLE: [persistAtom],
});
