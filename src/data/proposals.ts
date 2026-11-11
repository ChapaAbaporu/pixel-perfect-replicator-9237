/**
 * Categorias e propostas da Chapa Abaporu.
 * Propostas oficiais dos departamentos conforme atualização da Ata nº 06/2026; DIREX segue provisória.
 * Para adicionar uma proposta, inclua um novo objeto em `proposals` da categoria.
 */
export type Proposal = {
  title: string;
  summary: string;
  problem?: string;
  objective?: string;
  actions?: string[];
  result?: string;
  status?: string;
};

export type CategoryTone = "red" | "terracotta" | "green" | "yellow" | "coral" | "blue";

export type Category = {
  slug: string;
  name: string;
  tone: CategoryTone;
  icon: "megaphone" | "handshake" | "book" | "coins" | "users" | "palette";
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
    intro: "Responsável pela coordenação geral e representação institucional do CACE, articulação entre os departamentos e organização administrativa da gestão, incluindo o registro de atas, documentos, reuniões e o acompanhamento das decisões, garantindo o bom funcionamento do Centro Acadêmico. Responsável pela administração financeira do CACE, organizando receitas, despesas, arrecadações e prestação de contas, garantindo transparência e recursos para a realização das atividades e projetos.",
    spaceTitle: "Nosso Objetivo",
    spaceText: "Inserir texto 172" + "\n\n" + "Inserir texto 43",
    proposals: [
      {
        title: "Proposta 1",
        summary: "Inserir texto 174",
        problem: "Inserir texto 175",
        objective: "Inserir texto 176",
        actions: ["Inserir texto 177", "Inserir texto 178"],
        result: "Inserir texto 179",
        status: "Em elaboração",
      },
      { title: "Clube CACE", summary: "Criação de um clube de associados, com carteirinha ou mensalidade, oferecendo benefícios aos participantes e estabelecendo uma nova fonte de arrecadação para o Centro Acadêmico." },
      { title: "Fortalecimento do Butecace", summary: "Fortalecer o Butecace como espaço de convivência, integração estudantil e geração de recursos para o CACE." },
      { title: "Diversificação dos Produtos do CACE", summary: "Ampliar a variedade de produtos comerciais oferecidos pelo Centro Acadêmico, explorando novas possibilidades de arrecadação." },
      { title: "Sebos e Bazares Permanentes", summary: "Realizar sebos e bazares mais de uma vez por semestre, criando oportunidades recorrentes de arrecadação e circulação de materiais entre estudantes." },
      { title: "Transparência e Organização Financeira", summary: "Implementar uma planilha de compras e vendas, além de aprimorar o acompanhamento das receitas e despesas das festas e demais atividades do CACE." },
    ],
  },
  {
    slug: "extensao-e-pesquisa",
    name: "Pesquisa e Extensão (DEPE)",
    tone: "green",
    icon: "book",
    intro: "Responsável por incentivar a formação acadêmica complementar, aproximar estudantes e professores e promover atividades de ensino, pesquisa e extensão, como palestras, minicursos, oficinas e jornadas acadêmicas.",
    spaceTitle: "Nosso Objetivo",
    spaceText: "Inserir texto 39",
    proposals: [
      { title: "Formação Acadêmica Complementar", summary: "Promover minicursos, oficinas e workshops sobre métodos de estudo, escrita científica, normas ABNT, oratória, Currículo Lattes e LinkedIn." },
      { title: "Ciclo de Debates e Encontros Acadêmicos", summary: "Ampliar os espaços de debate por meio de palestras, mesas-redondas e encontros com professores e pesquisadores." },
      { title: "Jornada de Pesquisa e Extensão em Ciências do Estado", summary: "Instituir uma jornada acadêmica para apresentação e discussão de trabalhos de pesquisa e extensão, incentivando a produção científica e a troca de conhecimentos entre estudantes." },
      { title: "Diálogo com o Corpo Docente", summary: "Fortalecer a interlocução com os professores, incluindo discussões sobre disciplinas optativas, pesquisas e projetos de extensão." },
      { title: "Integração das Entidades Acadêmicas", summary: "Articular entidades acadêmicas do curso, como Revice e Supernova, para desenvolver ações e atividades conjuntas." },
      { title: "Informação e Oportunidades Acadêmicas", summary: "Ampliar o acesso a informações sobre a trajetória universitária, projetos de pesquisa e extensão e oportunidades de estágio." },
      { title: "Acompanhamento da Reforma Curricular", summary: "Acompanhar e divulgar o processo de reforma curricular, apresentando suas mudanças e implicações aos futuros calouros." },
      { title: "Participação Estudantil nas Ementas", summary: "Promover o diálogo com a comunidade acadêmica sobre as ementas das disciplinas, reunindo sugestões e encaminhando propostas ao comitê de professores." },
    ],
  },
  {
    slug: "relacoes-institucionais",
    name: "Relações Institucionais (DRIS)",
    tone: "terracotta",
    icon: "handshake",
    intro: "Responsável por fortalecer o diálogo e as parcerias do CACE com outras entidades, instituições e comunidades, aproximando o curso de diferentes espaços acadêmicos, sociais e culturais.",
    spaceTitle: "Nosso Objetivo",
    spaceText: "Inserir texto 35",
    proposals: [
      { title: "Ciências do Estado para Além da UFMG", summary: "Produzir conteúdos e desenvolver iniciativas voltadas à comunidade externa à Universidade, incluindo Clube do Livro voluntário, eventos, projetos interdisciplinares, mapa de oportunidades e PodCACE." },
      { title: "Fortalecimento do Voluntariado", summary: "Criar e fortalecer projetos de voluntariado, aproximando os estudantes de iniciativas de impacto social." },
      { title: "Mapeamento de Iniciativas Sociais", summary: "Identificar projetos sociais que necessitem de voluntários e que possuam relação com a formação oferecida em Ciências do Estado." },
      { title: "Banco de Oportunidades de Voluntariado", summary: "Criar um banco de oportunidades de voluntariado, com divulgação em parceria com o setor de Comunicação." },
      { title: "Parcerias Institucionais", summary: "Estabelecer parcerias com instituições para a realização de ações periódicas e iniciativas conjuntas." },
      { title: "Aproximação com a Sociedade Civil", summary: "Fortalecer as relações com a sociedade civil por meio de um mapa de organizações parceiras, encontros, rodas de conversa, oficinas e visitas institucionais." },
      { title: "Extensão Universitária e Transformação Social", summary: "Estimular projetos de extensão voltados às demandas sociais, aproximando a formação acadêmica das necessidades da comunidade, tendo iniciativas como o CE Prepara como referência." },
    ],
  },
  {
    slug: "comunicacao",
    name: "Comunicação (DCOM)",
    tone: "red",
    icon: "megaphone",
    intro: "Responsável pela comunicação interna e externa do CACE, divulgação de informações, eventos e oportunidades, além da promoção e valorização do curso de Ciências do Estado nas redes sociais e em outros meios de comunicação.",
    spaceTitle: "Nosso Objetivo",
    spaceText: "Inserir texto 31",
    proposals: [
      { title: "Divulgação de Ciências do Estado", summary: "Promover o curso nas redes sociais por meio de vídeos e publicações sobre a grade curricular, áreas de atuação, eventos e aplicações práticas da formação." },
      { title: "Comunicação Multiplataforma", summary: "Adotar uma comunicação descentralizada, com conteúdos adaptados às características de Instagram, TikTok, YouTube e X." },
      { title: "WhatsApp Oficial do CACE", summary: "Criar um canal de WhatsApp para centralizar informes e comunicados, além de preservar informações importantes para as próximas gestões." },
      { title: "Pesquisa Acadêmica para a Sociedade", summary: "Produzir conteúdos elaborados pelos próprios estudantes que traduzam e aproximem a pesquisa desenvolvida no curso da sociedade." },
      { title: "Divulgação de Projetos Acadêmicos", summary: "Ampliar a divulgação dos projetos de pesquisa e extensão desenvolvidos em Ciências do Estado, dando visibilidade às iniciativas e à produção acadêmica dos estudantes." },
      { title: "#VempraCE o Ano Inteiro", summary: "Manter a campanha #VempraCE durante todo o ano, ultrapassando os períodos de ENEM e SISU e promovendo continuamente o curso." },
      { title: "Site e Linktree Atualizados", summary: "Atualizar periodicamente o site e o Linktree do CACE, reunindo manuais, oportunidades, eventos e informações úteis aos estudantes." },
      { title: "Agenda Institucional", summary: "Criar um setor de agendas institucionais, responsável pelo levantamento mensal de eventos relevantes e pela participação de estudantes voluntários." },
      { title: "Rede de Egressos", summary: "Mapear os egressos de Ciências do Estado, acompanhar suas trajetórias profissionais e manter canais permanentes de contato." },
      { title: "Acervo Acadêmico Digital", summary: "Criar um acervo digital com os textos das ementas das disciplinas e sugestões bibliográficas, facilitando o acesso dos estudantes aos materiais de referência." },
    ],
  },
  {
    slug: "cultura",
    name: "Cultura (DC)",
    tone: "blue",
    icon: "palette",
    intro: "Inserir texto 183",
    spaceTitle: "Nosso Objetivo",
    spaceText: "Inserir texto 184",
    proposals: [
      { title: "Calendário Cultural Semestral", summary: "Construir, no início de cada semestre, um calendário com as atividades culturais previstas, seus responsáveis e respectivos prazos." },
      { title: "Cultura, Arte e Integração", summary: "Organizar uma programação equilibrada entre arte, debate, lazer e integração, construída com a participação dos estudantes." },
      { title: "Acolhimento e Integração entre Períodos", summary: "Estruturar a recepção dos calouros e promover momentos regulares de convivência entre estudantes de diferentes períodos." },
      { title: "Cultura e Formação Social", summary: "Promover atividades que conectem a formação em Ciências do Estado à realidade social e política, por meio de espaços abertos, plurais e dialógicos." },
      { title: "Espaço para Produção Artística", summary: "Criar oportunidades para que os estudantes apresentem, divulguem e compartilhem suas produções artísticas e culturais." },
      { title: "Cultura Acessível e Inclusiva", summary: "Garantir uma programação cultural inclusiva, acessível e representativa da diversidade dos estudantes do curso." },
      { title: "Festas e Eventos Seguros", summary: "Realizar festas e eventos de integração com planejamento, organização e segurança, evitando riscos financeiros desnecessários ao CACE." },
      { title: "Arrecadação Cultural Planejada", summary: "Diversificar as formas de arrecadação relacionadas às atividades culturais, em articulação com a Tesouraria e respeitando o planejamento financeiro." },
      { title: "Integração Cultural com Outros Cursos", summary: "Ampliar a presença cultural de Ciências do Estado por meio de atividades conjuntas com outros cursos, coletivos e espaços culturais." },
      { title: "Memória e Identidade do Curso", summary: "Registrar e valorizar a história, os símbolos e as tradições de Ciências do Estado, fortalecendo o sentimento de pertencimento dos estudantes." },
      { title: "Cultura em Diálogo com a Comunicação", summary: "Trabalhar de forma integrada com o setor de Comunicação para ampliar a divulgação das atividades culturais e garantir que elas alcancem todos os estudantes." },
      { title: "Organização e Participação no Departamento", summary: "Estruturar o funcionamento do Departamento de Cultura, ampliando a participação de voluntários e reunindo informações úteis para a produção de eventos." },
      { title: "Avaliação e Continuidade das Atividades", summary: "Registrar e avaliar as atividades realizadas, promovendo transparência, melhoria contínua e continuidade entre as gestões." },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

/** Classes por cor (todas via tokens da identidade visual). */
export const toneClasses: Record<CategoryTone, { bg: string; text: string; accent: string; soft: string }> = {
  blue: { bg: "bg-brand-blue", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-blue" },
  red: { bg: "bg-brand-red", text: "text-brand-paper", accent: "text-brand-paper", soft: "text-brand-red" },
  terracotta: { bg: "bg-brand-green", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-green" },
  coral: { bg: "bg-brand-blue", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-blue" },
  green: { bg: "bg-brand-green", text: "text-brand-paper", accent: "text-brand-yellow", soft: "text-brand-green" },
  yellow: { bg: "bg-brand-yellow", text: "text-brand-green", accent: "text-brand-red", soft: "text-brand-green" },
};
