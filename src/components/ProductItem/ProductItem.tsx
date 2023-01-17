import { memo } from 'react';

import { Product } from 'ts/interfaces';

import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>{product.icon}</div>
      <div className={styles.info}>
        <div className={styles.textWrapper}>
          <p>Quantity: </p>
          <p>Price: </p>
        </div>
        <div className={styles.textWrapper}>
          <span>{product.count}</span>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductItem);
