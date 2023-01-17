import { memo } from 'react';

import coins from 'utils/constants';

import Button from 'components/Button/Button';

import styles from './Control.module.scss';

function Control() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.coinContainer}>
        {coins.map((coin) => (
          <Button key={coin} id={String(coin)}>
            {coin}
          </Button>
        ))}
      </div>
      <div className={styles.container}>
        <p className={styles.text}>balance:</p>
        <p className={styles.count}>0</p>
      </div>
      <div className={styles.container}>
        <Button id="withdraw">withdraw</Button>
      </div>
    </div>
  );
}

export default memo(Control);
