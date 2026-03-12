// ==========================================
// ORIEVO SAFETY LEARN - CONFIGURAÇÃO DE MUNDOS
// Sistema Modular Integrado
// ==========================================

const MUNDOS_CONFIG = {
    
    'world-seguranca': {
        id: 'world-seguranca',
        nome: 'Segurança no Trabalho',
        descricao: 'EPIs e Prevenção de Acidentes',
        icone: '🛡️',
        cor: '#e74c3c',
        senha: 'Seguranca2026',
        ativo: true,
        
        fases: [
            {nome: 'Vídeo: Introdução', tipo: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
            {nome: 'Quiz: Fundamentos', tipo: 'quiz'},
            {nome: 'Jogo: Memória EPIs', tipo: 'memoria'},
            {nome: 'Caça-Palavras', tipo: 'caca-palavras'}
        ],
        
        quiz: [
            {pergunta: 'O que significa EPI?', opcoes: ['Equipamento de Proteção Individual', 'Equipamento de Produção Industrial', 'Equipamento Pessoal Interno', 'Equipamento de Processo'], correta: 0},
            {pergunta: 'Quando usar capacete?', opcoes: ['Quando supervisor está presente', 'Em áreas sinalizadas como obrigatório', 'Somente em dias de chuva', 'Apenas em obras'], correta: 1},
            {pergunta: 'Principal função do DDS?', opcoes: ['Reduzir custos', 'Substituir treinamentos', 'Conscientização diária sobre segurança', 'Burocracia legal'], correta: 2},
            {pergunta: 'EPI danificado, o que fazer?', opcoes: ['Continuar usando', 'Reportar e solicitar substituição', 'Tentar consertar', 'Emprestar de colega'], correta: 1}
        ],
        
        memoria: {pares: ['⛑️', '🥽', '🦺', '👷', '🧤', '👟', '😷', '🎧']},
        cacaPalavras: {palavras: ['CAPACETE', 'LUVAS', 'OCULOS', 'BOTINA', 'COLETE', 'PROTETOR', 'MASCARA', 'SEGURANCA']}
    },
    
    'world-lideranca': {
        id: 'world-lideranca',
        nome: 'Líder de Excelência',
        descricao: 'Habilidades de Liderança',
        icone: '👔',
        cor: '#3498db',
        senha: 'Lider2026',
        ativo: true,
        
        fases: [
            {nome: 'Vídeo: O que é Liderança', tipo: 'video', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
            {nome: 'Quiz: Fundamentos', tipo: 'quiz'},
            {nome: 'Jogo: Competências', tipo: 'memoria'},
            {nome: 'Caça-Palavras', tipo: 'caca-palavras'}
        ],
        
        quiz: [
            {pergunta: 'Característica essencial em líder?', opcoes: ['Autoritarismo', 'Empatia e comunicação', 'Rigidez', 'Distanciamento'], correta: 1},
            {pergunta: 'Liderar pelo exemplo significa?', opcoes: ['Delegar tudo', 'Demonstrar comportamentos esperados', 'Só dar ordens', 'Evitar envolvimento'], correta: 1},
            {pergunta: 'Papel do feedback?', opcoes: ['Criticar erros', 'Evitar confrontos', 'Desenvolver e orientar equipe', 'Punir comportamentos'], correta: 2},
            {pergunta: 'Como lidar com conflitos?', opcoes: ['Ignorar', 'Tomar partido', 'Mediar e buscar soluções', 'Transferir responsabilidade'], correta: 2}
        ],
        
        memoria: {pares: ['👔', '💼', '📊', '🎯', '💡', '🤝', '📈', '⭐']},
        cacaPalavras: {palavras: ['LIDERANCA', 'EMPATIA', 'GESTAO', 'MOTIVACAO', 'VISAO', 'COMUNICACAO', 'FEEDBACK', 'COACHING']}
    }
};

// Exportar para uso no HTML
if (typeof window !== 'undefined') {
    window.MUNDOS_CONFIG = MUNDOS_CONFIG;
}

