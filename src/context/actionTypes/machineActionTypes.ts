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

interface ClearStatus {
  type: MachineActionTypes.CLEAR_STATUS;
}

type MachineActions = IncrementBalance | BuyProduct | ClearStatus;

export type { IncrementBalance, BuyProduct, ClearStatus };
export default MachineActions;
