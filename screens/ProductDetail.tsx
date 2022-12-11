import { StyleSheet, Text, View } from "react-native";
import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type ProductDetailProps = NativeStackScreenProps<
  RootStackParamList,
  "Product-detail"
>;

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const product = route.params.product;

  return (
    <View>
      <Text>ProductDetail</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
