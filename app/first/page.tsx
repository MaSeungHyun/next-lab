"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { useState } from "react";

export default function Page() {
  const [cookie, setCookie] = useState("");
  const router = useRouter();

  const handleClick = () => {
    router.push("/second");
  };

  const handleClickBack = () => {
    router.back();
  };

  const handleClickGetCookie = () => {
    const cookie = document.cookie;
    setCookie(cookie);
  };
  return (
    <>
      <h2 className="text-white font-bold">First Page</h2>
      <p className="text-amber-600">{cookie && `🍪 ${cookie}`}</p>
      <Button onClick={handleClick}>Second Page</Button>
      <Button onClick={handleClickGetCookie}>Get Cookie</Button>
      <Button onClick={handleClickBack}>Back</Button>
    </>
  );
}
