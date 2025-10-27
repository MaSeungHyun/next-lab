"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/second");
  };

  const handleClickBack = () => {
    router.back();
  };
  return (
    <>
      <h2>First Page</h2>
      <Button onClick={handleClick}>Second Page</Button>
      <Button onClick={handleClickBack}>Back</Button>
    </>
  );
}
