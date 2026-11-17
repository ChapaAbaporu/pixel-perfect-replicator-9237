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
  /** Subdivisão interna (opcional). */
  group?: string;
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
    slug: "presidencia",
    name: "Presidência",
    tone: "coral",
    icon: "users",
    intro: "Responsável pela coordenação geral e representação institucional do CACE e pela articulação entre os departamentos, garantindo o bom funcionamento do Centro Acadêmico.",
    proposals: [
      { title: "União Institucional", summary: "Aproximar e articular as entidades discentes do curso, como Revice, Supernova e Jornal Nova Roma, fortalecendo Ciências do Estado como um todo." },
      { title: "Inserção no Mercado", summary: "Ampliar as oportunidades de estágio e emprego por meio do diálogo com docentes, estudantes, egressos e agentes públicos." },
      { title: "Representação Estudantil", summary: "Atuar ativamente em colegiados, conselhos, departamentos e congregação, defendendo os interesses do curso e dos estudantes." },
      { title: "Reforma Curricular", summary: "Acompanhar e divulgar o processo de reforma curricular, garantindo a participação discente e promovendo debates sobre as mudanças nas ementas." },
      { title: "Diálogo com a Faculdade", summary: "Qualificar a relação com docentes e com a direção da Faculdade, buscando maior respeito, reconhecimento e visibilidade para Ciências do Estado." },
      { title: "Gestão Integrada do CACE", summary: "Acompanhar os projetos de todos os departamentos, oferecendo apoio à sua elaboração, articulação e execução." },
      { title: "Infraestrutura e Ocupação do Espaço", summary: "Acompanhar a manutenção, melhoria e limpeza do espaço do CACE, além de promover eventos que estimulem a vivência estudantil na Faculdade." },
      { title: "Permanência e Inclusão", summary: "Defender a permanência estudantil e apoiar PCDs, pessoas trans, estudantes mais velhos, intercampi, intercambistas e ingressantes por heteroidentificação." },
      { title: "Prática e Vivência Política", summary: "Organizar visitas técnicas a instituições públicas e espaços de decisão, aproximando os estudantes da prática profissional." },
    ],
  },
  {
    slug: "secretaria",
    name: "Secretaria",
    tone: "yellow",
    icon: "book",
    intro: "Responsável pela organização administrativa da gestão, incluindo o registro de atas, documentos, reuniões e o acompanhamento das decisões.",
    proposals: [
      { title: "Arquivo e Documentação", summary: "Manter um arquivo digital padronizado, reunindo atas, ofícios, requerimentos e certificados de fácil acesso." },
      { title: "Registro de Decisões", summary: "Documentar os encaminhamentos das reuniões em planilhas compartilhadas, permitindo a consulta por todos os integrantes da gestão." },
      { title: "Transparência Interna", summary: "Garantir que os integrantes da gestão tenham acesso às atas, planilhas e demais informações institucionais necessárias ao funcionamento do CACE." },
      { title: "Regularização Administrativa", summary: "Verificar, em conjunto com a Presidência, a situação documental, estatutária e cadastral do Centro Acadêmico, auxiliando na resolução de eventuais pendências." },
      { title: "Calendário e Integração", summary: "Criar um calendário compartilhado de reuniões e eventos, facilitando a circulação de informações entre o CACE, os discentes e os docentes." },
      { title: "Registro das Atividades", summary: "Organizar registros periódicos e colaborativos das atividades de cada departamento, favorecendo a integração, a prestação de contas e a continuidade da gestão." },
      { title: "Memória e Transição", summary: "Preservar documentos, projetos e contatos institucionais, preparando uma síntese das atividades para facilitar a transição entre gestões." },
    ],
  },
  {
    slug: "tesouraria",
    name: "Tesouraria",
    tone: "terracotta",
    icon: "coins",
    intro: "Responsável pela administração financeira do CACE, organizando receitas, despesas, arrecadações e prestação de contas, garantindo transparência e recursos para a realização das atividades e projetos.",
    proposals: [
      { title: "Clube CACE", summary: "Criar o Clube CACE, com carteirinha ou mensalidade e benefícios para os participantes, ampliando as possibilidades de arrecadação do Centro Acadêmico." },
      { title: "Fortalecimento do Butecace", summary: "Fortalecer o Butecace como espaço de convivência entre estudantes e como fonte de recursos para o CACE." },
      { title: "Produtos do CACE", summary: "Ampliar a variedade de produtos comercializados pelo Centro Acadêmico, diversificando as possibilidades de arrecadação." },
      { title: "Sebos e Bazares", summary: "Realizar sebos e bazares mais de uma vez por semestre, ampliando as iniciativas de arrecadação e circulação de produtos." },
      { title: "Organização Financeira", summary: "Manter planilhas de compras e vendas e acompanhar as receitas e despesas das festas, fortalecendo o controle e a transparência financeira da gestão." },
    ],
  },
  {
    slug: "extensao-e-pesquisa",
    name: "Ensino, Pesquisa e Extensão (DEPE)",
    tone: "green",
    icon: "book",
    intro: "Responsável por incentivar a formação acadêmica complementar, aproximar estudantes e professores e promover atividades de ensino, pesquisa e extensão, como palestras, minicursos, oficinas e jornadas acadêmicas.",
    proposals: [
      { title: "Formação Acadêmica Complementar", summary: "Promover minicursos, oficinas e workshops sobre métodos de estudo, leitura acadêmica, escrita científica, normas da ABNT, oratória, Currículo Lattes e LinkedIn." },
      { title: "Debates e Formação", summary: "Realizar palestras, mesas-redondas e encontros com docentes, pesquisadores e personalidades acadêmicas e políticas sobre temas relevantes para Ciências do Estado." },
      { title: "Jornada de Pesquisa e Extensão", summary: "Instituir uma jornada acadêmica para apresentação e discussão de pesquisas e experiências de extensão, com oficinas e possibilidade de publicação digital dos trabalhos aprovados." },
      { title: "Diálogo com Docentes", summary: "Aproximar estudantes e professores para construir atividades acadêmicas e discutir disciplinas optativas, projetos de pesquisa e iniciativas de extensão." },
      { title: "Integração das Entidades Acadêmicas", summary: "Fortalecer a cooperação com Revice, Supernova e outras iniciativas de ensino, pesquisa e extensão, promovendo divulgação e atividades conjuntas." },
      { title: "Informação e Oportunidades Acadêmicas", summary: "Atualizar e divulgar orientações sobre a trajetória universitária, procedimentos acadêmicos, formação complementar, pesquisa, extensão, estágios e desenvolvimento profissional." },
      { title: "Reforma Curricular", summary: "Acompanhar e divulgar as mudanças curriculares, informar os ingressantes e promover debates sobre as ementas, reunindo contribuições discentes ao processo de reforma." },
    ],
  },
  {
    slug: "relacoes-institucionais",
    name: "Relações Institucionais (DRI)",
    tone: "terracotta",
    icon: "handshake",
    intro: "Responsável por fortalecer o diálogo e as parcerias do CACE com outras entidades, instituições e comunidades, aproximando o curso de diferentes espaços acadêmicos, sociais e culturais.",
    proposals: [
      { title: "Relações com a Sociedade Civil", summary: "Aproximar Ciências do Estado de organizações sociais, coletivos, movimentos sociais e ONGs, promovendo parcerias, encontros, debates e visitas institucionais." },
      { title: "Extensão e Impacto Social", summary: "Incentivar projetos e atividades que aproximem o conhecimento produzido no curso das demandas da sociedade, fortalecendo a atuação prática dos estudantes." },
      { title: "Voluntariado", summary: "Identificar e divulgar oportunidades de voluntariado relacionadas à formação em Ciências do Estado, estabelecendo parcerias com instituições para a realização de ações sociais periódicas." },
      { title: "Conhecimento para a Sociedade", summary: "Promover iniciativas que tornem acessíveis à comunidade externa os conhecimentos sobre Estado, políticas públicas e cidadania, por meio de conteúdos e atividades de formação." },
      { title: "Integração Acadêmica", summary: "Articular eventos e projetos interdisciplinares com outros cursos e unidades da UFMG, ampliando as oportunidades de participação e troca de experiências entre estudantes." },
      { title: "Clube do Livro", summary: "Desenvolver um clube de leitura voluntário, incentivando a discussão de obras e temas relacionados à formação acadêmica e à realidade social." },
      { title: "Intercâmbio de Experiências", summary: "Promover encontros entre estudantes de diferentes cursos para compartilhar experiências de organização estudantil, participação universitária e atuação social." },
      { title: "PodCACE", summary: "Desenvolver o projeto PodCACE, em parceria com o CRJ, como espaço de diálogo, divulgação de conhecimentos e aproximação entre o curso e a sociedade." },
    ],
  },
  {
    slug: "comunicacao",
    name: "Comunicação (DCOM)",
    tone: "red",
    icon: "megaphone",
    intro: "Responsável pela comunicação interna e externa do CACE, divulgação de informações, eventos e oportunidades, além da promoção e valorização do curso de Ciências do Estado nas redes sociais e em outros meios de comunicação.",
    proposals: [
      { title: "Divulgação do Curso", summary: "Promover Ciências do Estado nas redes sociais, com conteúdos sobre a grade curricular, áreas de atuação, eventos e aplicações práticas da formação." },
      { title: "Comunicação Descentralizada", summary: "Adaptar os conteúdos para Instagram, TikTok, YouTube e X, respeitando as particularidades de cada plataforma e suas possibilidades de alcance." },
      { title: "WhatsApp do CACE", summary: "Criar um canal central de informes que reúna informações referentes ao curso, programação de eventos e contatos institucionais, preservando esse material para as gestões seguintes." },
      { title: "Pesquisa para a Sociedade", summary: "Produzir, em conjunto com os discentes, conteúdos que traduzam as pesquisas do curso para uma linguagem acessível, divulgando também projetos de pesquisa e extensão." },
      { title: "#VempraCE", summary: "Manter a campanha durante todo o ano, e não apenas nos períodos de ENEM e SISU, promovendo o curso e ampliando o interesse dos estudantes secundaristas pela área." },
      { title: "Canal de Informações", summary: "Atualizar frequentemente o Linktree e o site com manuais, oportunidades acadêmicas e eventos." },
      { title: "Agendas Institucionais", summary: "Realizar levantamentos mensais de eventos relacionados à área e organizar a participação de voluntários para representar o curso." },
      { title: "Levantamento de Egressos", summary: "Acompanhar a trajetória dos egressos e manter contato contínuo com eles, contribuindo para uma compreensão mais ampla das áreas de atuação em Ciências do Estado." },
      { title: "Acervo Digital", summary: "Reunir textos das ementas e sugestões bibliográficas que contribuam para a formação dos estudantes de Ciências do Estado." },
    ],
  },
  {
    slug: "cultura",
    name: "Cultura (DCULT)",
    tone: "blue",
    icon: "palette",
    intro: "Inserir texto 183",
    proposals: [
      { title: "Planejamento Cultural", summary: "Organizar um calendário semestral de atividades culturais, de integração e arrecadação, com definição antecipada de datas, responsáveis e recursos necessários." },
      { title: "Programação Diversificada", summary: "Promover atividades de arte, debate, lazer e convivência, considerando os interesses e as sugestões dos estudantes." },
      { title: "Acolhimento e Integração", summary: "Fortalecer a recepção dos calouros e a convivência entre turmas, por meio de atividades de integração e iniciativas de apadrinhamento entre veteranos e ingressantes." },
      { title: "Cultura e Formação Política", summary: "Realizar rodas de conversa, cineclubes, encontros de leitura e debates que aproximem a formação em Ciências do Estado das questões sociais e políticas." },
      { title: "Valorização Artística", summary: "Incentivar a produção cultural dos estudantes, promovendo saraus, exposições, oficinas e espaços de divulgação de seus trabalhos." },
      { title: "Diversidade e Acessibilidade", summary: "Garantir uma programação cultural inclusiva, que valorize a diversidade dos estudantes e considere as diferentes condições de participação." },
      { title: "Festas e Eventos", summary: "Organizar festas e atividades de integração com planejamento, segurança e responsabilidade financeira, buscando parcerias que reduzam os custos e riscos para o CACE." },
      { title: "Arrecadação de Recursos", summary: "Promover eventos e iniciativas de arrecadação em conjunto com a Tesouraria, contribuindo para a sustentabilidade financeira do Centro Acadêmico." },
      { title: "Parcerias Culturais", summary: "Desenvolver atividades conjuntas com outros cursos, centros acadêmicos, coletivos e espaços culturais de Belo Horizonte, ampliando a integração e a visibilidade do curso." },
      { title: "Memória e Identidade", summary: "Preservar a história e as tradições de Ciências do Estado, reunindo registros culturais e incentivando a criação de materiais que fortaleçam a identidade do curso." },
      { title: "Divulgação Cultural", summary: "Atuar em conjunto com o DCOM para ampliar a divulgação das atividades culturais e garantir maior alcance e participação dos estudantes." },
      { title: "Organização e Voluntariado", summary: "Incentivar a participação de estudantes na organização de atividades culturais e manter um registro de fornecedores, parceiros e informações úteis para eventos futuros." },
      { title: "Registro e Continuidade", summary: "Documentar e avaliar as atividades realizadas, preservando informações e experiências que contribuam para o planejamento das próximas gestões." },
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
