import { ImageSourcePropType } from "react-native";
import Colors from "../constants/Colors";

interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Men's",
  },
  {
    id: 2,
    name: "Women",
  },
  {
    id: 3,
    name: "Sports",
  },
];

interface Color {
  id: number;
  code: string;
}

const colors: Color[] = [
  {
    id: 1,
    code: Colors.primary,
  },
  {
    id: 2,
    code: Colors.secondary,
  },
  {
    id: 3,
    code: Colors.text,
  },
];
export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  description: string;
  image: ImageSourcePropType;
  reviews: number;
  rating: number;
  colors: Color[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Skinny Fit Blazer",
    price: 18.0,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/yellow-ss.jpg"),
    reviews: 80,
    rating: 2.5,
    colors: colors,
  },
  {
    id: 2,
    name: "Men’s Kinnstor sportswear",
    price: 76.0,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/green-j.jpg"),
    reviews: 28,
    rating: 3.7,
    colors: colors,
  },
  {
    id: 3,
    name: "Violet Hoodie",
    price: 29.99,
    category: categories[0],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/hdd.jpg"),
    reviews: 70,
    rating: 5,
    colors: colors,
  },
  {
    id: 4,
    name: "Skinny Fit Blazer",
    price: 49.0,
    category: categories[1],
    description:
      "Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.",
    image: require("../assets/images/products/blue-ish w.jpg"),
    reviews: 65,
    rating: 4.2,
    colors: colors,
  },
];
