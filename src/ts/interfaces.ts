interface Product {
  id: number;
  price: number;
  count: number;
  icon: JSX.Element;
}

interface Status {
  type: 'success' | 'error' | null;
  text: string;
}

export type { Product, Status };
