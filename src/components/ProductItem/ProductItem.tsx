import { memo } from 'react';

import Button from 'components/Button/Button';

import { Product } from 'ts/interfaces';

import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
  balance: number;
  buyProductOnClick: (product: Product) => void;
}

function ProductItem({ product, balance, buyProductOnClick }: ProductItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>{product.icon}</div>
        {balance >= product.price && product.count > 0 && (
          <Button id={String(product.id)} callback={() => buyProductOnClick(product)}>
            buy
          </Button>
        )}
        {!product.count && (
          <Button id={String(product.id)} disabled={!product.count}>
            not available
          </Button>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.textWrapper}>
          <p>quantity: </p>
          <p>price: </p>
        </div>
        <div className={styles.textWrapper}>
          <span>{product.count}</span>
          <span>{product.price} rub.</span>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductItem);
