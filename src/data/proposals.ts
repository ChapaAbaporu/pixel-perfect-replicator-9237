/**
 * Categorias e propostas da Chapa Abaporu.
 * Propostas oficiais conforme a atualização integral enviada pela chapa.
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
  proposals: Proposal[];
};

export const categories: Category[] = [
  {
    slug: "direx",
    name: "DIREX",
    tone: "coral",
    icon: "users",
    intro: "Responsável pela coordenação geral e representação institucional do CACE, articulação entre os departamentos e organização administrativa da gestão, incluindo o registro de atas, documentos, reuniões e o acompanhamento das decisões, garantindo o bom funcionamento do Centro Acadêmico. Responsável pela administração financeira do CACE, organizando receitas, despesas, arrecadações e prestação de contas, garantindo transparência e recursos para a realização das atividades e projetos.",
    proposals: [
      { title: "União Institucional", summary: "Promover a união e a articulação entre as instituições discentes de Ciências do Estado — como Revice, Supernova e Jornal Nova Roma —, com a finalidade de fortalecer o curso como um todo." },
      { title: "Inserção no Mercado", summary: "Lutar para consolidar e ampliar a inserção no mercado de trabalho para Ciências do Estado, articulando junto a docentes, discentes, egressos e agentes públicos a busca por novas e melhores oportunidades de estágio e emprego." },
      { title: "Representação Estudantil", summary: "Representar de forma ativa os interesses do curso e do alunado em todas as instâncias da universidade: colegiados, conselhos, departamentos e congregação." },
      { title: "Acompanhamento da Reforma Curricular", summary: "Promover a participação, a divulgação e o acompanhamento discente contínuo do processo de reforma de currículo, observando e debatendo criteriosamente as mudanças nas ementas." },
      { title: "Diálogo com a Faculdade", summary: "Aproximar e qualificar o diálogo com docentes e com a diretoria da Faculdade de Direito e Ciências do Estado, visando garantir maior representação, respeito e visibilidade institucional para Ciências do Estado." },
      { title: "Gestão Integrada do CACE", summary: "Garantir a participação e o acompanhamento da presidência na construção e execução dos projetos de todos os departamentos executivos do Centro Acadêmico." },
      { title: "Infraestrutura e Ocupação do Espaço", summary: "Liderar as ações de manutenção, melhoria e limpeza regular do espaço físico do CACE, além de fomentar eventos de integração que promovam a ocupação e a vivência dos estudantes nos espaços do curso e da Faculdade." },
      { title: "Políticas de Permanência e Inclusão", summary: "Defender políticas de permanência estudantil e garantir o acompanhamento e auxílio geral a estudantes com deficiência (PCDs), pessoas trans, alunos mais velhos, estudantes intercampi, estudantes de intercâmbio e ingressantes pelo processo de heteroidentificação." },
      { title: "Prática e Vivência Política", summary: "Articular a realização de visitas técnicas a instituições públicas e espaços de tomada de decisão, aproximando o Cientista do Estado da prática profissional e da compreensão do seu papel no planejamento, na estruturação e na atuação dentro e fora do Estado brasileiro." },
      { title: "Tesouraria — 1", summary: "Criação do Clube CACE, com carteirinha ou mensalidade e benefícios, a fim de arrecadar recursos." },
      { title: "Tesouraria — 2", summary: "Fortalecimento do Butecace como espaço de convivência e fonte de renda." },
      { title: "Tesouraria — 3", summary: "Ampliação da variedade de produtos comerciais do CACE." },
      { title: "Tesouraria — 4", summary: "Realização de sebos e bazares mais de uma vez por semestre." },
      { title: "Tesouraria — 5", summary: "Organização da tesouraria, com planilha de compras e vendas e controle financeiro das festas." },
    ],
  },
  {
    slug: "extensao-e-pesquisa",
    name: "Ensino, Pesquisa e Extensão (DEPE)",
    tone: "green",
    icon: "book",
    intro: "Responsável por incentivar a formação acadêmica complementar, aproximar estudantes e professores e promover atividades de ensino, pesquisa e extensão, como palestras, minicursos, oficinas e jornadas acadêmicas.",
    proposals: [
      { title: "Proposta 1", summary: "Promover minicursos, oficinas e workshops sobre métodos de estudo, escrita científica, ABNT, oratória, Currículo Lattes e LinkedIn." },
      { title: "Proposta 2", summary: "Ampliar os espaços de debate com palestras, mesas-redondas e encontros com professores e pesquisadores." },
      { title: "Proposta 3", summary: "Instituir a Jornada de Pesquisa e Extensão em Ciências do Estado, para apresentar e discutir trabalhos acadêmicos." },
      { title: "Proposta 4", summary: "Fortalecer o diálogo com o corpo docente, incluindo a discussão de optativas, pesquisas e projetos de extensão." },
      { title: "Proposta 5", summary: "Articular as entidades acadêmicas do curso, como Revice e Supernova, para a realização de ações conjuntas." },
      { title: "Proposta 6", summary: "Ampliar o acesso à informação sobre a trajetória universitária, projetos de pesquisa e extensão e oportunidades de estágio." },
      { title: "Proposta 7", summary: "Acompanhar e divulgar a reforma curricular, apresentando as mudanças aos futuros calouros." },
      { title: "Proposta 8", summary: "Promover o diálogo com a comunidade acadêmica sobre as ementas, para encaminhar propostas ao comitê de professores." },
    ],
  },
  {
    slug: "relacoes-institucionais",
    name: "Relações Institucionais e Sociais (DRIS)",
    tone: "terracotta",
    icon: "handshake",
    intro: "Responsável por fortalecer o diálogo e as parcerias do CACE com outras entidades, instituições e comunidades, aproximando o curso de diferentes espaços acadêmicos, sociais e culturais.",
    proposals: [
      { title: "Proposta 1", summary: "Produção de conteúdo voltado à comunidade externa da UFMG, como Clube do Livro voluntário, articulação de eventos e projetos interdisciplinares com cursos de áreas afins, mapa de oportunidades para os discentes e PodCACE." },
      { title: "Proposta 2", summary: "Criação e fortalecimento de projetos de voluntariado." },
      { title: "Proposta 3", summary: "Identificação de projetos sociais que necessitem de voluntários e que tenham relação com a nossa formação." },
      { title: "Proposta 4", summary: "Criação de um banco de oportunidades de voluntariado, divulgado em parceria com o DCOM." },
      { title: "Proposta 5", summary: "Estabelecimento de parcerias com instituições para a realização de ações periódicas." },
      { title: "Proposta 6", summary: "Fortalecimento das relações com a sociedade civil por meio de um mapa de organizações parceiras, encontros e atividades conjuntas (rodas de conversa, oficinas e visitas institucionais) e estímulo a projetos de extensão voltados a demandas sociais (como o CE Prepara)." },
    ],
  },
  {
    slug: "comunicacao",
    name: "Comunicação (DCOM)",
    tone: "red",
    icon: "megaphone",
    intro: "Responsável pela comunicação interna e externa do CACE, divulgação de informações, eventos e oportunidades, além da promoção e valorização do curso de Ciências do Estado nas redes sociais e em outros meios de comunicação.",
    proposals: [
      { title: "Proposta 1", summary: "Promover o curso nas redes sociais, com vídeos e posts sobre grade, áreas de atuação, eventos e aplicação prática." },
      { title: "Proposta 2", summary: "Adotar comunicação descentralizada, com conteúdo adaptado a Instagram, TikTok, YouTube e X." },
      { title: "Proposta 3", summary: "Criar um WhatsApp do CACE para centralizar informes e preservar informações entre gestões." },
      { title: "Proposta 4", summary: "Produzir conteúdos feitos por discentes que traduzam a pesquisa do curso para a sociedade." },
      { title: "Proposta 5", summary: "Divulgar nas redes os projetos de pesquisa e extensão do curso." },
      { title: "Proposta 6", summary: "Manter a campanha #VempraCE o ano todo, e não só no ENEM e no SISU." },
      { title: "Proposta 7", summary: "Atualizar periodicamente o Linktree e o site com manuais, oportunidades e eventos." },
      { title: "Proposta 8", summary: "Criar o setor de agendas institucionais, com levantamento mensal de eventos e presença de discentes voluntários." },
      { title: "Proposta 9", summary: "Levantar egressos e monitorar carreiras, mantendo canais de contato contínuos com eles." },
      { title: "Proposta 10", summary: "Criar um acervo digital com os textos das ementas e sugestões bibliográficas." },
    ],
  },
  {
    slug: "cultura",
    name: "Cultura (DC)",
    tone: "blue",
    icon: "palette",
    intro: "Inserir texto 183",
    proposals: [
      { title: "Proposta 1", summary: "Construir, no início de cada semestre, um calendário cultural com as atividades previstas, seus responsáveis e prazos." },
      { title: "Proposta 2", summary: "Organizar uma programação equilibrada entre arte, debate, lazer e integração, construída com a participação dos estudantes." },
      { title: "Proposta 3", summary: "Estruturar a recepção de calouros e criar momentos regulares de convivência entre estudantes de diferentes períodos." },
      { title: "Proposta 4", summary: "Promover atividades que conectem a formação do curso à realidade social e política, em formatos abertos, plurais e dialógicos." },
      { title: "Proposta 5", summary: "Criar espaços e oportunidades para que os estudantes apresentem e compartilhem suas produções artísticas e culturais." },
      { title: "Proposta 6", summary: "Garantir que a programação cultural seja inclusiva, acessível e represente a diversidade de estudantes do curso." },
      { title: "Proposta 7", summary: "Realizar festas e eventos de integração de forma segura, bem organizada e sem expor o caixa do CACE a riscos desnecessários." },
      { title: "Proposta 8", summary: "Diversificar as formas de arrecadação do CACE, de maneira planejada, transparente e alinhada à Tesouraria." },
      { title: "Proposta 9", summary: "Ampliar a presença cultural do curso para além do CACE, por meio de atividades conjuntas com outros cursos, coletivos e espaços culturais." },
      { title: "Proposta 10", summary: "Registrar e valorizar a história, os símbolos e as tradições do curso, fortalecendo o sentimento de pertencimento." },
      { title: "Proposta 11", summary: "Trabalhar de forma integrada com o DCOM para que as atividades cheguem a todos os estudantes e tenham o devido destaque." },
      { title: "Proposta 12", summary: "Organizar a estrutura de trabalho do Departamento de Cultura, ampliando a participação de voluntários e reunindo informações úteis para a produção de eventos." },
      { title: "Proposta 13", summary: "Registrar e avaliar as atividades realizadas, para favorecer a transparência, a melhoria contínua e a continuidade entre gestões." },
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
