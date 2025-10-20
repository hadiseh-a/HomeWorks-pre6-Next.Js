"use client";
import { getData } from "@/utils/getData";
import { Stack } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MultiActionAreaCard = dynamic(
  () => import("@/components/MultiActionAreaCard"),
  { ssr: false, loading: () => <p>... loading</p> }
);

function page({ params }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    async function fetching() {
      const data = await getData("http://localhost:3000/api/v1/recipes");
      const item = data.recipes.find(
        (item) => Number(item.id) === Number(params.id)
      );
      setItem(item);
    }
    fetching();
  }, [item]);
  return (
    <Suspense fallback={<p>loading...</p>}>
      <MultiActionAreaCard
        title={item.name}
        description={item.instructions?.map((el) => el)}
        key={item.id}
        id={item.id}
        image={item.image}
      />
    </Suspense>
  );
}

export default page;
