/**
 * Categorias e propostas da Chapa Abaporu.
 * As propostas abaixo são EXEMPLOS PROVISÓRIOS — substitua pelo conteúdo oficial.
 * Para adicionar uma proposta, inclua um novo objeto em `proposals` da categoria.
 */
export type Proposal = {
  title: string;
  summary: string;
  problem: string;
  objective: string;
  actions: string[];
  result: string;
  status?: string;
};

export type CategoryTone = "red" | "blue" | "green" | "yellow";

export type Category = {
  slug: string;
  name: string;
  tone: CategoryTone;
  icon: "megaphone" | "handshake" | "book" | "coins";
  short: string;
  intro: string;
  spaceTitle: string;
  spaceText: string;
  proposals: Proposal[];
};

const sample = (n: number): Proposal => ({
  title: `Inserir texto ${n}`,
  summary: "Inserir texto",
  problem: "Inserir texto",
  objective: "Inserir texto",
  actions: ["Inserir texto", "Inserir texto"],
  result: "Inserir texto",
  status: "Em elaboração",
});

export const categories: Category[] = [
  {
    slug: "comunicacao",
    name: "Comunicação",
    tone: "red",
    icon: "megaphone",
    short: "Inserir texto",
    intro: "Inserir texto",
    spaceTitle: "Inserir texto",
    spaceText: "Inserir texto",
    proposals: [sample(1), sample(2), sample(3)],
  },
  {
    slug: "relacoes-institucionais",
    name: "Relações Institucionais",
    tone: "blue",
    icon: "handshake",
    short: "Inserir texto",
    intro: "Inserir texto",
    spaceTitle: "Inserir texto",
    spaceText: "Inserir texto",
    proposals: [sample(1), sample(2), sample(3)],
  },
  {
    slug: "extensao-e-pesquisa",
    name: "Extensão e Pesquisa",
    tone: "green",
    icon: "book",
    short: "Inserir texto",
    intro: "Inserir texto",
    spaceTitle: "Inserir texto",
    spaceText: "Inserir texto",
    proposals: [sample(1), sample(2), sample(3)],
  },
  {
    slug: "tesouraria",
    name: "Tesouraria",
    tone: "yellow",
    icon: "coins",
    short: "Inserir texto",
    intro: "Inserir texto",
    spaceTitle: "Inserir texto",
    spaceText: "Inserir texto",
    proposals: [sample(1), sample(2), sample(3)],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

/** Classes por cor (todas via tokens da identidade visual). */
export const toneClasses: Record<CategoryTone, { bg: string; text: string; accent: string; soft: string }> = {
  red: { bg: "bg-brand-red", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-red" },
  blue: { bg: "bg-brand-blue", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-blue" },
  green: { bg: "bg-brand-green", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-green" },
  yellow: { bg: "bg-brand-yellow", text: "text-brand-green", accent: "text-brand-red", soft: "text-brand-green" },
};
