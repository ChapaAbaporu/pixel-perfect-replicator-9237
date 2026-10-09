import { createFileRoute } from "@tanstack/react-router";
import { AtSign, Instagram, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { contacts } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Participação — Chapa Abaporu" },
      { name: "description", content: "Fale com a Chapa Abaporu e participe da construção do CACE." },
      { property: "og:title", content: "Participe — Chapa Abaporu" },
      { property: "og:description", content: "Fale com a Chapa Abaporu e participe." },
    ],
  }),
  component: Contato,
});

const iconFor = (label: string) => (label === "Instagram" ? Instagram : label === "E-mail" ? AtSign : MessageCircle);
const tones = ["bg-brand-red text-brand-paper", "bg-brand-blue text-brand-paper", "bg-brand-yellow text-brand-green"];

function Contato() {
  return (
    <>
      <PageHero title="Inserir texto" text="Inserir texto" tone="yellow" />
      <section className="bg-brand-cream texture-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="text-5xl text-brand-green">Inserir texto</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {contacts.map((c, i) => {
              const Icon = iconFor(c.label);
              const inner = (
                <>
                  <Icon className="size-10" />
                  <h3 className="mt-6 text-3xl">{c.label}</h3>
                  <p className="mt-2 opacity-85">{c.url ? c.handle : "Canal oficial a definir"}</p>
                </>
              );
              return c.url ? (
                <a key={c.label} href={c.url} target="_blank" rel="noreferrer" className={`rounded-2xl p-8 card-pop transition-transform hover:-translate-y-1 ${tones[i % 3]}`}>{inner}</a>
              ) : (
                <div key={c.label} className={`rounded-2xl p-8 card-pop opacity-90 ${tones[i % 3]}`}>{inner}</div>
              );
            })}
          </div>
          <div className="mt-16 rounded-2xl bg-brand-green p-10 text-brand-paper card-pop">
            <h2 className="text-5xl text-brand-yellow">Inserir texto</h2>
            <p className="mt-4 max-w-2xl text-lg">Inserir texto</p>
          </div>
        </div>
      </section>
    </>
  );
}
