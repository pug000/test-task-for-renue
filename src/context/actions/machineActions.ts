import { MachineState } from 'context/machineContext';
import { BuyProduct, IncrementBalance } from 'context/actionTypes/machineActionTypes';

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

export { incrementBalance, buyProduct };
