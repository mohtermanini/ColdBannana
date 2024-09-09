import React from "react";
import Link from "next/link";

import { Col, Container, Row } from "react-bootstrap";

import ProductCard, { ProductCardPlaceholder } from "./ProductCard";
import { Product } from "@/features/products/types/Product";

export default function ProductsList({ products, isLoading }: { products: Product[]; isLoading: boolean }) {
  if (!isLoading && products?.length === 0) return null;

  return (
    <Container>
      <Row className="row-gap-5">
        {isLoading && (
          <>
            {[...Array(3)].map((_, index) => (
              <Col key={index} md={6} lg={4} xl={3}>
                <ProductCardPlaceholder />
              </Col>
            ))}
          </>
        )}

        {!isLoading &&
          products?.map((product) => (
            <Col key={product.id} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>

      {!isLoading && (
        <div className="mt-5">
          <Link href="#" className="fw-bold" style={{ color: "#5C6DDE" }}>
            Load More
          </Link>
        </div>
      )}
    </Container>
  );
}
