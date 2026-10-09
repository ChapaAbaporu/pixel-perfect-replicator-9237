import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { Placeholder } from "@/components/site/Placeholder";
import { news } from "@/data/site";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — Chapa Abaporu" },
      { name: "description", content: "Comunicados, atividades, eventos e atualizações da Chapa Abaporu." },
      { property: "og:title", content: "Notícias — Chapa Abaporu" },
      { property: "og:description", content: "Acompanhe as atualizações da Chapa Abaporu." },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero title="Inserir texto" text="Inserir texto" tone="blue" />
      <section className="bg-brand-cream texture-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          {news.length === 0 ? (
            <div className="mx-auto max-w-lg rounded-2xl bg-brand-paper p-10 text-center card-pop">
              <Newspaper className="mx-auto size-12 text-brand-red" />
              <h2 className="mt-4 text-4xl text-brand-green">Inserir texto</h2>
              <p className="mt-3 text-brand-green/85">Inserir texto</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.map((n) => (
                <article key={n.id} className="overflow-hidden rounded-2xl bg-brand-paper card-pop">
                  {n.image ? <img src={n.image} alt="" className="aspect-video w-full object-cover" /> : <Placeholder label="Imagem da notícia" className="aspect-video" />}
                  <div className="p-6">
                    <time className="eyebrow text-brand-red">{n.date}</time>
                    <h2 className="mt-2 text-3xl text-brand-green">{n.title}</h2>
                    <p className="mt-3 text-brand-green/85">{n.text}</p>
                    {n.url && <a href={n.url} className="mt-4 inline-block font-display uppercase text-brand-red">Ler completa →</a>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
