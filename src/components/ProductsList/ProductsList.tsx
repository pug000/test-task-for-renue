import { memo, useCallback, useContext } from 'react';

import MachineContext from 'context/machineContext';

import ProductItem from 'components/ProductItem/ProductItem';

import { Product } from 'ts/interfaces';
import MachineActionTypes from 'ts/enums';

import styles from './ProductsList.module.scss';

interface ProductsListProps {
  products: Product[];
}

function ProductsList({ products }: ProductsListProps) {
  const { machineState, dispatch } = useContext(MachineContext);

  const buyProductOnClick = useCallback(
    (product: Product) => {
      dispatch({ type: MachineActionTypes.BUY_PRODUCT, payload: product });
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            balance={machineState.balance}
            buyProductOnClick={buyProductOnClick}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(ProductsList);
