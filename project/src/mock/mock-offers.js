// Product {
//   // Изображение
//   image: string,
//   // Название
//   name: string;
//   // Ссылка для перхода
//   link: string;
//   // Актуальная цена
//   price: number;
//   // Цена со скидкой
//   priceDiskount: number;
//   // Акции
//   action?: ActionsType[],
// }

import {ActionsType} from '../constant';

const createMockOffer = () => (
  {
    image: '../../public/logo512.png',
    name: 'some fake name',
    link: '#',
    price: 10000,
    priceDiskount: 2500,
    action: Object.values(ActionsType)[2],
  }
);

const createMockOffers = () =>
  new Array(10)
    .fill(null)
    .map((offer) => createMockOffer());


export {createMockOffers};
