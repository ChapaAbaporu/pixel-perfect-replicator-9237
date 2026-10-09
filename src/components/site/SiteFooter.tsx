import { Link } from "@tanstack/react-router";
import { categories } from "@/data/proposals";
import { contacts, navLinks } from "@/data/site";
import { Logo } from "./SiteHeader";
import { Sun, Cactus } from "./Decor";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-green text-brand-paper texture-print">
      <Sun className="pointer-events-none absolute -right-10 -top-10 size-48 opacity-90" />
      <Cactus className="pointer-events-none absolute bottom-0 left-4 h-40 opacity-30 [&_g]:fill-brand-paper" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="max-w-2xl text-5xl text-brand-yellow md:text-6xl">Vamos construir juntos essa universidade?</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-brand-paper/80">Chapa Abaporu — cultura, povo e democracia para o CACE.</p>
          </div>
          <div>
            <h3 className="eyebrow mb-3 text-brand-yellow">Navegação</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-brand-yellow">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-3 text-brand-yellow">Propostas</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to="/propostas/$slug" params={{ slug: c.slug }} className="hover:text-brand-yellow">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-3 text-brand-yellow">Contato</h3>
            <ul className="space-y-2 text-sm">
              {contacts.map((c) => (
                <li key={c.label}>
                  {c.label}:{" "}
                  {c.url ? <a href={c.url} className="underline hover:text-brand-yellow">{c.handle}</a> : <span className="text-brand-paper/60">{c.handle}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-brand-paper/20 pt-6 text-xs text-brand-paper/60">© {new Date().getFullYear()} Chapa Abaporu · CACE</p>
      </div>
    </footer>
  );
}
