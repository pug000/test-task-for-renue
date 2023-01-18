import { MachineState } from 'context/machineContext';
import { IncrementBalance } from 'context/actionTypes/machineActionTypes';

const incrementBalance = (
  state: MachineState,
  { payload }: IncrementBalance
): MachineState => ({
  ...state,
  balance: state.balance + payload,
});

export default incrementBalance;
