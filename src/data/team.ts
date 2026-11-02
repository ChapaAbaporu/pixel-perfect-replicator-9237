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
  { id: "integrante-1", name: "Júlio César", role: "Presidente", bio: "Inserir texto 13", photo: "", links: [] },
  { id: "integrante-2", name: "Júlia Francinni", role: "Vice-Presidente", bio: "Inserir texto 15", photo: "", links: [] },
  { id: "integrante-3", name: "Beatriz Madureira", role: "Primeira Tesoureira", bio: "Inserir texto 17", photo: "", links: [] },
  { id: "integrante-4", name: "Vitor Rosa", role: "Segundo Tesoureiro", bio: "Inserir texto 19", photo: "", links: [] },
  { id: "integrante-5", name: "Luísa Gonçalves", role: "Primeira Secretária", bio: "Inserir texto 21", photo: "", links: [] },
  { id: "integrante-6", name: "Ana Carolina Delgado", role: "Segunda Secretária", bio: "Inserir texto 23", photo: "", links: [] },
  { id: "integrante-7", name: "Rafael Borges", role: "Diretor de Comunicação", bio: "Inserir texto 25", photo: "", links: [] },
  { id: "integrante-8", name: "Jéssica Gonçalves", role: "Diretora adjunta de Comunicação", bio: "Inserir texto 27", photo: "", links: [] },
  { id: "integrante-9", name: "Ana Clara Carvalho", role: "Diretora de Pesquisa e Extensão", bio: "Inserir texto 164", photo: "", links: [] },
  { id: "integrante-10", name: "Anne Alcantra", role: "Diretora adjunta de Pesquisa e Extensão", bio: "Inserir texto 165", photo: "", links: [] },
  { id: "integrante-11", name: "Zoe Ribas", role: "Diretora de Relações Institucionais", bio: "Inserir texto 166", photo: "", links: [] },
  { id: "integrante-12", name: "Júlia Mendes", role: "Diretora adjunta de Relações Institucionais", bio: "Inserir texto 167", photo: "", links: [] },
  { id: "integrante-13", name: "Sara Gonçalves", role: "Inserir texto 168", bio: "Inserir texto 169", photo: "", links: [] },
];
