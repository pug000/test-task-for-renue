interface Product {
  text: string;
  id: number;
  price: number;
  count: number;
  icon: JSX.Element;
}

interface Status {
  type: 'success' | 'error' | null;
  text: string;
}

interface Withdraw {
  [key: number | string]: number;
}

export type { Product, Status, Withdraw };
