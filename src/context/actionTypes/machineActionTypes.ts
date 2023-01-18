import MachineActionTypes from 'ts/enums';
import { Product } from 'ts/interfaces';

interface IncrementBalance {
  type: MachineActionTypes.INCREMENT_BALANCE;
  payload: number;
}

interface BuyProduct {
  type: MachineActionTypes.BUY_PRODUCT;
  payload: Product;
}

type MachineActions = IncrementBalance | BuyProduct;

export type { IncrementBalance, BuyProduct };
export default MachineActions;
