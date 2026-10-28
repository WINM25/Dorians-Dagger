"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Section from "./Section";
import { gallery } from "../data";

export default function Shows() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  return (
    <Section id="shows" title="Ao vivo">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {gallery.map(([src, alt], i) => (
          <button key={src} onClick={() => setOpen(i)} aria-label={`Ampliar: ${alt}`} className="cursor-zoom-in">
            <Image
              src={`/img/${src}.jpg`}
              loading="eager"
              alt={alt}
              width={700}
              height={700}
              className="aspect-square h-full w-full object-cover grayscale-[.85] contrast-110 transition duration-300 hover:grayscale-0"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4"
        >
          <button onClick={close} aria-label="Fechar" className="absolute right-5 top-5 text-3xl text-white">✕</button>
          <button
            onClick={(e) => { e.stopPropagation(); move(-1); }}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-4xl text-white"
          >‹</button>
          <Image
            src={`/img/${gallery[open][0]}.jpg`}
            alt={gallery[open][1]}
            width={1400}
            height={1400}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-full object-contain"
          />
          <button
            onClick={(e) => { e.stopPropagation(); move(1); }}
            aria-label="Próxima"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-4xl text-white"
          >›</button>
        </div>
      )}
    </Section>
  );
}