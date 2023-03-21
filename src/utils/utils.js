import { faker } from '@faker-js/faker';

export function generateData(amount) {
  return Array.from({ length: amount }).map((_, i) => {
    return {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      id: faker.datatype.uuid(),
    };
  });
}

export function generateEntry() {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    id: faker.datatype.uuid(),
  };
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
