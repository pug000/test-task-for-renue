import React, { createContext } from 'react';

import products from 'utils/products';

import { Product, Status } from 'ts/interfaces';

import MachineActions from './actionTypes/machineActionTypes';

interface MachineState {
  products: Product[];
  balance: number;
  status: Status;
}

const initialMachineState: MachineState = {
  products,
  balance: 0,
  status: {
    type: null,
    text: '',
  },
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
