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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuemSomos,
});

const blocks = [
  { t: "Inserir texto 137", c: "text-brand-red", p: "Inserir texto 138" },
  { t: "Inserir texto 139", c: "text-brand-green", p: "Inserir texto 140" },
  { t: "Inserir texto 141", c: "text-brand-red", p: "Inserir texto 142" },
  { t: "Inserir texto 143", c: "text-brand-green", p: "Inserir texto 144" },
];

const commitments = ["Inserir texto 145", "Inserir texto 146", "Inserir texto 147", "Inserir texto 148"];

function QuemSomos() {
  return (
    <>
      <PageHero title="Inserir texto 149" text="Inserir texto 150" tone="red" />
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
            <h2 className="text-5xl text-brand-yellow">Inserir texto 151</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {commitments.map((c, i) => (
                <li key={c} className="flex items-center gap-4 text-lg">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-yellow font-display text-brand-green">{i + 1}</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="mt-20 text-5xl text-brand-red">Inserir texto 152</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => <Placeholder key={n} label={`Foto de atividade ${n}`} className="aspect-[4/3] rounded-2xl" />)}
          </div>
        </div>
      </section>
    </>
  );
}
