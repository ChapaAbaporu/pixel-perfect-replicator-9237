import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { CategoryCard, ProposalCard } from "@/components/site/Proposals";
import { TeamCarousel } from "@/components/site/TeamCarousel";
import { getDepartmentMembers } from "@/data/team";
import { categories, getCategory, type Proposal } from "@/data/proposals";

export const Route = createFileRoute("/propostas/$slug")({
  loader: ({ params }) => {
    if (params.slug === "tesouraria") throw redirect({ to: "/propostas/$slug", params: { slug: "direx" } });
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.category.name ?? "Propostas";
    const desc = `Conheça as propostas de ${name} da Chapa Abaporu para o CACE.`;
    return {
      meta: [
        { title: `${name} — Propostas da Chapa Abaporu` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} — Chapa Abaporu` },
        { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CategoryPage,
});

/** Agrupa propostas por subdivisão, mantendo a ordem original. */
function groupProposals(list: Proposal[]): [string | undefined, Proposal[]][] {
  const groups: [string | undefined, Proposal[]][] = [];
  for (const p of list) {
    const last = groups[groups.length - 1];
    if (last && last[0] === p.group) last[1].push(p);
    else groups.push([p.group, [p]]);
  }
  return groups;
}

function CategoryPage() {
  const { category: c } = Route.useLoaderData();
  const others = categories.filter((o) => o.slug !== c.slug);
  return (
    <>
      <PageHero title={c.name} text={c.intro} tone={c.tone} />
      <section className="bg-brand-cream texture-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          {groupProposals(c.proposals).map(([group, items]) => (
            <div key={group ?? "all"} className={group ? "mb-14 last:mb-0" : undefined}>
              {group && <h2 className="mb-6 text-4xl text-brand-green">{group}</h2>}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => <ProposalCard key={p.title} p={p} category={c} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-brand-cream texture-paper" aria-labelledby="department-members">
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
          <h2 id="department-members" className="mb-8 text-4xl text-brand-red">Membros de {c.name}</h2>
          <TeamCarousel members={getDepartmentMembers(c.slug)} />
        </div>
      </section>
      <section className="border-t-4 border-brand-green bg-brand-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl text-brand-green">Confira as outras propostas</h2>
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
