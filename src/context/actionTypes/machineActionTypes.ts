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

interface WithdrawMoney {
  type: MachineActionTypes.WITHDRAW_MONEY;
}

type MachineActions = IncrementBalance | BuyProduct | ClearStatus | WithdrawMoney;

export type { IncrementBalance, BuyProduct, ClearStatus, WithdrawMoney };
export default MachineActions;
