import MachineActionTypes from 'ts/enums';

interface IncrementBalance {
  type: MachineActionTypes.INCREMENT_BALANCE;
  payload: number;
}

type MachineActions = IncrementBalance;

export type { IncrementBalance, MachineActions };
