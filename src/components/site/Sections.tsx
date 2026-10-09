import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/proposals";
import { CategoryCard } from "./Proposals";
import { TeamCarousel } from "./TeamCarousel";
import { Blob, Leaf, Sun } from "./Decor";
import logoAbaporu from "@/assets/logo-abaporu.png";
import emblemaCace from "@/assets/emblema-cace.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue texture-print">
      <Blob className="pointer-events-none absolute -left-24 bottom-0 size-80 text-brand-green/60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow text-brand-yellow">Chapa Abaporu · CACE</p>
          <h1 className="mt-4 text-6xl text-brand-paper sm:text-7xl xl:text-8xl">
            Juntos por uma universidade <span className="text-brand-yellow">mais justa</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-brand-paper/90">Cultura, povo e democracia para transformar a realidade.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/" hash="propostas" className="btn-sun">Conheça as propostas <ArrowRight className="size-4" /></Link>
            <Link to="/quem-somos" className="btn-outline-cream">Quem somos</Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={logoAbaporu}
            alt="Emblema da Chapa Abaporu: a figura do Abaporu ao lado de um cacto e um sol, dentro de um círculo vermelho com a palavra ABAPORU"
            className="relative mx-auto block aspect-square w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cream texture-paper">
      <Leaf className="pointer-events-none absolute -left-10 top-10 size-40 text-brand-green/15" />
      <Leaf className="pointer-events-none absolute -right-10 bottom-10 size-40 rotate-180 text-brand-red/15" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-[1fr_1fr_0.8fr]">
        <div>
          <h2 className="text-5xl text-brand-red">Quem somos</h2>
          <p className="mt-5 leading-relaxed text-brand-green">
            A Chapa Abaporu nasce do desejo coletivo de um CACE próximo, combativo e criativo. Inspirados no modernismo
            brasileiro, acreditamos numa universidade que dialoga com o povo e valoriza a cultura.
          </p>
        </div>
        <div>
          <h2 className="text-5xl text-brand-green">Nossa missão</h2>
          <p className="mt-5 leading-relaxed text-brand-green">
            Fortalecer a participação estudantil, com transparência e democracia, defendendo a universidade pública e
            seu compromisso social.
          </p>
          <Link to="/quem-somos" className="btn-red mt-8">Saiba mais <ArrowRight className="size-4" /></Link>
        </div>
        <div className="card-pop relative self-center overflow-hidden rounded-[2rem] bg-brand-paper p-7">
          <img
            src={emblemaCace}
            alt="Emblema do CACE UFMG: um triângulo vermelho dentro de um círculo creme, rodeado por triângulos facetados em tons de vermelho e laranja, com as inscrições CACE, UFMG e 2010"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export function TeamSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="equipe" className="relative overflow-hidden border-t-4 border-brand-green bg-brand-cream texture-paper">
      <Sun className="pointer-events-none absolute -right-12 top-8 size-36 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
        {withHeading && (
          <>
            <h2 className="text-5xl text-brand-green md:text-6xl">Nossa equipe</h2>
            <p className="mt-3 max-w-xl text-brand-green/85">Gente de diferentes cursos e trajetórias, unida por um CACE de todos. Clique em um cartão para conhecer cada integrante.</p>
          </>
        )}
        <div className="mt-10"><TeamCarousel /></div>
      </div>
    </section>
  );
}

export function ProposalsSection() {
  return (
    <section id="propostas" className="relative scroll-mt-20 overflow-hidden bg-brand-blue texture-print">
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl text-brand-paper md:text-6xl">Nossas <span className="text-brand-yellow">propostas</span></h2>
            <p className="mt-4 max-w-xl text-brand-paper/90">Queremos uma universidade cada vez mais popular, democrática e comprometida com a transformação social.</p>
          </div>
          <Sun className="size-20" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
      </div>
    </section>
  );
}

export function PageHero({ title, text, tone = "red" }: { title: string; text?: string; tone?: "red" | "blue" | "green" | "yellow" }) {
  const map = {
    red: "bg-brand-red text-brand-paper",
    blue: "bg-brand-blue text-brand-paper",
    green: "bg-brand-green text-brand-paper",
    yellow: "bg-brand-yellow text-brand-green",
  };
  return (
    <section className={`relative overflow-hidden texture-print ${map[tone]}`}>
      <Sun className="pointer-events-none absolute -right-8 -top-8 size-40 opacity-90" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <h1 className="text-6xl md:text-8xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg opacity-90">{text}</p>}
      </div>
    </section>
  );
}
