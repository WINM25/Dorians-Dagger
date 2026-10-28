import Image from "next/image";
import Section from "./Section";

export default function Sobre() {
  return (
    <Section id="sobre" title="Origem do nome">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <p className="text-lg leading-8 md:text-xl">
          A adaga representa a tentativa de Dorian de matar aquilo que revela sua verdadeira identidade,
          mas acaba simbolizando que ele não pode escapar das consequências de quem se tornou.
        </p>
        <Image src="/img/book.jpg" alt="O Retrato de Dorian Gray, de Oscar Wilde" width={400} height={600}
          className="h-auto w-65 justify-self-center" />
      </div>
      <p className="mt-6 border-l-2 border-ac pl-4 text-mut">
        Inspirado em <i>O Retrato de Dorian Gray</i>, de Oscar Wilde.
      </p>
    </Section>
  );
}
