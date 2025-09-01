import type { Service, ServiceDetail } from '../types/services';

export const services: Service[] = [
  {
    id: 'direito-civil',
    title: 'Direito Civil',
    description: 'Contratos, responsabilidade civil, direitos reais e questões patrimoniais.',
    icon: '⚖️'
  },
  {
    id: 'direito-empresarial',
    title: 'Direito Empresarial',
    description: 'Constituição de empresas, contratos comerciais e assessoria corporativa.',
    icon: '🏢'
  },
  {
    id: 'direito-previdenciario',
    title: 'Direito Previdenciário',
    description: 'Benefícios do INSS, aposentadorias e revisões previdenciárias.',
    icon: '👥'
  },
  {
    id: 'direito-penal',
    title: 'Direito Penal',
    description: 'Defesa criminal, processos penais e medidas cautelares.',
    icon: '🛡️'
  },
  {
    id: 'direito-trabalhista',
    title: 'Direito Trabalhista',
    description: 'Relações de trabalho, rescisões e direitos dos trabalhadores.',
    icon: '👷'
  },
  {
    id: 'direito-tributario',
    title: 'Direito Tributário',
    description: 'Planejamento fiscal, defesa em autuações e recuperação de créditos.',
    icon: '💰',
  },
  {
    id: 'direito-consumidor',
    title: 'Direito do Consumidor',
    description: 'Proteção de direitos em relações de consumo e defesa contra práticas abusivas.',
    icon: '🛒'
  },
  {
    id: 'detran-jari',
    title: 'DETRAN / JARI',
    description: 'Recursos de trânsito, defesas de autuação e habilitação.',
    icon: '🚗'
  }
];

