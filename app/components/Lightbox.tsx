
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = {
    src: string;
    alt: string;
};

export default function Lightbox({ photos }: { photos: Photo[] }) {
    const [selected, setSelected] = useState<Photo | null>(null);

    useEffect(() => {
        if (!selected) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setSelected(null);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selected]);

    return (
        <>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {photos.map((photo) => (
                    <button
                        key={photo.src}
                        type="button"
                        onClick={() => setSelected(photo)}
                        aria-label={`Ampliar imagem: ${photo.alt}`}
                        className="group relative aspect-[4/3] overflow-hidden rounded-sm"
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover transition duration-300 group-hover:scale-105"
                        />
                    </button>
                ))}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
                    onClick={() => setSelected(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visualização ampliada da imagem"
                >
                    <button
                        type="button"
                        onClick={() => setSelected(null)}
                        aria-label="Fechar imagem"
                        className="absolute right-5 top-5 z-10 text-4xl text-white hover:text-red-400"
                    >
                        &times;
                    </button>

                    <div
                        className="relative h-[85vh] w-full max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={selected.src}
                            alt={selected.alt}
                            fill
                            sizes="95vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
