import MultiActionAreaCard from "@/components/MultiActionAreaCard";
import { getData } from "@/utils/getData";
import { Stack } from "@mui/material";
import React, { Suspense } from "react";

async function page({ params }) {
  const data = await getData("https://dummyjson.com/posts");
  const item = data.posts.find((item) => Number(item.id) === Number(params.id));
  return (
    <Suspense fallback={<p>loading...</p>}>
      <MultiActionAreaCard
        title={item.title}
        description={item.body}
        key={item.id}
        id={item.id}
      />
    </Suspense>
  );
}

export default page;
