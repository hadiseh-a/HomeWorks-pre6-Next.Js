import { Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Stack bgcolor={"white"}>
      <Typography variant="h1">Hellooo</Typography>
      <Button variant="contained" >
        <Link href={"/admin"}>admin page</Link>
      </Button>
    </Stack>
  );
}
