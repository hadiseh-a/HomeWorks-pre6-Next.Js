"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function NavBar() {
  return (
    <div>
      <Stack direction="row" spacing={2} pb={1}>
        <Link href={"/admin/posts"}>
          <Item>posts</Item>
        </Link>
        <Link href={"/admin/recipes"}>
          {" "}
          <Item>recipes</Item>
        </Link>
        <Link href={"/admin/users"}>
          {" "}
          <Item>users</Item>
        </Link>
        <Link href={"/admin"}>
          <Item>admin</Item>
        </Link>
      </Stack>
    </div>
  );
}
