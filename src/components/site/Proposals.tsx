import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, ChevronDown, Coins, Handshake, Megaphone } from "lucide-react";
import { useState } from "react";
import { toneClasses, type Category, type Proposal } from "@/data/proposals";

export const icons = { megaphone: Megaphone, handshake: Handshake, book: BookOpen, coins: Coins };

export function CategoryCard({ c }: { c: Category }) {
  const t = toneClasses[c.tone];
  const Icon = icons[c.icon];
  return (
    <Link
      to="/propostas/$slug"
      params={{ slug: c.slug }}
      className={`group flex flex-col rounded-2xl p-6 card-pop transition-transform hover:-translate-y-1 ${t.bg} ${t.text}`}
    >
      <span className="grid size-16 place-items-center rounded-full bg-brand-cream" data-placeholder={`Ícone ${c.name}`}>
        <Icon className={`size-8 ${t.soft}`} aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-3xl">{c.name}</h3>
      <p className="mt-3 flex-1 text-sm opacity-90">{c.short}</p>
      <span className={`mt-6 inline-flex items-center gap-2 font-display uppercase tracking-wider ${t.accent}`}>
        Ver propostas <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </Link>
  );
}

export function ProposalCard({ p, category }: { p: Proposal; category: Category }) {
  const [open, setOpen] = useState(false);
  const t = toneClasses[category.tone];
  const id = `prop-${p.title.replace(/\W+/g, "-")}`;
  return (
    <article className="rounded-2xl bg-brand-paper card-pop">
      <div className={`h-3 rounded-t-[0.9rem] ${t.bg}`} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl text-brand-green">{p.title}</h3>
          {p.status && <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${t.bg} ${t.text}`}>{p.status}</span>}
        </div>
        <p className="mt-3 text-brand-green/85">{p.summary}</p>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className={`mt-4 inline-flex items-center gap-1 font-display uppercase tracking-wider ${category.tone === "yellow" ? "text-brand-red" : t.soft}`}
        >
          {open ? "Ver menos" : "Ver detalhes"}
          <ChevronDown className={`size-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <dl id={id} className="mt-4 space-y-4 border-t border-brand-green/20 pt-4 text-sm text-brand-green">
            <div><dt className="eyebrow text-brand-red">Problema identificado</dt><dd className="mt-1">{p.problem}</dd></div>
            <div><dt className="eyebrow text-brand-red">Objetivo</dt><dd className="mt-1">{p.objective}</dd></div>
            <div>
              <dt className="eyebrow text-brand-red">Ações previstas</dt>
              <dd><ul className="mt-1 list-disc space-y-1 pl-5">{p.actions.map((a) => <li key={a}>{a}</li>)}</ul></dd>
            </div>
            <div><dt className="eyebrow text-brand-red">Resultado esperado</dt><dd className="mt-1">{p.result}</dd></div>
          </dl>
        )}
      </div>
    </article>
  );
}
