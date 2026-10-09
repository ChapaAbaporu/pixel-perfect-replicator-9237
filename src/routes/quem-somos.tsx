import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { Placeholder } from "@/components/site/Placeholder";
import { Leaf } from "@/components/site/Decor";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Chapa Abaporu" },
      { name: "description", content: "História, princípios, missão e visão de universidade da Chapa Abaporu." },
      { property: "og:title", content: "Quem Somos — Chapa Abaporu" },
      { property: "og:description", content: "Conheça a história e os princípios da Chapa Abaporu." },
    ],
  }),
  component: QuemSomos,
});

const blocks = [
  { t: "Nossa história", c: "text-brand-red", p: "Texto provisório: apresentação e história da Chapa Abaporu, como surgiu e quem a constrói." },
  { t: "Princípios e valores", c: "text-brand-green", p: "Participação, transparência, democracia, diversidade e compromisso com a universidade pública." },
  { t: "Missão", c: "text-brand-red", p: "Fortalecer a participação estudantil e fazer do CACE um espaço coletivo de cultura e luta." },
  { t: "Visão de universidade", c: "text-brand-green", p: "Uma universidade popular, democrática e comprometida com a transformação social." },
];

const commitments = ["Escuta ativa dos estudantes", "Prestação de contas transparente", "Gestão democrática e aberta", "Defesa da universidade pública"];

function QuemSomos() {
  return (
    <>
      <PageHero title="Quem somos" text="Cultura, povo e democracia para transformar a realidade." tone="red" />
      <section className="relative overflow-hidden bg-brand-cream texture-paper">
        <Leaf className="pointer-events-none absolute -right-10 top-20 size-48 text-brand-green/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {blocks.map((b) => (
              <div key={b.t}>
                <h2 className={`text-5xl ${b.c}`}>{b.t}</h2>
                <p className="mt-4 leading-relaxed text-brand-green">{b.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 rounded-2xl bg-brand-green p-8 text-brand-paper card-pop md:p-12">
            <h2 className="text-5xl text-brand-yellow">Compromissos com os estudantes</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {commitments.map((c, i) => (
                <li key={c} className="flex items-center gap-4 text-lg">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-yellow font-display text-brand-green">{i + 1}</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="mt-20 text-5xl text-brand-red">Atividades e campanha</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => <Placeholder key={n} label={`Foto de atividade ${n}`} className="aspect-[4/3] rounded-2xl" />)}
          </div>
        </div>
      </section>
    </>
  );
}
