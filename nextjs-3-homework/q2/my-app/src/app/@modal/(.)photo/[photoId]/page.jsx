"use client";
import TransitionsModal from "@/components/TransitionsModal";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";

function Page({ params }) {
  const router = useRouter();
  const { photoId } = use(params);
  const [img, setImg] = useState(null);

  useEffect(() => {
    async function fetching() {
      const res = await fetch("http://localhost:3000/data.json");
      const images = await res.json();
      const foundImg = images.find((img) => String(img.id) === photoId);
      setImg(foundImg);
    }
    fetching();
  }, [photoId]);

  if (!img) return null;

  return <TransitionsModal img={img} handleClose={() => router.back()} />;
}

export default Page;
