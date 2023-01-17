import { memo } from 'react';

import products from 'utils/products';

import ProductsList from 'components/ProductsList/ProductsList';
import Control from 'components/Control/Control';

import styles from './Machine.module.scss';

function Machine() {
  return (
    <div className={styles.wrapper}>
      <ProductsList products={products} />
      <Control />
    </div>
  );
}

export default memo(Machine);
