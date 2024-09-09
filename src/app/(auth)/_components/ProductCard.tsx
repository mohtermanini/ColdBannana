import React from "react";
import Link from "next/link";

import { Card, Spinner } from "react-bootstrap";
import styled from "styled-components";

//Images
import placeholderImage from "@/common/assets/images/placeholder-image.jpg";
import { Product } from "@/features/products/types/Product";

const StyledCard = styled(Card)`
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default function ProductCard({ product }: { product: Product }) {
  const { id, product_name, image, price } = product;

  return (
    <Link href={`/products/${id}`}>
      <StyledCard>
        <Card.Img src={image} className="object-fit-cover" style={{ height: "250px", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }} />
        <Card.Body>
          <Card.Title className="fw-bold text-truncate">{product_name}</Card.Title>
          <Card.Text className="fw-bold text-muted">£{price}</Card.Text>
        </Card.Body>
      </StyledCard>
    </Link>
  );
}

export const ProductCardPlaceholder = () => (
  <StyledCard>
    <Card.Img src={placeholderImage.src} className="object-fit-cover" style={{ height: "250px", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }} />
    <Card.Body className="d-flex gap-2">
      <Card.Title className="fw-bold text-muted">Loading...</Card.Title>
      <Spinner animation="border" role="status" className="ms-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Card.Body>
  </StyledCard>
);
