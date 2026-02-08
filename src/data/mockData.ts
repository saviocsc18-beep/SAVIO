export const adminSummaryCards = [
  { label: 'Clientes ativos', value: '32', trend: '+12% neste mês' },
  { label: 'Campanhas em andamento', value: '84', trend: '+7% em 7 dias' },
  { label: 'Entregas pendentes', value: '14', trend: '-3 vs. semana passada' },
  { label: 'Receita recorrente', value: 'R$ 186k', trend: '+18% no trimestre' },
];

export const clients = [
  {
    id: 'aurora',
    name: 'Aurora Skincare',
    segment: 'E-commerce Beauty',
    target: 'Mulheres 25-40, skincare premium',
    objective: 'Aumentar recorrência e ticket médio',
    contact: 'camila@aurora.com',
    status: 'Ativo',
    manager: 'Juliana Martins',
    plan: 'Growth Pro',
    portalLink: 'svcreative.com/portal/aurora',
  },
  {
    id: 'pulse',
    name: 'Pulse Fitness Club',
    segment: 'Academia Premium',
    target: 'Homens e mulheres 20-35, lifestyle fitness',
    objective: 'Aumentar matrículas mensais',
    contact: 'contato@pulseclub.com',
    status: 'Ativo',
    manager: 'Carlos Ribeiro',
    plan: 'Performance 360',
    portalLink: 'svcreative.com/portal/pulse',
  },
  {
    id: 'atlas',
    name: 'Atlas Tech',
    segment: 'SaaS B2B',
    target: 'Gestores de TI e founders de SaaS',
    objective: 'Gerar MQLs para funil enterprise',
    contact: 'growth@atlas.tech',
    status: 'Em onboarding',
    manager: 'Marina Costa',
    plan: 'Enterprise',
    portalLink: 'svcreative.com/portal/atlas',
  },
  {
    id: 'solis',
    name: 'Solis Hotels',
    segment: 'Hospitalidade',
    target: 'Turismo premium e eventos corporativos',
    objective: 'Elevar reservas diretas',
    contact: 'marketing@solishotels.com',
    status: 'Ativo',
    manager: 'Felipe Souza',
    plan: 'Experience',
    portalLink: 'svcreative.com/portal/solis',
  },
];

export const services = [
  {
    title: 'Tráfego Pago (Meta Ads)',
    description: 'Estratégias full-funnel com otimização diária e visão de LTV.',
    status: 'Em escala',
    highlight: 'ROAS 4.8x',
  },
  {
    title: 'Design Gráfico',
    description: 'Identidade visual, peças sociais, apresentações e assets premium.',
    status: 'Sprint criativa',
    highlight: '24 peças/mês',
  },
  {
    title: 'Editor de Vídeos (YouTube)',
    description: 'Pacotes completos para conteúdo longo e cortes para Shorts.',
    status: 'Calendário fechado',
    highlight: '12 vídeos/mês',
  },
  {
    title: 'Landing Pages',
    description: 'Páginas de conversão com testes A/B e performance Web Vitals.',
    status: 'Em construção',
    highlight: 'CVR 6.2%',
  },
  {
    title: 'Bots / IA',
    description: 'Fluxos inteligentes para captação, triagem e atendimento.',
    status: 'MVP validado',
    highlight: '80% automação',
  },
  {
    title: 'Sites',
    description: 'Websites institucionais de alta performance e SEO técnico.',
    status: 'Roadmap',
    highlight: 'Time to launch 20d',
  },
];

export const deliveries = [
  {
    id: 'DEL-3921',
    title: 'Pacote de criativos Meta Ads',
    link: 'https://drive.google.com/drive/folders/mock1',
    status: 'Em produção',
    date: '08 Mar 2025',
  },
  {
    id: 'DEL-3920',
    title: 'Landing page Black Week',
    link: 'https://www.figma.com/file/mock2',
    status: 'Entregue',
    date: '05 Mar 2025',
  },
  {
    id: 'DEL-3918',
    title: 'Relatório de performance mensal',
    link: 'https://docs.google.com/spreadsheets/mock3',
    status: 'Aprovado pelo cliente',
    date: '01 Mar 2025',
  },
];

export const clientKpis = [
  { label: 'Investimento', value: 'R$ 48.200', variation: '+6% vs. mês anterior' },
  { label: 'Leads qualificados', value: '1.420', variation: '+18% em 30 dias' },
  { label: 'CPA médio', value: 'R$ 34,90', variation: '-12% em 30 dias' },
  { label: 'Receita atribuída', value: 'R$ 312k', variation: '+21% em 30 dias' },
];

export const clientDeliveries = [
  {
    id: 'CLI-2101',
    title: 'Dashboard de campanha omnichannel',
    link: 'https://notion.so/mock4',
    status: 'Entregue',
    date: '09 Mar 2025',
  },
  {
    id: 'CLI-2098',
    title: 'Pacote de vídeos YouTube Shorts',
    link: 'https://drive.google.com/drive/folders/mock5',
    status: 'Em produção',
    date: '04 Mar 2025',
  },
];

export const clientServices = [
  {
    title: 'Performance Ads',
    scope: 'Meta + Google Ads + TikTok',
    owner: 'Squad Growth',
    status: 'Ativo',
  },
  {
    title: 'Conteúdo & Design',
    scope: 'Social, blog, apresentações',
    owner: 'Squad Creative',
    status: 'Ativo',
  },
  {
    title: 'CRO + Landing Pages',
    scope: 'Testes A/B e otimização',
    owner: 'Squad Conversion',
    status: 'Em experimento',
  },
];

export const workSessions = [
  {
    id: 'work-1',
    client: 'Aurora Skincare',
    status: 'Em andamento',
    summary: 'Otimização de campanhas Meta Ads e revisão de criativos.',
    duration: '1h 20m · hoje',
  },
  {
    id: 'work-2',
    client: 'Pulse Fitness Club',
    status: 'Concluído',
    summary: 'Reunião de alinhamento + ajustes na campanha local.',
    duration: '50m · ontem',
  },
  {
    id: 'work-3',
    client: 'Atlas Tech',
    status: 'Concluído',
    summary: 'Relatório semanal e análise de funil B2B.',
    duration: '1h 05m · 08 Mar',
  },
];
