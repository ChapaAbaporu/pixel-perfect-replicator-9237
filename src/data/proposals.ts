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

const sample = (area: string, n: number): Proposal => ({
  title: `Proposta provisória ${n} — ${area}`,
  summary: "Descrição resumida provisória. Substitua pelo texto oficial da proposta.",
  problem: "Problema ou necessidade identificada (a preencher).",
  objective: "Objetivo da proposta (a preencher).",
  actions: ["Ação prevista 1 (a preencher)", "Ação prevista 2 (a preencher)"],
  result: "Resultado esperado (a preencher).",
  status: "Em elaboração",
});

export const categories: Category[] = [
  {
    slug: "comunicacao",
    name: "Comunicação",
    tone: "red",
    icon: "megaphone",
    short: "Comunicação popular, criativa e acessível para todo o curso.",
    intro:
      "A secretaria de Comunicação quer fazer a informação circular, fortalecer a identidade coletiva e aproximar o CACE de cada estudante.",
    spaceTitle: "Materiais e campanhas",
    spaceText: "Espaço reservado para materiais gráficos, campanhas, fotografias e publicações.",
    proposals: [sample("Comunicação", 1), sample("Comunicação", 2), sample("Comunicação", 3)],
  },
  {
    slug: "relacoes-institucionais",
    name: "Relações Institucionais",
    tone: "blue",
    icon: "handshake",
    short: "Diálogo, articulação política e representação estudantil.",
    intro:
      "A secretaria de Relações Institucionais busca construir pontes com estudantes, docentes, técnicos, movimentos sociais e instituições.",
    spaceTitle: "Iniciativas de diálogo",
    spaceText:
      "Espaço reservado para iniciativas com estudantes, docentes, técnicos, movimentos sociais e instituições.",
    proposals: [sample("Relações Institucionais", 1), sample("Relações Institucionais", 2), sample("Relações Institucionais", 3)],
  },
  {
    slug: "extensao-e-pesquisa",
    name: "Extensão e Pesquisa",
    tone: "green",
    icon: "book",
    short: "Conhecimento, cultura e integração entre universidade e sociedade.",
    intro:
      "A secretaria de Extensão e Pesquisa quer aproximar a produção de conhecimento da realidade e da sociedade.",
    spaceTitle: "Projetos e eventos",
    spaceText:
      "Espaço reservado para projetos acadêmicos, eventos, atividades culturais, extensão e divulgação científica.",
    proposals: [sample("Extensão e Pesquisa", 1), sample("Extensão e Pesquisa", 2), sample("Extensão e Pesquisa", 3)],
  },
  {
    slug: "tesouraria",
    name: "Tesouraria",
    tone: "yellow",
    icon: "coins",
    short: "Transparência, responsabilidade e prestação de contas.",
    intro:
      "A Tesouraria assume o compromisso com a organização financeira e a transparência total dos recursos do CACE.",
    spaceTitle: "Transparência financeira",
    spaceText:
      "Espaço reservado para planejamento orçamentário, divulgação de receitas e despesas e prestação de contas.",
    proposals: [sample("Tesouraria", 1), sample("Tesouraria", 2), sample("Tesouraria", 3)],
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
