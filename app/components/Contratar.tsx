import Image from "next/image";
import Section from "./Section";
import { rider } from "../data";

export default function Contratar() {
  return (
    <Section id="contratar" title="Contratação & rider técnico">
      <div className="grid gap-5 md:grid-cols-2">
        {rider.map((card) => (
          <div key={card.title} className="border border-ln bg-bg2 p-6">
            <h3 className="label mb-3">{card.title}</h3>
            <ul className="list-disc space-y-1 pl-5 text-[15px] text-neutral-300">
              {card.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
        <div className="border border-ln bg-bg2 p-6">
          <h3 className="label mb-3">Mapa do palco</h3>
          <Image src="/img/stage.jpg" alt="Mapa do palco" width={1100} height={615} className="h-auto w-full bg-white" />
        </div>
      </div>
    </Section>
  );
}
