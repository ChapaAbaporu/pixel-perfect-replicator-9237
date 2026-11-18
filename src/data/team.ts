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
import zoePhoto from "@/assets/zoe-ribas.jpeg.asset.json";
import anaClaraPhoto from "@/assets/ana-clara-carvalho.jpeg.asset.json";
import jessicaPhoto from "@/assets/jessica-goncalves.png.asset.json";
import annePhoto from "@/assets/anne-alcantra.jpeg.asset.json";
import alicePhoto from "@/assets/alice-teles.png.asset.json";
import luccaPhoto from "@/assets/lucca-castro.jpeg.asset.json";
import geovanaPhoto from "@/assets/geovana-silva.jpeg.asset.json";

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
  { id: "integrante-1", name: "Júlio César", role: "Presidente", bio: "Júlio César Moraes Soares é poços-caldense, do sul de Minas, e candidato a Presidente do Centro Acadêmico de Ciências do Estado (CACE/UFMG). Graduando em Ciências do Estado pela Universidade Federal de Minas Gerais (UFMG), integra o corpo editorial da Revice, a Revista de Ciências do Estado e do Jornal Nova Roma. É representante discente no Colegiado de Extensão da Faculdade de Direito (Cenex) e membro do Departamento de Ensino, Pesquisa e Extensão do CACE.", photo: julioPhoto.url, links: [] },
  { id: "integrante-2", name: "Júlia Francinni", role: "Vice-Presidente", bio: "Júlia Francinni é graduanda em Ciências do Estado na UFMG e candidata a vice presidente na chapa Abaporu. Integra o corpo editorial da Revista de Ciências do Estado (REVICE) e a diretoria acadêmica do EM Público, e é estagiária na Assessoria de Projetos Especiais da Prefeitura de Belo Horizonte.", photo: juliaFrancinniPhoto.url, links: [] },
  { id: "integrante-5", name: "Luísa Gonçalves", role: "Primeira Secretária", bio: "", photo: luisaPhoto.url, links: [] },
  { id: "integrante-6", name: "Ana Carolina Delgado", role: "Segunda Secretária", bio: "", photo: anaCarolinaPhoto.url, links: [] },
  { id: "integrante-3", name: "Beatriz Madureira", role: "Primeira Tesoureira", bio: "", photo: beatrizPhoto.url, links: [] },
  { id: "integrante-4", name: "Vitor Mota", role: "Segundo Tesoureiro", bio: "Vitor Mota é sul-mineiro, graduando em Ciências do Estado pela Universidade Federal de Minas Gerais (UFMG) e candidato a Segundo Tesoureiro do Centro Acadêmico de Ciências do Estado (CACE). Estagiário na Secretaria de Estado de Planejamento e Gestão de Minas Gerais (SEPLAG-MG) e voluntário no Instituto Akati Brasil. Técnico em Informática pelo Instituto Federal do Sul de Minas Gerais (IFSULDEMINAS). Possui formação complementar em Processo Legislativo pelo Projeto Politeia e, anteriormente, foi bolsista de Arte e Cultura pelo Projeto Cultiva.", photo: vitorPhoto.url, links: [] },
  { id: "integrante-9", name: "Ana Clara Carvalho", role: "Diretora de Ensino, Pesquisa e Extensão", bio: "Ana Clara Carvalho é Graduanda em Ciências do Estado pela Universidade Federal de Minas Gerais. Membro do Corpo Editorial da Revista de Ciências do Estado (Revice|UFMG). Pesquisadora extensionista do Laboratório de Tecnologias Públicas para o Setor Público (LabP2|UFMG). Monitora voluntária pelo Programa de Monitoria da Graduação da Faculdade de Direito da Universidade Federal de Minas Gerais na disciplina de Pensamento Jurídico Político Brasileiro no curso de Ciências do Estado. Monitora voluntária e membro do Grupo de Estudos: Fundamentos e Fundações do Direito Político.", photo: anaClaraPhoto.url, links: [] },
  { id: "integrante-10", name: "Anne Alcantra", role: "Diretora adjunta de Ensino, Pesquisa e Extensão", bio: "Graduanda em Ciências do Estado pela Universidade Federal de Minas Gerais (UFMG). Membro do Corpo Editorial da Revista de Ciências do Estado (Revice/UFMG) e extensionista do Laboratório de Tecnologias Públicas para o Setor Público (LABP²/UFMG). Monitora da disciplina Organização dos Poderes do Estado Brasileiro, vinculada ao Programa de Monitoria de Graduação do Departamento de Direito Público da Faculdade de Direito da UFMG e pesquisadora do projeto de pesquisa “Constitucionalismo Estrutural e Narrativa de Poder”.", photo: annePhoto.url, links: [] },
  { id: "integrante-11", name: "Zoe Ribas", role: "Diretora de Relações Institucionais e Sociais", bio: "", photo: zoePhoto.url, links: [] },
  { id: "integrante-12", name: "Júlia Mendes", role: "Diretora adjunta de Relações Institucionais e Sociais", bio: "", photo: juliaMendesPhoto.url, links: [] },
  { id: "integrante-7", name: "Rafael Borges", role: "Diretor de Comunicação", bio: "", photo: rafaelPhoto.url, links: [] },
  { id: "geovana-silva", name: "Geovana Silva", role: "Diretora adjunta de Comunicação", bio: "Geovana Silva é graduanda em Ciências do Estado na UFMG e candidata a diretora adjunta do Departamento de Comunicação na chapa Abaporu. Integra o Departamento de Cultura na gestão atual do CACE, faz parte do corpo editorial da Revista de Ciências do Estado (REVICE) e é estagiária na Secretaria de Estado de Cultura e Turismo de Minas Gerais.", photo: geovanaPhoto.url, links: [] },
  { id: "integrante-8", name: "Jéssica Gonçalves", role: "Diretora de Cultura", bio: "", photo: jessicaPhoto.url, links: [] },
  { id: "miguel-angelo", name: "Miguel Angelo", role: "Diretor Adjunto de Cultura", bio: "Miguel Angelo Celestino da Silva é belo-horizontino, candidato a Coordenador Adjunto do Departamento de Cultura. Graduado em Gestão Pública pela Universidade do Estado de Minas Gerais (UEMG), e graduando em Ciências do Estado pela Universidade Federal de Minas Gerais (UFMG). Foi Diretor Adjunto de Comunicação do Centro Acadêmico de Ciências do Estado (CACE/UFMG) e integrou a comissão organizadora do III Congresso Nacional de Ciências do Estado. Atleta de Handebol pela Fafich desde maio de 2025, também concilia uma carreira musical enquanto baterista, conciliando a arte e o esporte à vida acadêmica.", photo: miguelPhoto.url, links: [] },
];

