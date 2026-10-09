import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { TeamMember } from "@/data/team";
import { Placeholder } from "./Placeholder";

export function MemberModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!member) return;
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      prevFocus?.focus();
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-brand-ink/70 p-0 sm:items-center sm:p-6 animate-in fade-in"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-name"
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl border-4 border-brand-red bg-brand-cream texture-paper sm:rounded-2xl card-pop animate-in zoom-in-95"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-brand-red text-brand-paper hover:bg-brand-green"
        >
          <X className="size-5" />
        </button>
        <div className="grid gap-6 p-6 md:grid-cols-[2fr_3fr] md:p-8">
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="aspect-[3/4] w-full rounded-xl object-cover" />
          ) : (
            <Placeholder label={`Foto — ${member.name}`} className="aspect-[3/4] w-full rounded-xl" />
          )}
          <div className="flex flex-col">
            <p className="eyebrow text-brand-red">{member.role}</p>
            <h2 id="member-name" className="mt-2 text-4xl text-brand-green md:text-5xl">{member.name}</h2>
            <div className="my-5 h-1.5 w-20 rounded-full bg-brand-yellow" />
            <p className="leading-relaxed text-brand-green/90">{member.bio}</p>
            {member.links && member.links.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-3">
                {member.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noreferrer" className="btn-red text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
