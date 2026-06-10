"use client";

export function AdminLogout() {
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={logout}
      className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/60 transition hover:border-orange/60 hover:text-white"
    >
      Logout
    </button>
  );
}
