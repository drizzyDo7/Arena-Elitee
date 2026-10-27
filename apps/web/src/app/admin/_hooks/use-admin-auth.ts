"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLoginSchema, AdminLoginForm } from "../admin.schema";

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  const form = useForm<AdminLoginForm>({
    resolver: zodResolver(adminLoginSchema),
  });

  useEffect(() => {
    fetch("/api/admin/session")
      .then((r) => r.json())
      .then((d) => setIsAuthenticated(d.authenticated))
      .catch(() => {});
  }, []);

  const onSubmit = async (data: AdminLoginForm) => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: data.password }),
    });

    if (!res.ok) {
      setLoginError("Credencial inválida. Tente novamente.");
      return;
    }

    setIsAuthenticated(true);
    setLoginError("");
  };

  return {
    isAuthenticated,
    loginError,
    form,
    handleSubmit: form.handleSubmit(onSubmit),
  };
}
