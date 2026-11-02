import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/proposals";
import { CategoryCard } from "./Proposals";
import { TeamCarousel } from "./TeamCarousel";
import { Blob, Sun } from "./Decor";
import logoAbaporu from "@/assets/logo-abaporu.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-green texture-print">
      <Blob className="pointer-events-none absolute -left-24 bottom-0 size-80 text-brand-green/60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow text-brand-yellow">Eleições CACE 2026</p>
          <h1 className="mt-4 text-6xl text-brand-paper sm:text-7xl xl:text-8xl">
            CHAPA ABAPORU
          </h1>
          <p className="mt-6 max-w-md text-lg text-brand-paper/90">Romper para Reconstruir</p>
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
      <div className="relative mx-auto grid max-w-5xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-5xl text-brand-red">CIÊNCIAS DO ESTADO MERECE MAIS.</h2>
          <p className="mt-5 leading-relaxed text-brand-green">
            Um curso com identidade, potencial e muito a oferecer, mas que ainda enfrenta desafios de visibilidade, integração e reconhecimento. Acreditamos que fortalecer Ciências do Estado começa por reconhecer sua importância e dar protagonismo a quem o constrói todos os dias: seus estudantes.
          </p>
        </div>
        <div>
          <h2 className="text-5xl text-brand-green">UM CACE PRESENTE E PARTICIPATIVO.</h2>
          <p className="mt-5 leading-relaxed text-brand-green">
            Queremos um Centro Acadêmico que vá além da representação formal: que escute, acolha, articule e transforme demandas em ações. Um espaço construído coletivamente, comprometido com a formação, a integração e o fortalecimento do nosso curso.
          </p>
          <Link to="/quem-somos" className="btn-red mt-8">Saiba mais <ArrowRight className="size-4" /></Link>
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
            <h2 className="text-5xl text-brand-green md:text-6xl">Quem somos?</h2>
            <p className="mt-3 max-w-xl text-brand-green/85">Somos estudantes unidos pelo desejo de construir um Ciências do Estado feito para quem vive e faz parte dele. Conheça as pessoas que dão vida à Chapa Abaporu e que estão por trás dessa iniciativa!</p>
          </>
        )}
        <div className="mt-10"><TeamCarousel /></div>
      </div>
    </section>
  );
}

export function ProposalsSection() {
  return (
    <section id="propostas" className="relative scroll-mt-20 overflow-hidden bg-brand-red texture-print">
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl text-brand-paper md:text-6xl">Conheça nossas <span className="text-brand-yellow">propostas</span></h2>
            <p className="mt-4 max-w-xl text-brand-paper/90">Nossas propostas buscam construir um CACE mais ativo, participativo e próximo dos estudantes. Conheça as iniciativas que planejamos para fortalecer nosso curso, ampliar a participação estudantil e transformar nossa vivência acadêmica.</p>
          </div>
          <Sun className="size-20" />
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
      </div>
    </section>
  );
}

export function PageHero({ title, text, tone = "red" }: { title: string; text?: string; tone?: "red" | "terracotta" | "green" | "yellow" | "coral" }) {
  const map = {
    red: "bg-brand-red text-brand-paper",
    terracotta: "bg-brand-terracotta text-brand-ink",
    coral: "bg-brand-coral text-brand-ink",
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
