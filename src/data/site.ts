/**
 * Canais oficiais e notícias. Preencha `url` com os links oficiais.
 * Canais sem url aparecem como "a definir".
 */
export const contacts: { label: string; handle: string; url: string }[] = [
  { label: "Instagram", handle: "Inserir texto", url: "" },
  { label: "E-mail", handle: "Inserir texto", url: "" },
  { label: "WhatsApp", handle: "Inserir texto", url: "" },
];

/** Link do botão PARTICIPE. Vazio = leva à página de contato. */
export const participateUrl = "";

export type NewsPost = { id: string; title: string; date: string; text: string; image?: string; url?: string };

/** Nenhuma notícia publicada ainda. Adicione objetos aqui para exibi-las. */
export const news: NewsPost[] = [];

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/propostas", label: "Propostas" },
  { to: "/equipe", label: "Nossa Equipe" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;
