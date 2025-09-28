import MultiActionAreaCard from "@/components/MultiActionAreaCard";
import { getData } from "@/utils/getData";
import { Stack } from "@mui/material";
import React, { Suspense } from "react";

async function page({ params }) {
  const data = await getData("https://dummyjson.com/recipes");
  const item = data.recipes.find(
    (item) => Number(item.id) === Number(params.id)
  );
  return (
    <Suspense fallback={<p>loading...</p>}>
      <MultiActionAreaCard
        title={item.name}
        description={item.instructions.map((el) => el)}
        key={item.id}
        id={item.id}
        image={item.image}
      />
    </Suspense>
  );
}

export default page;
