import React, { createContext } from 'react';

import products from 'utils/products';
import { limits } from 'utils/constants';

import { Product, Status, Withdraw } from 'ts/interfaces';

import MachineActions from './actionTypes/machineActionTypes';

interface MachineState {
  products: Product[];
  balance: number;
  status: Status;
  limits: Record<number, number>;
  withdraw: Withdraw;
}

const initialMachineState: MachineState = {
  products,
  balance: 0,
  status: {
    type: null,
    text: '',
  },
  limits,
  withdraw: {},
};

interface MachineStateContext {
  machineState: MachineState;
  dispatch: React.Dispatch<MachineActions>;
}

const initialMachineContext: MachineStateContext = {
  machineState: initialMachineState,
  dispatch: () => {},
};

const MachineContext = createContext<MachineStateContext>(initialMachineContext);

export { initialMachineState };
export type { MachineState };
export default MachineContext;
