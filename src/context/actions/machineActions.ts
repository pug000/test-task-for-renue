import { MachineState } from 'context/machineContext';
import { BuyProduct, IncrementBalance } from 'context/actionTypes/machineActionTypes';

import { Withdraw } from 'ts/interfaces';

const incrementBalance = (
  state: MachineState,
  { payload }: IncrementBalance
): MachineState => ({
  ...state,
  balance: state.balance + payload,
});

const buyProduct = (state: MachineState, { payload }: BuyProduct): MachineState => {
  if (state.balance >= payload.price && payload.count) {
    return {
      ...state,
      balance: state.balance - payload.price,
      products: state.products.map((product) =>
        product.id === payload.id ? { ...product, count: product.count - 1 } : product
      ),
      status: {
        type: 'success',
        text: 'Enjoy!',
      },
    };
  }

  return {
    ...state,
    status: {
      type: 'error',
      text: "You don't have enough money",
    },
  };
};

const withdrawMoney = (state: MachineState): MachineState => {
  let { balance } = state;
  const { limits, products } = state;

  const nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  let nominalsResult = nominals.reduce<Withdraw>((acc, nominal) => {
    while (limits[nominal] !== 0 && balance - nominal >= 0) {
      acc[nominal] = acc[nominal] ? (acc[nominal] += 1) : 1;
      limits[nominal] -= 1;
      balance -= nominal;
    }

    return acc;
  }, {});

  nominalsResult = products.reduce<Withdraw>((acc, product) => {
    while (product.count > 0 && balance - product.price >= 0) {
      acc[product.text] = acc[product.text] ? (acc[product.text] += 1) : 1;
      product.count -= 1;
      balance -= product.price;
    }

    return {
      ...nominalsResult,
      ...acc,
    };
  }, {});

  const isEmptyProduct = products.every((product) => !product.count);

  if (isEmptyProduct && balance > 0) {
    return {
      ...state,
      status: {
        type: 'error',
        text: 'Sorry, the machine is empty.',
      },
      balance,
      withdraw: nominalsResult,
      limits,
    };
  }

  return {
    products,
    status: {
      type: 'success',
      text: 'Withdraw',
    },
    balance,
    withdraw: nominalsResult,
    limits,
  };
};

export { incrementBalance, buyProduct, withdrawMoney };
