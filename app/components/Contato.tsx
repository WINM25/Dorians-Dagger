import Section from "./Section";
import { links } from "../data";

export default function Contato() {
  return (
    <Section id="contato" title="Booking & contato" className="text-center">
      <p className="mb-6 text-mut">
        Propostas de shows, festivais, licenciamento, alinhamento de rider e parcerias.
      </p>
      <a href={links.whatsapp} target="_blank" rel="noopener" className="block text-3xl">+55 64 9933-2127</a>
      <p className="label mb-6 mt-1.5 text-[11px] text-mut">WhatsApp · Victor Vaz</p>
      <a href={links.email} className="mb-6 block text-2xl md:text-3xl">doriansdagger@gmail.com</a>
      <a className="btn" href={links.instagram} target="_blank" rel="noopener">Instagram @dorians_dagger</a>
    </Section>
  );
}
