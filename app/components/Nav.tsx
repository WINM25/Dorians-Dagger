const items = [["sobre","Sobre"],["banda","Banda"],["som","Som"],["shows","Shows"],["contratar","Contratar"],["contato","Contato"]];

export default function Nav() {
  return (
    <nav className="label sticky top-0 z-10 flex flex-wrap justify-center gap-4 border-b border-ln bg-bg/90 px-4 py-3.5 backdrop-blur md:gap-8">
      {items.map(([id, name]) => (
        <a key={id} href={`#${id}`} className="text-mut hover:text-white">{name}</a>
      ))}
    </nav>
  );
}
