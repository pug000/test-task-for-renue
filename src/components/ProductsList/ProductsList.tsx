import { memo } from 'react';

import ProductItem from 'components/ProductItem/ProductItem';

import { Product } from 'ts/interfaces';

import styles from './ProductsList.module.scss';

interface ProductsListProps {
  products: Product[];
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default memo(ProductsList);
