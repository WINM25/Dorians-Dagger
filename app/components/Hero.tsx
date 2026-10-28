import Image from "next/image";
import { links } from "../data";

export default function Hero() {
  return (
    <header className="relative grid min-h-[88vh] place-items-center px-5 py-12 text-center">
      <Image src="/img/hero.jpg" alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-b from-bg/55 to-bg" />
      <div className="relative">
        <Image src="/img/logo.jpg" alt="Dorian’s Dagger" width={696} height={251} priority
          className="mx-auto h-auto w-[min(560px,86vw)] mix-blend-screen" />
        <p className="label my-5 tracking-[0.3em] text-mut">Pós-punk · Rock alternativo · Catalão, GO</p>
        <a className="btn !border-ac !bg-ac" href={links.spotify} target="_blank" rel="noopener">Ouvir no Spotify</a>
        <a className="btn" href="#contato">Contratar a banda</a>
      </div>
    </header>
  );
}
