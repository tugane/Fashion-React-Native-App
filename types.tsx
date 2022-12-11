/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { Product } from "./data";

export type RootStackParamList = {
  Home: undefined;
  "Product-detail": { product: Product };
};
