/**
 * Integrantes da Chapa Abaporu.
 * CONTEÚDO PROVISÓRIO — substitua nome, cargo, bio, foto e links pelos dados oficiais.
 * Para adicionar alguém, basta incluir um novo objeto nesta lista.
 * `photo`: caminho/URL da fotografia (retrato vertical). Deixe vazio para exibir o placeholder.
 */
export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  links?: { label: string; url: string }[];
};

/** Cada campo provisório tem um número próprio para busca e edição manual. */
export const team: TeamMember[] = [
  { id: "integrante-1", name: "Inserir texto 12", role: "Coordenação Geral", bio: "Inserir texto 13", photo: "", links: [] },
  { id: "integrante-2", name: "Inserir texto 14", role: "Secretaria de Comunicação", bio: "Inserir texto 15", photo: "", links: [] },
  { id: "integrante-3", name: "Inserir texto 16", role: "Secretaria de Relações Institucionais", bio: "Inserir texto 17", photo: "", links: [] },
  { id: "integrante-4", name: "Inserir texto 18", role: "Secretaria de Extensão e Pesquisa", bio: "Inserir texto 19", photo: "", links: [] },
  { id: "integrante-5", name: "Inserir texto 20", role: "Tesouraria", bio: "Inserir texto 21", photo: "", links: [] },
  { id: "integrante-6", name: "Inserir texto 22", role: "Secretaria Geral", bio: "Inserir texto 23", photo: "", links: [] },
  { id: "integrante-7", name: "Inserir texto 24", role: "Suplência", bio: "Inserir texto 25", photo: "", links: [] },
  { id: "integrante-8", name: "Inserir texto 26", role: "Suplência", bio: "Inserir texto 27", photo: "", links: [] },
];
