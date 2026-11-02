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

export type CategoryTone = "red" | "terracotta" | "green" | "yellow" | "coral";

export type Category = {
  slug: string;
  name: string;
  tone: CategoryTone;
  icon: "megaphone" | "handshake" | "book" | "coins" | "users";
  short?: string;
  intro: string;
  spaceTitle: string;
  spaceText: string;
  proposals: Proposal[];
};

export const categories: Category[] = [
  {
    slug: "direx",
    name: "DIREX",
    tone: "coral",
    icon: "users",
    intro: "Inserir texto 170",
    spaceTitle: "Inserir texto 171",
    spaceText: "Inserir texto 172",
    proposals: [
      {
        title: "Inserir texto 173",
        summary: "Inserir texto 174",
        problem: "Inserir texto 175",
        objective: "Inserir texto 176",
        actions: ["Inserir texto 177", "Inserir texto 178"],
        result: "Inserir texto 179",
        status: "Em elaboração",
      },
    ],
  },
  {
    slug: "comunicacao",
    name: "Comunicação",
    tone: "red",
    icon: "megaphone",
    intro: "Inserir texto 29",
    spaceTitle: "Inserir texto 30",
    spaceText: "Inserir texto 31",
    proposals: [
      {
        title: "Inserir texto 44",
        summary: "Inserir texto 45",
        problem: "Inserir texto 46",
        objective: "Inserir texto 47",
        actions: ["Inserir texto 48", "Inserir texto 49"],
        result: "Inserir texto 50",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 51",
        summary: "Inserir texto 52",
        problem: "Inserir texto 53",
        objective: "Inserir texto 54",
        actions: ["Inserir texto 55", "Inserir texto 56"],
        result: "Inserir texto 57",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 58",
        summary: "Inserir texto 59",
        problem: "Inserir texto 60",
        objective: "Inserir texto 61",
        actions: ["Inserir texto 62", "Inserir texto 63"],
        result: "Inserir texto 64",
        status: "Em elaboração",
      },
    ],
  },
  {
    slug: "relacoes-institucionais",
    name: "Relações Institucionais",
    tone: "terracotta",
    icon: "handshake",
    intro: "Inserir texto 33",
    spaceTitle: "Inserir texto 34",
    spaceText: "Inserir texto 35",
    proposals: [
      {
        title: "Inserir texto 65",
        summary: "Inserir texto 66",
        problem: "Inserir texto 67",
        objective: "Inserir texto 68",
        actions: ["Inserir texto 69", "Inserir texto 70"],
        result: "Inserir texto 71",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 72",
        summary: "Inserir texto 73",
        problem: "Inserir texto 74",
        objective: "Inserir texto 75",
        actions: ["Inserir texto 76", "Inserir texto 77"],
        result: "Inserir texto 78",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 79",
        summary: "Inserir texto 80",
        problem: "Inserir texto 81",
        objective: "Inserir texto 82",
        actions: ["Inserir texto 83", "Inserir texto 84"],
        result: "Inserir texto 85",
        status: "Em elaboração",
      },
    ],
  },
  {
    slug: "extensao-e-pesquisa",
    name: "Extensão e Pesquisa",
    tone: "green",
    icon: "book",
    intro: "Inserir texto 37",
    spaceTitle: "Inserir texto 38",
    spaceText: "Inserir texto 39",
    proposals: [
      {
        title: "Inserir texto 86",
        summary: "Inserir texto 87",
        problem: "Inserir texto 88",
        objective: "Inserir texto 89",
        actions: ["Inserir texto 90", "Inserir texto 91"],
        result: "Inserir texto 92",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 93",
        summary: "Inserir texto 94",
        problem: "Inserir texto 95",
        objective: "Inserir texto 96",
        actions: ["Inserir texto 97", "Inserir texto 98"],
        result: "Inserir texto 99",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 100",
        summary: "Inserir texto 101",
        problem: "Inserir texto 102",
        objective: "Inserir texto 103",
        actions: ["Inserir texto 104", "Inserir texto 105"],
        result: "Inserir texto 106",
        status: "Em elaboração",
      },
    ],
  },
  {
    slug: "tesouraria",
    name: "Tesouraria",
    tone: "yellow",
    icon: "coins",
    intro: "Inserir texto 41",
    spaceTitle: "Inserir texto 42",
    spaceText: "Inserir texto 43",
    proposals: [
      {
        title: "Inserir texto 107",
        summary: "Inserir texto 108",
        problem: "Inserir texto 109",
        objective: "Inserir texto 110",
        actions: ["Inserir texto 111", "Inserir texto 112"],
        result: "Inserir texto 113",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 114",
        summary: "Inserir texto 115",
        problem: "Inserir texto 116",
        objective: "Inserir texto 117",
        actions: ["Inserir texto 118", "Inserir texto 119"],
        result: "Inserir texto 120",
        status: "Em elaboração",
      },
      {
        title: "Inserir texto 121",
        summary: "Inserir texto 122",
        problem: "Inserir texto 123",
        objective: "Inserir texto 124",
        actions: ["Inserir texto 125", "Inserir texto 126"],
        result: "Inserir texto 127",
        status: "Em elaboração",
      },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

/** Classes por cor (todas via tokens da identidade visual). */
export const toneClasses: Record<CategoryTone, { bg: string; text: string; accent: string; soft: string }> = {
  red: { bg: "bg-brand-red", text: "text-brand-paper", accent: "text-brand-paper", soft: "text-brand-red" },
  terracotta: { bg: "bg-brand-terracotta", text: "text-brand-ink", accent: "text-brand-ink", soft: "text-brand-red" },
  coral: { bg: "bg-brand-coral", text: "text-brand-ink", accent: "text-brand-ink", soft: "text-brand-red" },
  green: { bg: "bg-brand-green", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-green" },
  yellow: { bg: "bg-brand-yellow", text: "text-brand-green", accent: "text-brand-red", soft: "text-brand-green" },
};
