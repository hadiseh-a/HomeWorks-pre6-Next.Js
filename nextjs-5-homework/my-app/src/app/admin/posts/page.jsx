"use client";
import { getData } from "@/utils/getData";
import { flex, Stack } from "@mui/system";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const MultiActionAreaCard = dynamic(
  () => import("@/components/MultiActionAreaCard"),
  { ssr: false, loading: () => <p>... loading</p> }
);

export default function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetching() {
      const data = await getData("http://localhost:3000/api/v1/posts");
      setData(data);
    }
    fetching();
  }, [data]);

  const router = useRouter();

  return (
    <Stack direction="row" display="flex" flexWrap="wrap" gap="1rem">
      <Button onClick={() => router.push("/admin/posts/create-posts")} fullWidth>
        <AddCircleOutlineIcon fontSize="large" />
      </Button>

      {data.posts?.map((item) => (
        <Suspense fallback={<p>loading...</p>} key={item.id}>
          {" "}
          <MultiActionAreaCard
            title={item.title}
            description={item.body?item.body:item.description}
            id={item.id}
            option={"posts"}
            key={item.id}
          />
        </Suspense>
      ))}
    </Stack>
  );
}
