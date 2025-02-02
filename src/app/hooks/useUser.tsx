"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface IUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Falha ao obter dados do usuário");
        }

        const resData = await response.json();
        setUser(resData.data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useUser;
