import { memo, useContext } from 'react';

import MachineContext from 'context/machineContext';

import ProductsList from 'components/ProductsList/ProductsList';
import Control from 'components/Control/Control';

import styles from './Machine.module.scss';

function Machine() {
  const { machineState } = useContext(MachineContext);

  return (
    <div className={styles.wrapper}>
      <ProductsList products={machineState.products} />
      <Control />
    </div>
  );
}

export default memo(Machine);
