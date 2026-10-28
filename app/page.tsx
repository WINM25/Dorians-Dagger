import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Banda from "./components/Banda";
import Som from "./components/Som";
import Shows from "./components/Shows";
import Contratar from "./components/Contratar";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Banda />
        <Som />
        <Shows />
        <Contratar />
        <Contato />
      </main>
      <footer className="label border-t border-ln px-5 py-7 text-center leading-relaxed text-mut">
        Dorian’s Dagger · Catalão, Goiás — Brasil · 2026
      </footer>
    </>
  );
}
