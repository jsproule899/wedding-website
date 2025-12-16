"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin(e: any) {
    e.preventDefault();
    const password = e.target.password.value;

    const res = await fetch("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
     router.push("/admin");
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-40 text-center">
      <h1 className="text-2xl mb-6">Admin Login</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="password"
          name="password"
          placeholder="admin password"
          className="w-full border p-2 text-lg focus:outline outline-white"
        />

        <button
          className=" text-xl px-10 py-2 bg-white text-primary cursor-pointer"
          type="submit"
        >
          Login
        </button>

        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}
