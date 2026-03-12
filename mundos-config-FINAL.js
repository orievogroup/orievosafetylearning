// ==========================================
// CONFIGURAÇÃO DE MUNDOS - ORIEVO SAFETY LEARN
// SISTEMA MODULAR - CADA MUNDO PERSONALIZADO
// ==========================================
//
// INSTRUÇÕES RÁPIDAS:
// 1. Copie um bloco de mundo (world-1, world-2)
// 2. Mude o ID (world-3, world-4, etc)
// 3. Personalize: nome, senha, quiz, jogos
// 4. Salve e faça upload no GitHub
// 5. PRONTO!
//
// ==========================================

const MUNDOS_CONFIG = {
    
    // ==========================================
    // MUNDO 1: SEGURANÇA NO TRABALHO
    // ==========================================
    'world-1': {
        // Informações Básicas
        id: 'world-1',
        nome: 'Segurança no Trabalho',
        descricao: 'Aprenda sobre EPIs, procedimentos e prevenção de acidentes',
        icone: '🛡️',
        cor: '#e74c3c',
        senha: 'Seguranca2026!',
        ativo: true,
        
        // ========== QUIZ DESTE MUNDO ==========
        quiz: {
            titulo: 'Quiz: Fundamentos de Segurança',
            perguntas: [
                {
                    numero: 1,
                    pergunta: 'O que significa EPI?',
                    opcoes: [
                        'Equipamento de Proteção Individual',
                        'Equipamento de Produção Industrial',
                        'Equipamento Pessoal Interno',
                        'Equipamento de Processo Integrado'
                    ],
                    correta: 0  // 0=A, 1=B, 2=C, 3=D
                },
                {
                    numero: 2,
                    pergunta: 'Quando devemos usar capacete de segurança?',
                    opcoes: [
                        'Apenas quando o supervisor está presente',
                        'Em todas as áreas sinalizadas como obrigatório',
                        'Somente em dias de chuva',
                        'Apenas em obras de construção'
                    ],
                    correta: 1
                },
                {
                    numero: 3,
                    pergunta: 'Qual a principal função do DDS?',
                    opcoes: [
                        'Reduzir custos da empresa',
                        'Substituir treinamentos formais',
                        'Promover conscientização diária sobre segurança',
                        'Cumprir burocracia legal'
                    ],
                    correta: 2
                },
                {
                    numero: 4,
                    pergunta: 'O que fazer ao identificar um EPI danificado?',
                    opcoes: [
                        'Continuar usando até acabar',
                        'Reportar imediatamente e solicitar substituição',
                        'Tentar consertar por conta própria',
                        'Emprestar de um colega'
                    ],
                    correta: 1
                }
            ]
        },
        
        // ========== JOGO DA MEMÓRIA ==========
        jogoDaMemoria: {
            titulo: 'Jogo: Memória dos EPIs',
            tipo: 'emoji',  // 'emoji', 'texto' ou 'imagem'
            pares: [
                {id: 1, conteudo: '⛑️'},  // Capacete
                {id: 2, conteudo: '🥽'},  // Óculos
                {id: 3, conteudo: '🦺'},  // Colete
                {id: 4, conteudo: '👷'},  // Trabalhador
                {id: 5, conteudo: '🧤'},  // Luvas
                {id: 6, conteudo: '👟'},  // Botina
                {id: 7, conteudo: '😷'},  // Máscara
                {id: 8, conteudo: '🎧'}   // Protetor auricular
            ]
        },
        
        // ========== CAÇA-PALAVRAS ==========
        cacaPalavras: {
            titulo: 'Caça-Palavras: Termos de Segurança',
            palavras: [
                'CAPACETE',
                'LUVAS',
                'OCULOS',
                'BOTINA',
                'COLETE',
                'PROTETOR',
                'MASCARA',
                'SEGURANCA',
                'PREVENCAO',
                'TREINAMENTO'
            ]
        },
        
        // ========== VERDADEIRO OU FALSO ==========
        verdadeiroFalso: {
            titulo: 'Verdadeiro ou Falso: Normas de Segurança',
            afirmacoes: [
                {texto: 'O uso de EPI é opcional no local de trabalho', resposta: false},
                {texto: 'APR deve ser feita antes de iniciar qualquer trabalho de risco', resposta: true},
                {texto: 'Capacete pode ser substituído por boné em áreas internas', resposta: false},
                {texto: 'DDS é importante para prevenir acidentes', resposta: true},
                {texto: 'Posso emprestar meu EPI para colegas sem problema', resposta: false},
                {texto: 'Devo reportar imediatamente equipamentos danificados', resposta: true},
                {texto: 'Segurança é responsabilidade apenas do setor de segurança', resposta: false},
                {texto: 'Treinamentos de segurança são obrigatórios por lei', resposta: true},
                {texto: 'Posso improvisar proteções se não tiver EPI adequado', resposta: false},
                {texto: 'Ordem e limpeza ajudam a prevenir acidentes', resposta: true}
            ]
        },
        
        // ========== ASSOCIAR PARES ==========
        associarPares: {
            titulo: 'Associar: Siglas e Significados',
            pares: [
                {termo: 'EPI', definicao: 'Equipamento de Proteção Individual'},
                {termo: 'NR', definicao: 'Norma Regulamentadora'},
                {termo: 'DDS', definicao: 'Diálogo Diário de Segurança'},
                {termo: 'APR', definicao: 'Análise Preliminar de Risco'},
                {termo: 'CIPA', definicao: 'Comissão Interna de Prevenção de Acidentes'},
                {termo: 'SESMT', definicao: 'Serviço Especializado em Segurança e Medicina do Trabalho'}
            ]
        }
    },
    
    
    // ==========================================
    // MUNDO 2: LÍDER DE EXCELÊNCIA
    // ==========================================
    'world-2': {
        // Informações Básicas
        id: 'world-2',
        nome: 'Líder de Excelência',
        descricao: 'Desenvolva habilidades de liderança e gestão de equipes',
        icone: '👔',
        cor: '#3498db',
        senha: 'Lider2026!',
        ativo: true,
        
        // ========== QUIZ DESTE MUNDO ==========
        quiz: {
            titulo: 'Quiz: Fundamentos de Liderança',
            perguntas: [
                {
                    numero: 1,
                    pergunta: 'Qual característica é essencial em um líder?',
                    opcoes: [
                        'Autoritarismo e controle total',
                        'Empatia e comunicação eficaz',
                        'Rigidez nas decisões',
                        'Distanciamento da equipe'
                    ],
                    correta: 1
                },
                {
                    numero: 2,
                    pergunta: 'O que significa liderar pelo exemplo?',
                    opcoes: [
                        'Delegar todas as tarefas para a equipe',
                        'Demonstrar os comportamentos que você espera',
                        'Apenas dar ordens sem participar',
                        'Evitar envolvimento em atividades operacionais'
                    ],
                    correta: 1
                },
                {
                    numero: 3,
                    pergunta: 'Qual é o papel do feedback na liderança?',
                    opcoes: [
                        'Criticar erros constantemente',
                        'Evitar confrontos a todo custo',
                        'Desenvolver e orientar a equipe',
                        'Punir comportamentos inadequados'
                    ],
                    correta: 2
                },
                {
                    numero: 4,
                    pergunta: 'Como um líder deve lidar com conflitos na equipe?',
                    opcoes: [
                        'Ignorar até que se resolvam sozinhos',
                        'Tomar partido de um dos lados',
                        'Mediar e buscar soluções construtivas',
                        'Transferir a responsabilidade para terceiros'
                    ],
                    correta: 2
                }
            ]
        },
        
        // ========== JOGO DA MEMÓRIA ==========
        jogoDaMemoria: {
            titulo: 'Jogo: Competências de Liderança',
            tipo: 'emoji',
            pares: [
                {id: 1, conteudo: '👔'},  // Profissionalismo
                {id: 2, conteudo: '💼'},  // Gestão
                {id: 3, conteudo: '📊'},  // Análise
                {id: 4, conteudo: '🎯'},  // Foco
                {id: 5, conteudo: '💡'},  // Inovação
                {id: 6, conteudo: '🤝'},  // Colaboração
                {id: 7, conteudo: '📈'},  // Crescimento
                {id: 8, conteudo: '⭐'}   // Excelência
            ]
        },
        
        // ========== CAÇA-PALAVRAS ==========
        cacaPalavras: {
            titulo: 'Caça-Palavras: Termos de Liderança',
            palavras: [
                'LIDERANCA',
                'EMPATIA',
                'GESTAO',
                'MOTIVACAO',
                'DELEGACAO',
                'VISAO',
                'COMUNICACAO',
                'INTEGRIDADE',
                'FEEDBACK',
                'COACHING'
            ]
        },
        
        // ========== VERDADEIRO OU FALSO ==========
        verdadeiroFalso: {
            titulo: 'V/F: Mitos sobre Liderança',
            afirmacoes: [
                {texto: 'Bons líderes nunca cometem erros', resposta: false},
                {texto: 'Feedback regular é essencial para desenvolvimento da equipe', resposta: true},
                {texto: 'Líderes devem sempre ter todas as respostas', resposta: false},
                {texto: 'Empatia é uma habilidade importante para líderes', resposta: true},
                {texto: 'Delegar tarefas é sinal de fraqueza', resposta: false},
                {texto: 'Comunicação clara previne muitos conflitos', resposta: true},
                {texto: 'Todos os líderes nascem prontos, não se desenvolvem', resposta: false},
                {texto: 'Reconhecer o trabalho da equipe aumenta motivação', resposta: true},
                {texto: 'Líderes devem manter distância emocional da equipe', resposta: false},
                {texto: 'Adaptabilidade é crucial em um líder', resposta: true}
            ]
        },
        
        // ========== ASSOCIAR PARES ==========
        associarPares: {
            titulo: 'Associar: Conceitos de Liderança',
            pares: [
                {termo: 'Empatia', definicao: 'Capacidade de se colocar no lugar do outro'},
                {termo: 'Delegação', definicao: 'Transferir responsabilidades com confiança'},
                {termo: 'Visão', definicao: 'Capacidade de enxergar objetivos futuros'},
                {termo: 'Motivação', definicao: 'Inspirar e energizar a equipe'},
                {termo: 'Integridade', definicao: 'Agir com ética e transparência'},
                {termo: 'Comunicação', definicao: 'Transmitir ideias de forma clara e eficaz'}
            ]
        }
    }
    
    
    // ==========================================
    // ADICIONE MAIS MUNDOS AQUI
    // ==========================================
    // Para criar Mundo 3, copie todo bloco acima e mude:
    // - 'world-2' para 'world-3'
    // - id: 'world-3'
    // - nome, senha, quiz, jogos...
    //
    // Exemplo:
    // 'world-3': {
    //     id: 'world-3',
    //     nome: 'Compliance e Ética',
    //     senha: 'Compliance2026!',
    //     quiz: { ... },
    //     jogoDaMemoria: { ... },
    //     etc...
    // }
    
};

// ==========================================
// NÃO MEXA NESTA LINHA
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MUNDOS_CONFIG;
}
