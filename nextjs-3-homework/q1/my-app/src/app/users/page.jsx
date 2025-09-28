import MultiActionAreaCard from "@/components/MultiActionAreaCard";
import { getData } from "@/utils/getData";
import { flex, Stack } from "@mui/system";
import React, { Suspense } from "react";

export default async function page() {
  const data = await getData("https://dummyjson.com/users");

  return (
    <Stack direction="row" display="flex" flexWrap="wrap" gap="1rem">
      {data.users.map((item) => (
        <Suspense fallback={<p>loading...</p>} key={item.id}>
          <MultiActionAreaCard
            title={
              item.firstName + "    " + item.maidenName + "  " + item.lastName
            }
            description={`age:${item.age},gender:${item.gender}`}
            key={item.id}
            id={item.id}
            image={item.image}
            option="users"
          />
        </Suspense>
      ))}
    </Stack>
  );
}
