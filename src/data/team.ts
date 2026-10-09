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

const roles = [
  "Coordenação Geral",
  "Secretaria de Comunicação",
  "Secretaria de Relações Institucionais",
  "Secretaria de Extensão e Pesquisa",
  "Tesouraria",
  "Secretaria Geral",
  "Suplência",
  "Suplência",
];

export const team: TeamMember[] = roles.map((role, i) => ({
  id: `integrante-${i + 1}`,
  name: `Integrante ${i + 1} (nome provisório)`,
  role: `${role} (cargo provisório)`,
  bio: "Texto provisório. Aqui entrará a apresentação pessoal escrita pelo próprio integrante: trajetória, curso, motivações e o que deseja construir no CACE.",
  photo: "",
  links: [],
}));
