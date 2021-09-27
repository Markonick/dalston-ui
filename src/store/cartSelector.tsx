import { selector } from 'recoil';
import { cartState } from './cartState';

export const getCart = selector({
  key: 'GetCart',
  get: ({get}) => get(cartState),
})