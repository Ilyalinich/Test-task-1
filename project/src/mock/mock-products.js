import {ActionsType} from '../constant';


const FAKE_NAMES = [
  'some fake short name',
  'some fake long name: 5G speed. An advanced dual-camera system. Ceramic Shield for 4x better drop performance. And a brighter, more colorful OLED display.',
];

const PRODUCTS_LOAD_STEP = 20;

const PriceRange = {
  MIN: 1,
  MAX: 10000,
};

const actionsTypes = Object.values(ActionsType);

const getRandomIntegerInRange = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const createMockProduct = () => (
  {
    image: 'img/Phone.jpg',
    name: FAKE_NAMES[getRandomIntegerInRange(0, FAKE_NAMES.length - 1)],
    link: '#',
    price: getRandomIntegerInRange(PriceRange.MIN, PriceRange.MAX),
    priceDiskount: getRandomIntegerInRange(PriceRange.MIN, PriceRange.MAX),
    action: actionsTypes[getRandomIntegerInRange(0, actionsTypes.length)],
  }
);

const createMockProducts = () =>
  new Array(PRODUCTS_LOAD_STEP)
    .fill(null)
    .map(() => createMockProduct());


export {createMockProducts};
