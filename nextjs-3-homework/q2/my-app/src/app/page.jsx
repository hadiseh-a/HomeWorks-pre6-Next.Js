import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const images = await res.json();

  return (
    <>
      <Typography variant="h2" textAlign={"center"}>
        Image Gallery
      </Typography>
      <Box
        component={"section"}
        display={"flex"}
        flexWrap={"wrap"}
        px={"5rem"}
        justifyContent={"center"}
        gap={3}
      >
        {images.map((image) => (
          <Link href={`http://localhost:3000/photo/${image.id}`} key={image.id}>
            <Image src={image.src} width={240} height={150} alt="picture" />
          </Link>
        ))}
      </Box>
    </>
  );
}
