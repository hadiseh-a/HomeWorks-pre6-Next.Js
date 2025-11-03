"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { createItem, updateItem } from "@/utils/actions/actions";

export default function CardForm({ initialData, content }) {
  const router = useRouter();

  // اگر initialData وجود داشته باشد یعنی در حالت ویرایش هستیم
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    image: initialData?.image || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    initialData
      ? updateItem("http://localhost:3000/api/v1/posts", content, formData)
      : createItem("http://localhost:3000/api/v1/posts", content, formData);
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "2rem auto",
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {initialData ? "Edit Card" : `Create New ${content}`}
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
          />
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ px: 4 }}
        >
          {initialData ? "Save Changes" : "Create"}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => router.back()}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
