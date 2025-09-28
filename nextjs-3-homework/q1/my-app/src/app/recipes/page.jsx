import MultiActionAreaCard from "@/components/MultiActionAreaCard";
import { getData } from "@/utils/getData";
import { flex, Stack } from "@mui/system";
import React, { Suspense } from "react";

export default async function page() {
  const data = await getData("https://dummyjson.com/recipes");

  return (
    <Stack direction="row" display="flex" flexWrap="wrap" gap="1rem">
      {data.recipes.map((item) => (
        <Suspense fallback={<p>loading...</p>} key={item.id}>
          <MultiActionAreaCard
            title={item.name}
            description={item.instructions.map((el) => el)}
            key={item.id}
            id={item.id}
            image={item.image}
            option={"recipes"}
          />
        </Suspense>
      ))}
    </Stack>
  );
}
