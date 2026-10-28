export default function Section({ id, title, children, className = "" }: {
  id: string; title: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-5xl px-5 py-14 md:py-20 ${className}`}>
      <h2 className="label mb-7 tracking-[0.35em] text-ac font-extrabold">{title}</h2>
      {children}
    </section>
  );
}
