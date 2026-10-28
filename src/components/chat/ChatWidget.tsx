"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Source {
  title: string;
  url: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

const GREETING: Message = {
  role: "assistant",
  content: "Hi! Ask me about SmartWay's products and services, e.g. dialyzers, IVD analyzers or turnkey dialysis units.",
};

const SITE_PATH = String.raw`\/(?:products\/[a-z0-9-]+|services|faq|contact|about)\b`;
// Matches a markdown link "[Elisio-HX](/products/elisio-hx)" or a bare "/products/elisio-hx"
const LINK_PATTERN = new RegExp(String.raw`\[([^\]]+)\]\((${SITE_PATH})\)|(${SITE_PATH})`, "g");

// Turns site paths in the answer into clickable links
export function renderWithLinks(text: string) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of Array.from(text.matchAll(LINK_PATTERN))) {
    const [whole, label, mdPath, barePath] = match;
    const href = mdPath ?? barePath;
    parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} href={href} className="underline text-[#009065]">
        {label ?? href}
      </Link>,
    );
    last = match.index! + whole.length;
  }
  parts.push(text.slice(last));
  return parts;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    // History sent to the server: past turns without the greeting or source lists
    const history = messages.slice(1).map(({ role, content }) => ({ role, content }));
    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, history }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        res.ok
          ? { role: "assistant", content: data.answer, sources: data.sources }
          : { role: "assistant", content: data.error ?? "Something went wrong. Please try again." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Couldn't reach the assistant. Please check your connection." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open product assistant"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#009065] text-white shadow-lg hover:bg-[#007a56] focus:outline-none focus:ring-4 focus:ring-[#a9ed42]"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="SmartWay product assistant"
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      className="fixed bottom-5 right-5 z-50 flex h-[32rem] max-h-[calc(100vh-2.5rem)] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
    >
      <div className="flex items-center justify-between bg-[#009065] px-4 py-3 text-white">
        <div>
          <p className="font-semibold">SmartWay Assistant</p>
          <p className="text-xs opacity-80">AI answers, please confirm with our team</p>
        </div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close assistant" className="rounded p-1 hover:bg-white/20">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto bg-[#f7f8f5] p-4 text-sm">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-xl px-3 py-2 ${
                m.role === "user" ? "bg-[#009065] text-white" : "bg-white text-[#1d1f13] shadow-sm"
              }`}
            >
              {m.role === "assistant" ? renderWithLinks(m.content) : m.content}
              {m.sources && m.sources.length > 0 && (
                <ul className="mt-2 space-y-1 border-t border-gray-100 pt-2 text-xs">
                  {m.sources.slice(0, 3).map((s) => (
                    <li key={s.url + s.title}>
                      <Link href={s.url} className="text-[#009065] underline">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="h-4 w-4 animate-spin" /> Thinking…
          </div>
        )}
      </div>

      <form onSubmit={send} className="flex gap-2 border-t border-gray-200 p-3">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={500}
          placeholder="Ask about a product…"
          aria-label="Your question"
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#009065] focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send"
          className="rounded-lg bg-[#009065] px-3 text-white disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
      <p className="px-3 pb-2 text-[10px] text-gray-400">Please don&apos;t share personal or patient details.</p>
    </div>
  );
}
