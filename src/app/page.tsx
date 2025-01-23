"use client";

import { useState } from "react";
import { redirect } from "next/navigation";

export default function HomePage() {
  const [isLogged, setIsLogged] = useState(true);
  console.log(setIsLogged);

  return <div>{isLogged ? <div>Dashboard</div> : redirect("/login")}</div>;
}