export const serviceDetails: Record<string, ServiceDetail> = {
  'direito-civil': {
    id: 'direito-civil',
    title: 'Direito Civil',
    description: 'Soluções jurídicas completas para questões civis, contratos e direitos patrimoniais',
    icon: '⚖️',
    fullDescription: 'Nosso escritório conta com advogados civis altamente capacitados, que atuam tanto na prevenção quanto na solução de conflitos. Atuamos em processos judiciais e consultoria jurídica, oferecendo assessoria para pessoas físicas e empresas que buscam um escritório de advocacia em Direito Civil confiável e eficiente.',
    whatIs: 'O Direito Civil é um dos principais ramos do direito brasileiro, regulamentando todas as relações privadas entre pessoas físicas e jurídicas. Trata de questões essenciais no dia a dia, incluindo contratos, imóveis, inventários, pensão alimentícia, divórcio, testamento, reconhecimento de união estável, cobranças judiciais e indenização por danos morais e materiais. Sempre que surge um problema envolvendo propriedade, família ou contratos, um advogado especialista em Direito Civil é fundamental para garantir segurança e a proteção de direitos.',
    areasOfActuation: [ 
      {
        title: 'Ações de Cobrança',
        description: 'Atuamos em processos de cobrança judicial e extrajudicial, recuperação de dívidas de contratos, aluguéis, empréstimos não quitados e notas promissórias.'
      },
      {
        title: 'Elaboração e Análise de Contratos',
        description: 'Oferecemos consultoria na redação, análise e revisão de contratos civis como compra e venda, locação de imóvel, prestação de serviços e outros, prevenindo litígios futuros.'
      },
      {
        title: 'Responsabilidade Civil (Danos Morais e Materiais)',
        description: 'Defendemos os interesses de clientes que sofreram prejuízos materiais ou ofensas à sua honra, auxiliando na busca de indenizações por acidentes, falhas em serviços, defeitos em produtos e publicações ofensivas. Também atuamos na defesa de quem é acusado de causar dano, buscando sempre o equilíbrio e a justiça. Nossa atuação inclui ajuizamento e defesa em ações de indenização por acidente, erro médico, danos morais, danos materiais e publicações ofensivas.'
      },
      {
        title: 'Ações Possessórias e de Usucapião',
        description: 'Representamos clientes em disputas que envolvem posse de imóveis ou terrenos, assim como em processos para reconhecimento judicial de usucapião, que é a aquisição da propriedade após o cumprimento de requisitos legais por quem ocupa o imóvel. Oferecemos defesa em disputas de posse e acompanhamento completo em processos de usucapião para regularização da propriedade.'
      },
      {
        title: 'Registro de Imóveis e Regularização de Bens',
        description: 'Orientamos e acompanhamos processos de registro, regularização documental, desmembramento, averbações, retificações e todos os procedimentos necessários para garantir segurança jurídica à propriedade de bens imóveis. Atuamos na defesa em disputas de posse de imóveis e terrenos, além de processos de usucapião para regularização da propriedade.'
      },
      {
        title: 'Direito de Família e Sucessões',
        description: 'Atuamos em divórcio consensual e litigioso, guarda de filhos, regulamentação de visitas, reconhecimento de união estável, pensão alimentícia, inventário e testamento. Garantimos orientação jurídica completa e atenção personalizada em momentos delicados. Nossa expertise abrange ações de divórcio consensual e litigioso, dissolução e reconhecimento de união estável, guarda de filhos e regulamentação de visitas, pensão alimentícia incluindo pedido, revisão, exoneração e execução, inventário e partilha de bens após falecimentos, bem como elaboração e cumprimento de testamentos.'
      }
    ],
    relatedServices: ['direito-empresarial', 'direito-trabalhista', 'direito-tributario'],
  },
  'direito-empresarial': {
      id: 'direito-empresarial',
      title: 'Direito Empresarial',
      description: 'Assessoria completa para empresas em constituição, contratos e questões corporativas',
      icon: '🏢',
      fullDescription: 'Oferecemos assessoria integral para questões como abertura de empresas, elaboração de contratos, dissoluções societárias, recuperação de crédito, consultoria empresarial e gestão de riscos jurídicos.',
      whatIs: 'O Direito Empresarial reúne normas que regulamentam as atividades de empresas, desde constituição, contratos, relações entre sócios até conflitos comerciais e liquidações. Possuir o suporte de um escritório de advocacia empresarial é garantir segurança jurídica e crescimento saudável para seu negócio.',
      areasOfActuation: [
        {
          title: 'Constituição e Regularização de Empresas',
          description: 'Assessoria completa para abertura, alteração e encerramento de empresas, garantindo conformidade legal em todas as etapas do processo empresarial.'
        },
        {
          title: 'Elaboração e Revisão de Contratos Sociais e Comerciais',
          description: 'Garantimos adequação legal e proteção dos interesses da empresa nas relações negociais, desenvolvendo instrumentos contratuais sólidos e seguros.'
        },
        {
          title: 'Cobrança Judicial e Extrajudicial de Títulos',
          description: 'Atuação eficiente na recuperação de créditos empresariais, utilizando as melhores estratégias para maximizar o retorno e minimizar custos.'
        }
      ],
      relatedServices: ['direito-civil', 'direito-tributario', 'direito-trabalhista'],
    },

    'direito-previdenciario': {
      id: 'direito-previdenciario',
      title: 'Direito Previdenciário',
      description: 'Especialistas em benefícios do INSS, aposentadorias e questões previdenciárias',
      icon: '👥',
      fullDescription: 'Nosso escritório atua em consultoria, requerimentos administrativos e judiciais, assegurando que o cliente receba seu direito à aposentadoria, revisão de benefício, auxílio-doença e outros benefícios previdenciários.',
      whatIs: 'O Direito Previdenciário é o ramo do direito que regula o acesso aos benefícios concedidos pela Previdência Social, como aposentadorias, pensões, auxílios e outros direitos destinados a proteger o trabalhador e sua família em momentos de necessidade. Esse conjunto de normas garante amparo financeiro em situações como idade avançada, incapacidade para o trabalho, doença, acidente, maternidade ou morte do provedor. Muitas vezes, o acesso a esses benefícios pode ser dificultado por exigências burocráticas, interpretações do INSS ou negativas injustas. Por isso, a atuação de um advogado previdenciário é essencial para orientar o cidadão sobre seus direitos, calcular o melhor benefício, reunir a documentação necessária, registrar pedidos e, caso haja recusa, atuar em todas as instâncias administrativas e judiciais até que o direito seja reconhecido.',
      areasOfActuation: [
        {
          title: 'Aposentadorias por Idade, Tempo de Contribuição e Especial',
          description: 'Realizamos uma análise detalhada do histórico de contribuições do cliente, avaliando o melhor benefício e o momento mais vantajoso para solicitação. Fazemos o cálculo do valor da aposentadoria, a organização dos documentos e todo o acompanhamento do pedido junto ao INSS. Atuamos também na via judicial, quando necessário, para garantir a concessão do benefício.'
        },
        {
          title: 'Revisão de Benefícios Previdenciários',
          description: 'Avaliamos se o valor do benefício concedido está correto e, se houver erro ou valor inferior ao devido, promovemos as ações administrativas e judiciais cabíveis para revisão, buscando o recebimento das diferenças acumuladas.'
        },
        {
          title: 'Auxílio-Doença, Auxílio-Acidente e Pensão por Morte',
          description: 'Orientamos e representamos segurados e dependentes em pedidos desses e de outros benefícios, preparando a documentação correta, acompanhando perícias e adotando todas as providências para a concessão e manutenção dos direitos.'
        },
        {
          title: 'Defesa em Processos Administrativos e Judiciais',
          description: 'Atuamos na defesa dos interesses do segurado em processos administrativos perante o INSS, apresentando recursos e acompanhando desde o início até a decisão final. Se necessário, ingressamos com ações judiciais para garantir a efetivação dos direitos previdenciários.'
        }
      ],
      relatedServices: ['direito-trabalhista', 'direito-civil'],
    },

    'direito-penal': {
      id: 'direito-penal',
      title: 'Direito Penal',
      description: 'Defesa criminal especializada em processos penais e medidas cautelares',
      icon: '🛡️',
      fullDescription: 'Nosso escritório de advocacia criminal oferece defesa dedicada, técnica e comprometida com a proteção dos direitos fundamentais de nossos clientes, desde a investigação policial até o processo judicial, garantindo os direitos dos clientes em processos criminais complexos ou situações de emergência, zelando sempre pela observância plena dos direitos do cidadão.',
      whatIs: 'O Direito Penal ou Direito Criminal define condutas consideradas crimes e regula as punições previstas na lei. Atua na proteção do cidadão diante de qualquer acusação, assegurando ampla defesa em todas as fases do processo. Contar com um advogado criminalista experiente é fundamental em casos de acusações criminais, crimes tributários, crimes patrimoniais, audiências de custódia e execução penal.',
      areasOfActuation: [
        {
          title: 'Defesa em Processos Criminais',
          description: 'Assessoramos e representamos clientes em todas as fases do processo penal, incluindo inquérito policial, oferecimento da denúncia, instrução e julgamento, recursos e execução da sentença. O objetivo é garantir uma defesa técnica qualificada, examinando cuidadosamente todas as provas e argumentos e garantindo a ampla defesa e julgamento justo.'
        },
        {
          title: 'Crimes Tributários',
          description: 'Atendemos casos de sonegação fiscal, crime tributário, apropriação indébita tributária, fraude fiscal e crimes previstos na Lei nº 8.137/90. Nossa atuação administrativa e judicial visa evitar ou minorar penalidades e orientar quanto à regularização fiscal. Oferecemos orientação preventiva para evitar riscos criminais em práticas empresariais e fiscais, defesa técnica durante investigações e processos judiciais ou administrativos, negociação de acordos e regularização fiscal quando possível para minimizar consequências jurídicas, além de assessoria detalhada para pessoas físicas e empresas, promovendo transparência e segurança.'
        },
        {
          title: 'Crimes contra o Patrimônio',
          description: 'Defendemos clientes acusados de crimes como furto, roubo, estelionato, apropriação indébita e outros delitos que envolvem bens materiais, sempre buscando a aplicação correta da lei e o respeito aos seus direitos.'
        },
        {
          title: 'Crimes contra a Pessoa',
          description: 'Atuamos em processos voltados a crimes que afetam a integridade física ou psíquica dos indivíduos, como lesão corporal, ameaça, homicídio, entre outros, tanto na defesa quanto na representação de vítimas.'
        },
        {
          title: 'Atendimento em Delegacias e Audiências de Custódia',
          description: 'Oferecemos atendimento imediato em situações de prisão em flagrante ou condução a delegacias, bem como acompanhamento em audiências de custódia, garantindo que todas as garantias processuais e constitucionais sejam respeitadas desde o primeiro momento.'
        },
        {
          title: 'Execução Penal',
          description: 'Prestamos assessoria e adotamos medidas para a obtenção de benefícios legais, como progressão de regime, livramento condicional, remição de pena, além de acompanhamento e orientação durante o cumprimento de penas privativas de liberdade ou restritivas de direitos.'
        }
      ],
      relatedServices: ['direito-administrativo'],
    },

    'direito-trabalhista': {
      id: 'direito-trabalhista',
      title: 'Direito Trabalhista',
      description: 'Especialistas em relações de trabalho e direitos dos trabalhadores',
      icon: '👷',
      fullDescription: 'Nosso escritório presta assessoria jurídica trabalhista para empresas e trabalhadores, atuando tanto em consultoria preventiva quanto na defesa de processos na Justiça do Trabalho. Buscamos sempre a proteção de direitos, a prevenção de passivos e a resolução rápida dos conflitos.',
      whatIs: 'O Direito do Trabalho abrange todas as normas, direitos e deveres que envolvem a relação entre empregadores e empregados. Questões como registro na carteira, pagamento de horas extras, insalubridade, FGTS, rescisão, demissão por justa causa, acordos trabalhistas e processos trabalhistas são cada vez mais frequentes e exigem orientação de um advogado trabalhista especialista.',
      areasOfActuation: [
        {
          title: 'Reclamações Trabalhistas',
          description: 'Ajuizamento de ações trabalhistas para cobrança de direitos não pagos ou violados, tais como salários, férias, décimo terceiro, horas extras, adicional noturno, insalubridade, periculosidade, FGTS, multas rescisórias e demais verbas trabalhistas. Garantimos ao trabalhador uma análise minuciosa e personalizada de seu caso para que todos os seus direitos sejam resguardados.'
        },
        {
          title: 'Defesa em Reclamações Trabalhistas',
          description: 'Atuação na defesa de empresas e empregadores em reclamações trabalhistas. Inclui a elaboração de defesas técnicas, participação em audiências, análise de documentos e redução de riscos, buscando soluções que minimizem impactos financeiros e danos à imagem da empresa.'
        },
        {
          title: 'Assessoria em Rotinas Trabalhistas',
          description: 'Consultoria preventiva para empregadores, revisando práticas internas, contratos de trabalho, políticas de benefícios, procedimentos de admissão, advertências e demissões. O objetivo é orientar a empresa na prevenção de litígios trabalhistas, revisão de contratos, acordos coletivos e práticas diárias de recursos humanos.'
        },
        {
          title: 'Rescisão e Homologação de Contratos',
          description: 'Auxílio completo em processos de homologação de rescisão contratual do colaborador, incluindo o devido cálculo de verbas rescisórias, acompanhamento em homologações e orientação para cumprimento de todos os procedimentos legais, seja em pedidos de demissão, dispensa sem justa causa ou outros tipos de rescisão.'
        }
      ],
      relatedServices: ['direito-previdenciario', 'direito-civil', 'direito-empresarial'],
    },

    'direito-tributario': {
      id: 'direito-tributario',
      title: 'Direito Tributário',
      description: 'Planejamento fiscal e defesa em questões tributárias',
      icon: '💰',
      fullDescription: 'Nosso escritório reúne experiência em consultoria tributária, defesa contra autuações, negociação de dívidas e recuperação de créditos tributários, protegendo o cliente de prejuízos e penalidades municipais, estaduais e federais.',
      whatIs: 'O Direito Tributário é indispensável para empreendedores e pessoas físicas que buscam regularidade fiscal. Ele compreende desde planejamento tributário, defesas em autos de infração, restituição de impostos, parcelamento de dívidas fiscais, consultoria tributária e execução fiscal.',
      areasOfActuation: [
        {
          title: 'Consultoria Tributária Preventiva',
          description: 'Planejamento tributário estratégico visando a redução de riscos de autuações e passivos fiscais, com análise contínua das obrigações tributárias e identificação de oportunidades de otimização fiscal.'
        },
        {
          title: 'Defesa em Autos de Infração',
          description: 'Atuação especializada em processos administrativos e judiciais contra a cobrança de tributos federais, estaduais e municipais, contestando autuações indevidas e protegendo os interesses do contribuinte.'
        },
        {
          title: 'Recuperação de Créditos Tributários',
          description: 'Identificação e restituição de tributos pagos indevidamente, incluindo análise de recolhimentos excessivos e busca de compensações e restituições junto aos órgãos fazendários.'
        },
        {
          title: 'Representação em Execuções Fiscais',
          description: 'Defesa técnica e estratégica em ações ajuizadas pelo Fisco para cobrança de dívidas tributárias, buscando embargos, parcelamentos e soluções negociadas.'
        },
        {
          title: 'Assessoria em Parcelamentos e Regularizações',
          description: 'Auxílio completo na negociação de dívidas fiscais, orientação sobre programas de regularização tributária e acompanhamento de processos de parcelamento junto aos órgãos competentes.'
        }
      ],
      relatedServices: ['direito-empresarial', 'direito-administrativo'],
    },

    'direito-consumidor': {
      id: 'direito-consumidor',
      title: 'Direito do Consumidor',
      description: 'Proteção de consumidores e defesa de empresas em relações de consumo',
      icon: '🛒',
      fullDescription: 'Nosso escritório possui advogados de defesa do consumidor especializados em proteger os direitos de quem compra produtos ou utiliza serviços, defendendo contra práticas abusivas, cobranças indevidas e produtos defeituosos. Também orientamos empresas a evitar sanções e litígios, atuando tanto para consumidores quanto para fornecedores em todas as questões relacionadas às relações de consumo.',
      whatIs: 'O Direito do Consumidor é dedicado à proteção de quem compra produtos ou utiliza serviços, estabelecendo regras para as relações entre consumidores e fornecedores. Abrange desde indenizações por defeitos, cobranças abusivas, rescisão de contratos, negativa de garantia, até casos de nome negativado indevidamente. É fundamental contar com um advogado especialista para garantir o cumprimento dos direitos previstos no Código de Defesa do Consumidor.',
      areasOfActuation: [
        {
          title: 'Ações de Indenização contra Fornecedores',
          description: 'Defendemos os direitos de consumidores que sofreram prejuízos por má prestação de serviços ou fornecimento de produtos defeituosos. Atuamos em casos de danos materiais e morais, vícios de produtos, defeitos na prestação de serviços, cobrança de valores indevidos e outras violações aos direitos do consumidor previstas no CDC.'
        },
        {
          title: 'Defesa de Empresas em Reclamações de Consumidores',
          description: 'Representamos empresas e fornecedores em ações judiciais e procedimentos administrativos movidos por consumidores. Nossa atuação inclui a elaboração de defesas técnicas especializadas, participação em audiências, análise de documentação e desenvolvimento de estratégias para minimizar riscos e impactos financeiros.'
        },
        {
          title: 'Negociação e Acordos Extrajudiciais',
          description: 'Facilitamos a resolução de conflitos de consumo através de negociações diretas, mediações e acordos extrajudiciais. Buscamos soluções rápidas e eficazes que atendam aos interesses de ambas as partes, evitando os custos e a demora de processos judiciais longos.'
        },
        {
          title: 'Representação em Procedimentos Administrativos',
          description: 'Atuamos junto aos órgãos de defesa do consumidor como PROCON, SENACON e outros entes administrativos, tanto na defesa de consumidores em reclamações quanto na representação de empresas em processos administrativos sancionadores.'
        },
        {
          title: 'Consultoria Preventiva para Empresas',
          description: 'Oferecemos orientação especializada para empresas adequarem suas práticas comerciais ao Código de Defesa do Consumidor, revisando contratos, políticas de venda, termos de uso, políticas de privacidade e procedimentos de atendimento ao cliente para prevenir litígios e sanções administrativas.'
        },
        {
          title: 'Regularização de Nome e Crédito',
          description: 'Auxiliamos consumidores na resolução de problemas relacionados à negativação indevida do nome, exclusão de dados dos órgãos de proteção ao crédito, correção de informações incorretas e reparação por danos causados por restrições creditícias injustificadas.'
        }
      ],
      relatedServices: ['direito-civil', 'direito-empresarial'],
    },

    'detran-jari': {
      id: 'detran-jari',
      title: 'DETRAN / JARI',
      description: 'Recursos de trânsito e defesas especializadas',
      icon: '🚗',
      fullDescription: 'Especialistas em defesa de autuações de trânsito, recursos administrativos e questões relacionadas à habilitação, oferecendo atendimento especializado para proteger os direitos dos condutores.',
      whatIs: 'Área especializada na defesa dos direitos dos condutores junto aos órgãos de trânsito, contestando multas e infrações indevidas, buscando sempre a aplicação correta da legislação de trânsito e a proteção dos direitos dos condutores.',
      areasOfActuation: [
        {
          title: 'Recursos contra Multas de Trânsito',
          description: 'Defesa prévia e recursos administrativos contra autuações de trânsito, analisando a legalidade da infração e apresentando argumentos técnicos para anulação ou redução de penalidades.'
        },
        {
          title: 'Defesa contra Suspensão da CNH',
          description: 'Defesa especializada contra suspensão e cassação da carteira de habilitação, utilizando recursos administrativos e judiciais para manter o direito de dirigir do condutor.'
        },
        {
          title: 'Recursos junto a JARI e CETRAN',
          description: 'Representação técnica junto às Juntas Administrativas de Recursos de Infrações e Conselhos Estaduais de Trânsito, apresentando recursos fundamentados e acompanhando todo o processo administrativo.'
        },
        {
          title: 'Estratégias para Redução de Pontuação na CNH',
          description: 'Desenvolvimento de estratégias legais para redução de pontos na carteira de habilitação, incluindo análise de infrações, prazos prescricionais e recursos cabíveis.'
        },
        {
          title: 'Defesa em Crimes de Trânsito',
          description: 'Defesa criminal especializada em processos relacionados ao trânsito, incluindo homicídio culposo no trânsito, lesão corporal culposa, embriaguez ao volante e outros delitos de trânsito.'
        },
        {
          title: 'Questões de Renovação e Habilitação',
          description: 'Assessoria em questões relacionadas à renovação da CNH, primeira habilitação, mudança de categoria e resolução de pendências junto aos órgãos de trânsito.'
        }
      ],
      relatedServices: ['direito-penal', 'direito-consumidor'],
    }
};

// Helper functions
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServiceDetailById = (id: string): ServiceDetail | undefined => {
  return serviceDetails[id];
};

export const getRelatedServices = (serviceId: string): Service[] => {
  const serviceDetail = getServiceDetailById(serviceId);
  if (!serviceDetail) return [];
  
  return serviceDetail.relatedServices
    .map(id => getServiceById(id))
    .filter((service): service is Service => service !== undefined);
};