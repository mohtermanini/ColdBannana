"use client";

import React from "react";

import { useGetProductsQuery } from "@/features/products/redux/productsExtendedApiSlice";
import ProductsList from "./ProductsList";

export default function ProductsSection() {
  const { data: products, isFetching: isProductsFetching } = useGetProductsQuery({});

  return <ProductsList products={products} isLoading={isProductsFetching} />;
}
