import { Reducer } from 'react';

import { MachineState } from 'context/machineContext';
import MachineActions from 'context/actionTypes/machineActionTypes';

import MachineActionTypes from 'ts/enums';
import { incrementBalance, buyProduct } from 'context/actions/machineActions';

const machineReducer: Reducer<MachineState, MachineActions> = (state, action) => {
  switch (action.type) {
    case MachineActionTypes.INCREMENT_BALANCE: {
      return incrementBalance(state, action);
    }

    case MachineActionTypes.BUY_PRODUCT: {
      return buyProduct(state, action);
    }

    case MachineActionTypes.CLEAR_STATUS: {
      return {
        ...state,
        status: {
          type: null,
          text: '',
        },
      };
    }

    default:
      return state;
  }
};

export default machineReducer;
