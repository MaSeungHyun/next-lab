"use client";

import { useRouter } from "next/navigation";
import Button from "./components/Button";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <h2>Home</h2>
      <Button onClick={() => router.push("/first")}>First Page</Button>
      <Button onClick={() => router.push("/second")}>Second Page</Button>
    </>
  );
}
