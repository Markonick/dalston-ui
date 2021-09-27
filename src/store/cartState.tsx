import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist';
import { IProduct } from '../customTypes';

const { persistAtom } = recoilPersist()

export const cartState = atom<Array<IProduct>>({
  key: "cartState",
  default: [] as Array<IProduct>,
  effects_UNSTABLE: [persistAtom],
});

export const cartTotal = selector<number>({
  key: 'cartTotal',
  get: ({get}) => get(cartState).reduce((a, b) => a + b.price, 0),
})