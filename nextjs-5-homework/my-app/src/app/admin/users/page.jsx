"use client";
import { getData } from "@/utils/getData";
import { flex, Stack } from "@mui/system";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MultiActionAreaCard = dynamic(
  () => import("@/components/MultiActionAreaCard"),
  { ssr: false, loading: () => <p>... loading</p> }
);

export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetching() {
      const data = await getData("https://dummyjson.com/users");
      setData(data);
    }
    fetching();
  }, [data]);

  return (
    <Stack direction="row" display="flex" flexWrap="wrap" gap="1rem">
      {data.users?.map((item) => (
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
