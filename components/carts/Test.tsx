"use client";
import { useState, useRef, useEffect } from "react";

export default function POSScanner() {
  const [items, setItems] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // keep input always focused, even after clicks
  useEffect(() => {
    const focus = () => inputRef.current?.focus();
    focus();
    window.addEventListener("click", focus);
    return () => window.removeEventListener("click", focus);
  }, []);

  const fetchProduct = async (barcode: string) => {
    if (!barcode) return;
    try {
      // adjust your API route to match your backend
      const res = await fetch(`/api/products/${encodeURIComponent(barcode)}`);
      if (!res.ok) throw new Error("Not found");
      const product = await res.json();
      setItems((prev) => [...prev, product]);
    } catch (err) {
      console.error("Error fetching product", err);
      // optional: show toast or alert
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const barcode = (e.target as HTMLInputElement).value.trim();
      if (barcode) {
        fetchProduct(barcode);
      }
      (e.target as HTMLInputElement).value = ""; // clear for next scan
    }
  };

  return (
    <div className="p-4">
      {/* invisible but focusable input */}
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        autoFocus
        type="text"
        className="absolute top-0 left-0 h-px w-px opacity-0"
      />

      <h1 className="mb-4 text-xl font-bold">Scanned Items</h1>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="rounded border p-2">
            {item.title ?? item.name ?? "Unknown product"} — {item.price ?? ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
