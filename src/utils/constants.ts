import { Withdraw } from 'ts/interfaces';

const coins: number[] = [50, 100, 500, 1000];

const limits: Withdraw = {
  1: 6,
  5: 7,
  10: 5,
  100: 7,
  500: 4,
};

export { coins, limits };
