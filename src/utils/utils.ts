import { faker } from '@faker-js/faker';
import { Product } from '../models/product/Product';

export function generateData(amount: number): Product[] {
  return Array.from({ length: amount }).map((_, i) => {
    return {
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      id: faker.datatype.uuid(),
    };
  });
}

export function generateEntry(): Product {
  return {
    name: faker.commerce.product(),
    price: parseInt(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    id: faker.datatype.uuid(),
  };
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}
