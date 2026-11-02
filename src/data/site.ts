/**
 * Canais oficiais e notícias. Preencha `url` com os links oficiais.
 * Canais sem url aparecem como "a definir".
 */
export const contacts: { label: string; handle: string; url: string }[] = [
  { label: "Instagram", handle: "@chapaabaporu", url: "https://www.instagram.com/chapaabaporu/" },
  { label: "E-mail", handle: "abaporu.cace@gmail.com", url: "mailto:abaporu.cace@gmail.com" },
  { label: "WhatsApp", handle: "XXXXX-XXXX", url: "" },
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
  { to: "/noticias", label: "Atas" },
  { to: "/contato", label: "Contato" },
] as const;
