import products from 'utils/products';

import ProductsList from 'components/ProductsList/ProductsList';

import styles from './Machine.module.scss';

function Machine() {
  return (
    <div className={styles.wrapper}>
      <ProductsList products={products} />
      <div>Control</div>
    </div>
  );
}

export default Machine;
