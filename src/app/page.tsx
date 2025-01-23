"use client";

import { useState } from "react";
import LoginPage from "./auth/login/page";

export default function HomePage() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? (
        <div>Dashboard</div>
      ) : (
        <LoginPage setIsLogged={setIsLogged} />
      )}
    </div>
  );
}
