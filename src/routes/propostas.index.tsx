import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { CategoryCard } from "@/components/site/Proposals";
import { categories } from "@/data/proposals";

export const Route = createFileRoute("/propostas/")({
  head: () => ({
    meta: [
      { title: "Propostas — Chapa Abaporu" },
      { name: "description", content: "Propostas da Chapa Abaporu em DIREX, Comunicação, Relações Institucionais, Extensão e Pesquisa Tesouraria e Cultura." },
      { property: "og:title", content: "Propostas — Chapa Abaporu" },
      { property: "og:description", content: "Conheça as propostas por secretaria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Nossas propostas" text="Nossas propostas buscam construir um CACE mais ativo, participativo e próximo dos estudantes. Conheça as iniciativas que planejamos para fortalecer nosso curso, ampliar a participação estudantil e transformar nossa vivência acadêmica." tone="green" />
      <section className="bg-brand-cream texture-paper">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
          {categories.map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
      </section>
    </>
  ),
});
