import { memo, useContext } from 'react';

import MachineContext from 'context/machineContext';

import coins from 'utils/constants';

import Button from 'components/Button/Button';

import MachineActionTypes from 'ts/enums';
import styles from './Control.module.scss';

function Control() {
  const { machineState, dispatch } = useContext(MachineContext);

  const addBalanceOnClick = ({
    target,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (target instanceof HTMLButtonElement) {
      const value = Number(target.value);

      if (value && typeof value === 'number') {
        dispatch({ type: MachineActionTypes.INCREMENT_BALANCE, payload: value });
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.coinContainer}
        aria-hidden="true"
        onClick={addBalanceOnClick}
      >
        {coins.map((coin) => (
          <Button key={coin} id={String(coin)} value={coin}>
            {coin}
          </Button>
        ))}
      </div>
      <div className={styles.container}>
        <p className={styles.text}>balance:</p>
        <p className={styles.count}>{machineState.balance}</p>
      </div>
      <div className={styles.container}>
        <Button id="withdraw">withdraw</Button>
      </div>
    </div>
  );
}

export default memo(Control);
