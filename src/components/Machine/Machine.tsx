import { memo, useCallback, useContext } from 'react';

import MachineContext from 'context/machineContext';

import ProductsList from 'components/ProductsList/ProductsList';
import Control from 'components/Control/Control';
import ModalNotification from 'components/ModalNotification/ModalNotification';

import MachineActionTypes from 'ts/enums';
import styles from './Machine.module.scss';

function Machine() {
  const { machineState, dispatch } = useContext(MachineContext);

  const closeModalOnClick = useCallback(() => {
    dispatch({ type: MachineActionTypes.CLEAR_STATUS });
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <ProductsList products={machineState.products} />
      <Control />
      <ModalNotification
        status={machineState.status}
        withdraw={machineState.withdraw}
        closeModalOnClick={closeModalOnClick}
      />
    </div>
  );
}

export default memo(Machine);
