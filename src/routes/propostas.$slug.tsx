import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { CategoryCard, ProposalCard } from "@/components/site/Proposals";
import { Placeholder } from "@/components/site/Placeholder";
import { categories, getCategory } from "@/data/proposals";

export const Route = createFileRoute("/propostas/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.category.name ?? "Propostas";
    const desc = loaderData?.category.short ?? "Propostas da Chapa Abaporu.";
    return {
      meta: [
        { title: `${name} — Propostas da Chapa Abaporu` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} — Chapa Abaporu` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category: c } = Route.useLoaderData();
  const others = categories.filter((o) => o.slug !== c.slug);
  return (
    <>
      <PageHero title={c.name} text={c.intro} tone={c.tone} />
      <section className="bg-brand-cream texture-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <p className="mb-8 rounded-xl border-2 border-dashed border-brand-red/50 bg-brand-paper px-4 py-3 text-sm text-brand-red">
            Inserir texto
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.proposals.map((p) => <ProposalCard key={p.title} p={p} category={c} />)}
          </div>
          <div className="mt-16 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-4xl text-brand-green">{c.spaceTitle}</h2>
              <p className="mt-3 text-brand-green/85">{c.spaceText}</p>
            </div>
            <Placeholder label={c.spaceTitle} className="aspect-video rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="border-t-4 border-brand-green bg-brand-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl text-brand-green">Inserir texto</h2>
            <Link to="/" className="inline-flex items-center gap-2 font-display uppercase text-brand-red"><ArrowLeft className="size-4" /> Voltar ao início</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((o) => <CategoryCard key={o.slug} c={o} />)}
          </div>
        </div>
      </section>
    </>
  );
}
