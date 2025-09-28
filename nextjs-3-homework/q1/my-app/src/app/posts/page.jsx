import MultiActionAreaCard from "@/components/MultiActionAreaCard";
import { getData } from "@/utils/getData";
import { flex, Stack } from "@mui/system";
import React, { Suspense } from "react";

export default async function page() {
  const data = await getData("https://dummyjson.com/posts");

  return (
    <Stack direction="row" display="flex" flexWrap="wrap" gap="1rem">
      {data.posts.map((item) => (
        <Suspense fallback={<p>loading...</p>} key={item.id}>
          {" "}
          <MultiActionAreaCard
            title={item.title}
            description={item.body}
            id={item.id}
            option={"posts"}
            key={item.id}
          />
        </Suspense>
      ))}
    </Stack>
  );
}
