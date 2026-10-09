import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Espaço reservado identificável para imagens que serão substituídas depois. */
export function Placeholder({
  label,
  className,
  tone = "light",
}: {
  label: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      data-placeholder={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 border-2 border-dashed p-4 text-center",
        tone === "light"
          ? "border-brand-green/40 bg-brand-paper/70 text-brand-green/70"
          : "border-brand-paper/50 bg-brand-paper/10 text-brand-paper/80",
        className,
      )}
    >
      <ImageIcon className="size-8" aria-hidden="true" />
      <span className="eyebrow text-[0.7rem]">{label}</span>
    </div>
  );
}
