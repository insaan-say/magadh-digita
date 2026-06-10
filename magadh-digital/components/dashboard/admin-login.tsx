"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: form.get("password") })
    });

    if (response.ok) {
      window.location.reload();
      return;
    }

    setLoading(false);
    setError("Invalid password or admin env is not configured.");
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto mt-10 max-w-md rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
    >
      <label className="block">
        <span className="text-xs uppercase tracking-[0.22em] text-white/44">
          Admin password
        </span>
        <Input
          className="mt-3"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </label>
      {error ? <p className="mt-3 text-sm text-orange">{error}</p> : null}
      <Button className="mt-5 w-full" type="submit" disabled={loading}>
        {loading ? "Checking..." : "Open dashboard"}
      </Button>
    </form>
  );
}