/** Integrantes exclusivos dos departamentos; não entram no carrossel inicial. */
export const departmentOnlyMembers: TeamMember[] = [
  { id: "alice-teles", name: "Alice Teles", role: "Membro DCOM", bio: "", photo: alicePhoto.url, links: [] },
  { id: "lucca-castro", name: "Lucca Cornelissen Castro", role: "Membro DEPE", bio: "Lucca Cornelissen Castro, BH-MG. Graduando no curso de Ciências do Estado, 17ª turma. Diretor-Adjunto do Departamento de Ensino, Pesquisa e Extensão, desde 2025. Membro executivo da comissão organizacional do IV Congresso Nacional de Ciências do Estado. Estagiário do Departamento de Estradas e Rodagens de Minas Gerais.", photo: luccaPhoto.url, links: [] },
  { id: "guilherme-riedel", name: "Guilherme Riedel", role: "Membro DRIS", bio: "", photo: "", links: [] },
];

/** Referências explícitas mantêm os perfis oficiais compartilhados. */
const departmentMemberIds: Record<string, string[]> = {
  presidencia: ["integrante-1", "integrante-2"],
  secretaria: ["integrante-5", "integrante-6"],
  tesouraria: ["integrante-3", "integrante-4"],
  comunicacao: ["integrante-7", "geovana-silva", "alice-teles"],
  "extensao-e-pesquisa": ["integrante-9", "integrante-10", "lucca-castro"],
  "relacoes-institucionais": ["integrante-11", "integrante-12", "guilherme-riedel"],
  cultura: ["integrante-8", "miguel-angelo"],
};

export function getDepartmentMembers(slug: string): TeamMember[] {
  const allMembers = [...team, ...departmentOnlyMembers];
  return (departmentMemberIds[slug] ?? []).flatMap((id) => {
    const member = allMembers.find((candidate) => candidate.id === id);
    return member ? [member] : [];
  });
}
