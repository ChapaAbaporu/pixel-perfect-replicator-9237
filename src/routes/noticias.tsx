import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText } from "lucide-react";
import { PageHero } from "@/components/site/Sections";
import { minutes } from "@/data/minutes";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Atas — Chapa Abaporu" },
      { name: "description", content: "Atas das reuniões semanais da Chapa Abaporu: discussões, decisões e encaminhamentos." },
      { property: "og:title", content: "Atas — Chapa Abaporu" },
      { property: "og:description", content: "Acompanhe as discussões, decisões e encaminhamentos das reuniões da Chapa Abaporu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero title="Nossas Atas" text="Confira as atas das nossas reuniões semanais e acompanhe de perto as discussões, decisões e encaminhamentos da chapa Abaporu." tone="green" />
      <section className="bg-brand-cream texture-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {minutes.map((minute) => {
                const content = <>
                  <FileText className="mx-auto size-12 text-brand-red" aria-hidden="true" />
                  <h2 className="mt-4 text-4xl text-brand-green">{minute.title}</h2>
                  <p className="mt-3 text-brand-ink">{minute.date}</p>
                  {minute.url && <span className="mt-6 inline-flex items-center gap-2 font-display uppercase text-brand-red underline underline-offset-4">Abrir PDF <ArrowUpRight className="size-5" aria-hidden="true" /></span>}
                </>;
                return minute.url ? (
                  <a key={minute.id} href={minute.url} target="_blank" rel="noopener noreferrer" aria-label={`${minute.title} — ${minute.date} — Abrir PDF em nova aba`} className="block cursor-pointer rounded-2xl border-2 border-brand-red bg-brand-paper p-10 text-center card-pop transition-transform motion-safe:hover:-translate-y-1 hover:bg-brand-yellow/15">
                    {content}
                  </a>
                ) : <article key={minute.id} className="rounded-2xl bg-brand-paper p-10 text-center card-pop">{content}</article>;
              })}
            </div>
        </div>
      </section>
    </>
  );
}
