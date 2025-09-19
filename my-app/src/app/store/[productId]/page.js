import { notFound } from "next/navigation";
import React from "react";

function product({ params }) {
  if (params.productId != 1) return <div>product {params.productId}</div>;
  return notFound();
}

export default product;
