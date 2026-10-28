import Image from "next/image";
import Section from "./Section";
import { members } from "../data";

export default function Banda() {
  return (
    <Section id="banda" title="A banda">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Image src="/img/band.jpg" alt="Integrantes da Dorian’s Dagger" width={900} height={1059} className="h-auto w-full" />
        <ul className="grid grid-cols-2 gap-px border border-ln bg-ln">
          {members.map(([role, name]) => (
            <li key={role} className="bg-bg2 px-5 py-4">
              <span className="label mb-1.5 block text-[11px] text-mut">{role}</span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
