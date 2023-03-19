import { faker } from '@faker-js/faker';

export function generateData(amount) {
  return Array.from({ length: amount }).map((_, i) => {
    return {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      id: faker.datatype.uuid(),
      position: i,
    };
  });
}

export function generateEntry(lastEntry) {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    id: faker.datatype.uuid(),
    position: lastEntry + 1,
  };
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
