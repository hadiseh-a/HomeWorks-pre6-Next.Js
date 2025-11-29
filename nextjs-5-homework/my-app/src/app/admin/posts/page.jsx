"use client";
import { getData } from "@/utils/getData";
import { Stack } from "@mui/system";
import dynamic from "next/dynamic";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MultiActionAreaCard = dynamic(
  () => import("@/components/MultiActionAreaCard"),
  { ssr: false, loading: () => <p>... loading</p> }
);

export default function Page() {
  const [data, setData] = useState({ posts: [] });
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData("http://localhost:3000/api/v1/posts", "posts");
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Stack direction="row" display="flex" flexWrap="wrap" gap="1rem">
      <Button onClick={() => router.push("/admin/posts/create-posts")} fullWidth>
        <AddCircleOutlineIcon fontSize="large" />
      </Button>
      {data.posts?.map((item) => (
        <Suspense fallback={<p>loading...</p>} key={item.id}>
          <MultiActionAreaCard
            title={item.title}
            description={item.body ? item.body : item.description}
            id={item.id}
            option={"posts"}
            image={item.image} // اگر image نداری، حذف کن
          />
        </Suspense>
      ))}
    </Stack>
  );
}