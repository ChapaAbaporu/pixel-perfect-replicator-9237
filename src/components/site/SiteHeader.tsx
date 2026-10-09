import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, participateUrl } from "@/data/site";

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2" data-placeholder="Logotipo oficial">
      <span
        className={`grid size-10 place-items-center rounded-full border-2 border-dashed text-[0.55rem] font-bold ${
          light ? "border-brand-paper/70 text-brand-paper" : "border-brand-green/60 text-brand-green"
        }`}
        aria-hidden="true"
      >
        LOGO
      </span>
      <span className={`font-display text-2xl uppercase leading-none ${light ? "text-brand-paper" : "text-brand-green"}`}>
        Abaporu
      </span>
    </span>
  );
}

function Participate({ onClick }: { onClick?: () => void }) {
  const content = (
    <>
      Participe <ArrowRight className="size-4" aria-hidden="true" />
    </>
  );
  return participateUrl ? (
    <a href={participateUrl} target="_blank" rel="noreferrer" className="btn-sun" onClick={onClick}>
      {content}
    </a>
  ) : (
    <Link to="/contato" className="btn-sun" onClick={onClick}>
      {content}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-brand-red texture-print">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" aria-label="Chapa Abaporu — início">
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="font-display text-sm uppercase tracking-wider text-brand-paper/85 transition-colors hover:text-brand-yellow data-[status=active]:text-brand-yellow"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Participate />
        </div>
        <button
          className="rounded-full p-2 text-brand-paper lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Menu móvel" className="border-t border-brand-paper/20 px-4 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-xl uppercase text-brand-paper data-[status=active]:text-brand-yellow"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Participate onClick={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
