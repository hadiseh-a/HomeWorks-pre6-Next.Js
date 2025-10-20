import * as React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Link href={"/users"}>
        <Grid
          sx={{
            px: 40,
            py: 9,
            my: 1,
            border: "1px solid grey",
            width: 100,
            height: 100,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" align="center">
            users
          </Typography>
        </Grid>
      </Link>{" "}
      <Link href={"/posts"}>
        <Grid
          sx={{
            px: 40,
            py: 9,
            my: 1,
            border: "1px solid grey",
            width: 100,
            height: 100,
          }}
        >
          <Typography variant="h3">posts</Typography>
        </Grid>
      </Link>{" "}
      <Link href={"/recipes"}>
        <Grid
          sx={{
            px: 40,
            py: 9,
            my: 1,
            border: "1px solid grey",
            width: 100,
            height: 100,
          }}
        >
          <Typography variant="h3">recipes</Typography>
        </Grid>
      </Link>
    </Grid>
  );
}
