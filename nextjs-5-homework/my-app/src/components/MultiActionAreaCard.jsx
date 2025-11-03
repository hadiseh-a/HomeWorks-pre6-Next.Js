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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import { deleteItem } from "@/utils/actions/actions";

export default function MultiActionAreaCard({
  option,
  title,
  description,
  image,
  id,
  onEdit,
  onDelete,
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
          pointerEvents: isCurrentPage ? "none" : "auto",
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

      <CardActions sx={{ justifyContent: "space-between" }}>
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

        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            color="secondary"
            startIcon={<EditIcon />}
            onClick={() => router.push(`/admin/${option}/${id}/edit-${option}`)}
          >
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() =>deleteItem(`http://localhost:3000/api/v1/${option}/${id}`)}
          >
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
