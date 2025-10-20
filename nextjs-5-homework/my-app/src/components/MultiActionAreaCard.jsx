"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function MultiActionAreaCard({
  option,
  title,
  description,
  image,
  id,
}) {
  const router = useRouter();
  const pathname = usePathname();

  const cleanPath = pathname.replace(/\/$/, "");
  const targetPath = option ? `/${option}/${id}` : "#";
  const isCurrentPage = option ? cleanPath === targetPath : true;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          if (!isCurrentPage) router.push(targetPath);
        }}
        sx={{
          cursor: isCurrentPage ? "default" : "pointer",
          pointerEvents: isCurrentPage ? "none" : "auto", // غیرقابل کلیک کردن کل کارت
        }}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={345}
            height={200}
            style={{ objectFit: "cover", width: "100%" }}
          />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            if (!isCurrentPage) router.push(targetPath);
          }}
          disabled={isCurrentPage}
          sx={{
            opacity: isCurrentPage ? 0.5 : 1,
            pointerEvents: isCurrentPage ? "none" : "auto",
          }}
        >
          Open
        </Button>
      </CardActions>
    </Card>
  );
}
