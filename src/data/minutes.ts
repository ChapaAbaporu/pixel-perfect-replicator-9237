import ata1 from "@/assets/ata-1-2026.pdf.asset.json";
import ata2 from "@/assets/ata-2-2026.pdf.asset.json";
import ata3 from "@/assets/ata-3-2026.pdf.asset.json";
import ata4 from "@/assets/ata-4-2026.pdf.asset.json";
import ata5 from "@/assets/ata-5-2026.pdf.asset.json";
import ata6 from "@/assets/ata-6-2026.pdf.asset.json";

/** Atas oficiais na ordem de reunião; PDFs armazenados como assets. */
export type MeetingMinutes = { id: string; title: string; date: string; url?: string };

export const minutes: MeetingMinutes[] = [
  { id: "ata-1", title: "ATA Nº 1", date: "28/09", url: ata1.url },
  { id: "ata-2", title: "ATA Nº 2", date: "07/10", url: ata2.url },
  { id: "ata-3", title: "ATA Nº 3", date: "14/10", url: ata3.url },
  { id: "ata-4", title: "ATA Nº 4", date: "21/10", url: ata4.url },
  { id: "ata-5", title: "ATA Nº 5", date: "28/10", url: ata5.url },
  { id: "ata-6", title: "ATA Nº 6", date: "04/11", url: ata6.url },
];