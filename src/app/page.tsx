"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/home");
  return (
    <main>
      <Button variant="contained">Text</Button>
    </main>
  );
}
