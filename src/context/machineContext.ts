import React, { createContext } from 'react';

import products from 'utils/products';

import { Product } from 'ts/interfaces';

import { MachineActions } from './actionTypes/machineActionTypes';

interface MachineState {
  products: Product[];
  balance: number;
}

const initialMachineState: MachineState = {
  products,
  balance: 0,
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
