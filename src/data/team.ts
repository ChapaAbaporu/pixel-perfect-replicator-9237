/**
 * Integrantes da Chapa Abaporu.
 * CONTEÚDO PROVISÓRIO — substitua nome, cargo, bio, foto e links pelos dados oficiais.
 * Para adicionar alguém, basta incluir um novo objeto nesta lista.
 * `photo`: caminho/URL da fotografia (retrato vertical). Deixe vazio para exibir o placeholder.
 */
import julioPhoto from "@/assets/julio-cesar-foto.jpeg.asset.json";
import juliaFrancinniPhoto from "@/assets/julia-francinni.jpeg.asset.json";
import beatrizPhoto from "@/assets/beatriz-madureira.jpeg.asset.json";
import luisaPhoto from "@/assets/luisa-goncalves.jpeg.asset.json";
import anaCarolinaPhoto from "@/assets/ana-carolina-delgado.jpeg.asset.json";
import rafaelPhoto from "@/assets/rafael-borges.jpeg.asset.json";
import juliaMendesPhoto from "@/assets/julia-mendes.jpeg.asset.json";
import vitorPhoto from "@/assets/vitor-mota.jpeg.asset.json";
import miguelPhoto from "@/assets/miguel-angelo.jpeg.asset.json";
import saraPhoto from "@/assets/sara-goncalves.jpeg.asset.json";

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
  { id: "integrante-1", name: "Júlio César", role: "Presidente", bio: "Caio Júlio César foi um patrício, líder militar e político romano. Desempenhou um papel crítico na transformação da República Romana no Império Romano.", photo: julioPhoto.url, links: [] },
  { id: "integrante-2", name: "Júlia Francinni", role: "Vice-Presidente", bio: "Inserir texto 15", photo: juliaFrancinniPhoto.url, links: [] },
  { id: "integrante-5", name: "Luísa Gonçalves", role: "Primeira Secretária", bio: "Inserir texto 21", photo: luisaPhoto.url, links: [] },
  { id: "integrante-6", name: "Ana Carolina Delgado", role: "Segunda Secretária", bio: "Inserir texto 23", photo: anaCarolinaPhoto.url, links: [] },
  { id: "integrante-3", name: "Beatriz Madureira", role: "Primeira Tesoureira", bio: "Inserir texto 17", photo: beatrizPhoto.url, links: [] },
  { id: "integrante-4", name: "Vitor Mota", role: "Segundo Tesoureiro", bio: "Vitor Mota é sul-mineiro, graduando em Ciências do Estado pela Universidade Federal de Minas Gerais (UFMG) e candidato a Segundo Tesoureiro do Centro Acadêmico de Ciências do Estado (CACE). Estagiário na Secretaria de Estado de Planejamento e Gestão de Minas Gerais (SEPLAG-MG) e voluntário no Instituto Akati Brasil. Técnico em Informática pelo Instituto Federal do Sul de Minas Gerais (IFSULDEMINAS). Possui formação complementar em Processo Legislativo pelo Projeto Politeia e, anteriormente, foi bolsista de Arte e Cultura pelo Projeto Cultiva.", photo: vitorPhoto.url, links: [] },
  { id: "integrante-9", name: "Ana Clara Carvalho", role: "Diretora de Pesquisa e Extensão", bio: "Ana Clara Carvalho é Graduanda em Ciências do Estado pela Universidade Federal de Minas Gerais. Membro do Corpo Editorial da Revista de Ciências do Estado (Revice|UFMG). Pesquisadora extensionista do Laboratório de Tecnologias Públicas para o Setor Público (LabP2|UFMG). Monitora voluntária pelo Programa de Monitoria da Graduação da Faculdade de Direito da Universidade Federal de Minas Gerais na disciplina de Pensamento Jurídico Político Brasileiro no curso de Ciências do Estado. Monitora voluntária e membro do Grupo de Estudos: Fundamentos e Fundações do Direito Político.", photo: "", links: [] },
  { id: "integrante-10", name: "Anne Alcantra", role: "Diretora adjunta de Pesquisa e Extensão", bio: "Inserir texto 165", photo: "", links: [] },
  { id: "integrante-11", name: "Zoe Ribas", role: "Diretora de Relações Institucionais", bio: "Inserir texto 166", photo: "", links: [] },
  { id: "integrante-12", name: "Júlia Mendes", role: "Diretora adjunta de Relações Institucionais", bio: "Inserir texto 167", photo: juliaMendesPhoto.url, links: [] },
  { id: "integrante-7", name: "Rafael Borges", role: "Diretor de Comunicação", bio: "Inserir texto 25", photo: rafaelPhoto.url, links: [] },
  { id: "integrante-8", name: "Jéssica Gonçalves", role: "Diretora adjunta de Comunicação", bio: "Inserir texto 27", photo: "", links: [] },
  { id: "integrante-13", name: "Sara Gonçalves", role: "Diretora de Cultura", bio: "Inserir texto 169", photo: saraPhoto.url, links: [] },
  { id: "miguel-angelo", name: "Miguel Angelo", role: "Diretor Adjunto de Cultura", bio: "Miguel Angelo Celestino da Silva é belo-horizontino, candidato a Coordenador Adjunto do Departamento de Cultura. Graduado em Gestão Pública pela Universidade do Estado de Minas Gerais (UEMG), e graduando em Ciências do Estado pela Universidade Federal de Minas Gerais (UFMG). Foi Diretor Adjunto de Comunicação do Centro Acadêmico de Ciências do Estado (CACE/UFMG) e integrou a comissão organizadora do III Congresso Nacional de Ciências do Estado. Atleta de Handebol pela Fafich desde maio de 2025, também concilia uma carreira musical enquanto baterista, conciliando a arte e o esporte à vida acadêmica.", photo: miguelPhoto.url, links: [] },
];

/** Integrantes exclusivos dos departamentos; não entram no carrossel inicial. */
export const departmentOnlyMembers: TeamMember[] = [
  { id: "alice-teles", name: "Alice Teles", role: "Membro DCOM", bio: "Inserir texto 180", photo: "", links: [] },
  { id: "lucca-castro", name: "Lucca Cornelissen Castro", role: "Membro DEPE", bio: "Lucca Cornelissen Castro, BH-MG. Graduando no curso de Ciências do Estado, 17ª turma. Diretor-Adjunto do Departamento de Ensino, Pesquisa e Extensão, desde 2025. Membro executivo da comissão organizacional do IV Congresso Nacional de Ciências do Estado. Estagiário do Departamento de Estradas e Rodagens de Minas Gerais.", photo: "", links: [] },
  { id: "guilherme-riedel", name: "Guilherme Riedel", role: "Membro DRIS", bio: "Inserir texto 182", photo: "", links: [] },
];

/** Referências explícitas mantêm os perfis oficiais compartilhados. */
const departmentMemberIds: Record<string, string[]> = {
  direx: ["integrante-1", "integrante-2", "integrante-5", "integrante-6", "integrante-3", "integrante-4"],
  comunicacao: ["integrante-7", "integrante-8", "alice-teles"],
  "extensao-e-pesquisa": ["integrante-9", "integrante-10", "lucca-castro"],
  "relacoes-institucionais": ["integrante-11", "integrante-12", "guilherme-riedel"],
  cultura: ["integrante-13", "miguel-angelo"],
};

export function getDepartmentMembers(slug: string): TeamMember[] {
  const allMembers = [...team, ...departmentOnlyMembers];
  return (departmentMemberIds[slug] ?? []).flatMap((id) => {
    const member = allMembers.find((candidate) => candidate.id === id);
    return member ? [member] : [];
  });
}
