import { faker } from '@faker-js/faker';

export default function generateData() {
  return Array.from({ length: 10000 }).map((_, i) => {
    return {
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      id: faker.datatype.uuid(),
      position: i,
    };
  });
}
