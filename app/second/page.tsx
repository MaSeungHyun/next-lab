"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/first");
  };

  const handleClickBack = () => {
    router.back();
  };
  return (
    <>
      <h2 className="text-white font-bold">Second Page</h2>
      <Button onClick={handleClick}>first Page</Button>
      <Button onClick={handleClickBack}>Back</Button>
    </>
  );
}
