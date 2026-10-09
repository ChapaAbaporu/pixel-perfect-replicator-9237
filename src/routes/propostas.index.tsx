import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { CategoryCard } from "@/components/site/Proposals";
import { categories } from "@/data/proposals";

export const Route = createFileRoute("/propostas/")({
  head: () => ({
    meta: [
      { title: "Propostas — Chapa Abaporu" },
      { name: "description", content: "Propostas da Chapa Abaporu em Comunicação, Relações Institucionais, Extensão e Pesquisa e Tesouraria." },
      { property: "og:title", content: "Propostas — Chapa Abaporu" },
      { property: "og:description", content: "Conheça as propostas por secretaria." },
    ],
  }),
  component: () => (
    <>
      <PageHero title="Inserir texto" text="Inserir texto" tone="blue" />
      <section className="bg-brand-cream texture-paper">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
          {categories.map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
      </section>
    </>
  ),
});
