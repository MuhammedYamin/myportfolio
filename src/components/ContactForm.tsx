"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "error">(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget; 

    setLoading(true);
    setStatus(null);

    const form = new FormData(formEl);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("📩 Response:", result);

      if (res.ok && result?.ok) {
        setStatus("ok");
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(" Network or server error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          name="name"
          placeholder="Your name"
          className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100"
          required
        />
      </div>

      <div className="mt-3">
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100"
          required
        />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending…" : "Send"}
        </button>

        {status === "ok" && (
          <div className="text-sm text-green-400">
            Message sent — thank you! \^o^/
          </div>
        )}
        {status === "error" && (
          <div className="text-sm text-red-400">
            Failed to send — try again ╯︿╰
          </div>
        )}
      </div>
    </form>
  );
}
