"use client";
import { getData } from "@/utils/getData";
import { flex, Stack } from "@mui/system";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const MultiActionAreaCard = dynamic(
  () => import("@/components/MultiActionAreaCard"),
  { ssr: false, loading: () => <p>... loading</p> }
);

export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetching() {
      const data = await getData("http://localhost:3000/api/v1/recipes");
      setData(data);
    }
    fetching();
  }, [data]);

  const router = useRouter();
  
  return (
    <Stack direction="row" display="flex" flexWrap="wrap" gap="1rem">
      <Button onClick={() => router.push("/addPosts")} fullWidth>
        <AddCircleOutlineIcon fontSize="large" />
      </Button>

      {data.recipes?.map((item) => (
        <Suspense fallback={<p>loading...</p>} key={item.id}>
          <MultiActionAreaCard
            title={item.name?item.name:item.title}
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
