import Image from "next/image";
import Section from "./Section";
import { links } from "../data";

export default function Som() {
  return (
    <Section id="som" title="O som">
      <p className="text-lg leading-8 md:text-xl">
        Rock alternativo / pós-punk inspirado em Sisters of Mercy, Joy Division, Rammstein, The Cure,
        Molchat Doma, Radiohead e Interpol. Baixo marcante, guitarras sombrias, teclados atmosféricos e vocais intensos.
      </p>
      <div className="mt-12 grid items-center justify-items-center gap-9 md:grid-cols-[240px_1fr] md:justify-items-start">
        <a href={links.youtube} target="_blank" rel="noopener" aria-label="Assistir ao vídeo de apresentação"
          className="relative block w-50 md:w-full">
          <Image src="/img/short.jpg" alt="Vídeo de apresentação" width={500} height={885} className="aspect-9/16 w-full object-cover" />
          <span className="absolute inset-0 grid place-items-center bg-black/35 text-5xl">▶</span>
        </a>
        <div>
          <h3 className="label mb-3.5 tracking-[0.35em] text-ac">Vídeo de apresentação</h3>
          <p className="mb-4 text-mut">
            Compilação de momentos marcantes da banda, texturas analógicas e a crueza do pós-punk oitentista.
          </p>
          <a className="btn" href={links.youtube} target="_blank" rel="noopener">Assistir no YouTube</a>
          <a className="btn" href={links.spotify} target="_blank" rel="noopener">Playlist oficial</a>
        </div>
      </div>
    </Section>
  );
}
