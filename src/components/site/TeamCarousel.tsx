import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { team, type TeamMember } from "@/data/team";
import { MemberModal } from "./MemberModal";
import { Placeholder } from "./Placeholder";

const tones = [
  "bg-brand-red text-brand-paper",
  "bg-brand-blue text-brand-paper",
  "bg-brand-green text-brand-paper",
  "bg-brand-yellow text-brand-green",
];

export function TeamCarousel({ members = team }: { members?: TeamMember[] }) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, scroll: 0, moved: false });
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [active, setActive] = useState(0);
  const close = useCallback(() => setSelected(null), []);

  const cardWidth = () => {
    const el = track.current?.firstElementChild as HTMLElement | null;
    return el ? el.offsetWidth + 24 : 300;
  };
  const scrollBy = (dir: number) => track.current?.scrollBy({ left: dir * cardWidth(), behavior: "smooth" });
  const goTo = (i: number) => track.current?.scrollTo({ left: i * cardWidth(), behavior: "smooth" });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setActive(Math.round(el.scrollLeft / cardWidth()));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { down: true, startX: e.clientX, scroll: track.current.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.down || !track.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    track.current.scrollLeft = d.scroll - dx;
  };
  const endDrag = () => { drag.current.down = false; };

  return (
    <div>
      <div className="relative">
        <div
          ref={track}
          role="region"
          aria-label="Carrossel de integrantes"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); scrollBy(1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); scrollBy(-1); }
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6 pt-2 select-none active:cursor-grabbing"
        >
          {members.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => { if (!drag.current.moved) setSelected(m); }}
              aria-label={`Ver perfil de ${m.name}`}
              className={`group w-[78%] shrink-0 snap-start rounded-2xl p-3 text-left card-pop transition-transform hover:-translate-y-1 sm:w-[46%] lg:w-[calc(25%-18px)] ${tones[i % tones.length]}`}
            >
              {m.photo ? (
                <img src={m.photo} alt="" draggable={false} className="aspect-[3/4] w-full rounded-xl object-cover" />
              ) : (
                <Placeholder label={`Foto — ${m.name}`} tone={i % 4 === 3 ? "light" : "dark"} className="aspect-[3/4] w-full rounded-xl" />
              )}
              <div className="flex items-end justify-between gap-2 px-1 pb-1 pt-4">
                <div>
                  <h3 className="text-2xl">{m.name}</h3>
                  <p className="mt-1 text-sm opacity-85">{m.role}</p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-cream text-brand-green transition-transform group-hover:rotate-90" aria-hidden="true">
                  <Plus className="size-5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Posição no carrossel">
          {members.map((m, i) => (
            <button
              key={m.id}
              role="tab"
              aria-selected={active === i}
              aria-label={`Ir para ${m.name}`}
              onClick={() => goTo(i)}
              className={`h-3 rounded-full transition-all ${active === i ? "w-8 bg-brand-red" : "w-3 bg-brand-green/30"}`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button onClick={() => scrollBy(-1)} aria-label="Anterior" className="grid size-12 place-items-center rounded-full bg-brand-green text-brand-paper hover:bg-brand-red">
            <ArrowLeft />
          </button>
          <button onClick={() => scrollBy(1)} aria-label="Próximo" className="grid size-12 place-items-center rounded-full bg-brand-green text-brand-paper hover:bg-brand-red">
            <ArrowRight />
          </button>
        </div>
      </div>
      <MemberModal member={selected} onClose={close} />
    </div>
  );
}
