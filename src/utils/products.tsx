import ChipsIcon from 'components/icons/ChipsIcon';
import ChocolateIcon from 'components/icons/ChocolateIcon';
import CoffeeIcon from 'components/icons/CoffeeIcon';
import JamIcon from 'components/icons/JamIcon';
import JuiceIcon from 'components/icons/JuiceIcon';
import MilkIcon from 'components/icons/MilkIcon';
import SodaIcon from 'components/icons/SodaIcon';
import SoftDrinkIcon from 'components/icons/SoftDrinkIcon';

import { Product } from 'ts/interfaces';

const products: Product[] = [
  {
    id: 1,
    text: 'jam',
    price: 100,
    count: 3,
    icon: <JamIcon />,
  },
  {
    id: 2,
    text: 'chips',
    price: 150,
    count: 5,
    icon: <ChipsIcon />,
  },
  {
    id: 3,
    text: 'soft drink',
    price: 170,
    count: 2,
    icon: <SoftDrinkIcon />,
  },
  {
    id: 4,
    text: 'milk',
    price: 100,
    count: 1,
    icon: <MilkIcon />,
  },
  {
    id: 5,
    text: 'soda',
    price: 50,
    count: 6,
    icon: <SodaIcon />,
  },
  {
    id: 6,
    text: 'coffee',
    price: 40,
    count: 4,
    icon: <CoffeeIcon />,
  },
  {
    id: 7,
    text: 'chocolate',
    price: 30,
    count: 2,
    icon: <ChocolateIcon />,
  },
  {
    id: 8,
    text: 'juice',
    price: 250,
    count: 4,
    icon: <JuiceIcon />,
  },
].sort((a, b) => b.price - a.price);

export default products;
