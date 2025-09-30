import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

async function ImageShow({ params }) {
  const res = await fetch("http://localhost:3000/data.json");
  const images = await res.json();

  const img = images.find((img) => String(img.id) === params.photoId);
  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        ID: {img.id}
      </Typography>
      <Image
        src={img.src}
        width={450}
        height={280}
        alt="picture"
        style={{ display: "block", margin: "0 auto" }}
      />
    </>
  );
}

export default ImageShow;
