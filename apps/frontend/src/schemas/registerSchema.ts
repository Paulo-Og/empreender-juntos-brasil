import { z } from "zod";

export const registerSchema = z.object({
    // Identificação
    nomeFundador: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres').default('Nome do Sócio/Fundador'), // z.string({ minLength: 3, default: 'Nome do Sócio/Fundador' }), essa sintaxe e o padrão typeBox usado no Elysia, no zod deve ser usado o encadeamento de métodos como z.string().min(3, 'Nome inválido').default('Nome do Sócio/Fundador')
    cnpj: z.string().length(14, 'O CNPJ deve ter exatamente 14 dígitos numéricos'),
    razaoSocial: z.string().min(3, 'A Razão Social é obrigatória'),
    nomeFantasia: z.string().optional(),
    naturezaJuridica: z.string().min(1, 'Selecione a natureza jurídica'),
    situacaoCadastral: z.string().min(1, 'Situação cadastral é obrigatória'),
    dataAbertura: z.string().min(1, 'Data de abertura é obrigatória'),
    porte: z.string().min(1, 'Selecione o porte da empresa'),

    // Endereço
    logradouro: z.string().min(3, 'Logradouro é obrigatório'),
    numero: z.string().min(1, 'Número é obrigatório'),
    complemento: z.string().optional(),
    cep: z.string().length(8, 'O CEP deve ter 8 dígitos'),
    bairro: z.string().min(2, 'Bairro é obrigatório'),
    municipio: z.string().min(2, 'Município é obrigatório'),
    uf: z.string().length(2, 'UF deve ter 2 letras'),

    // Atividades e Contato
    cnaePrincipal: z.string().min(1, 'CNAE Principal é obrigatório'),
    // Transformando string separada por vírgula em array (útil para inputs de texto)
    cnaesSecundarios: z.string().transform((str) => str.split(',').map(s => s.trim()).filter(Boolean)).pipe(z.array(z.string())),// O 'pipe' garante para o TypeScript que o SAÍDA é um array. O .pipe() permite que você valide a entrada (string), transforme-a e, em seguida, valide o resultado da transformação como um array.
    email: z.string().email('Digite um email válido'),
    telefone: z.string().min(10, 'Telefone inválido'),

    // Métricas e Qualitativo
    faturamentoAnual: z.coerce.number().min(0, 'O faturamento deve ser um número positivo'),
    historia: z.string().min(10, 'Conte-nos um pouco mais sobre a história (mín. 10 caracteres)'),
    problemasLatentes: z.string().min(10, 'Descreva os desafios atuais (mín. 10 caracteres)'),
    funcDiretos: z.coerce
        .number({ message: "Deve ser um número válido" })
        .int("O número de funcionários deve ser inteiro")
        .min(0, "Não pode haver número negativo de funcionários")
        .default(0),

    funcIndiretos: z.coerce
        .number({ message: "Deve ser um número válido" })
        .int("O número de funcionários deve ser inteiro")
        .min(0, "Não pode haver número negativo de funcionários")
        .default(0),
});

//Extraímos a tipagem do TypeScript direto do schema do zod, Usamos z.output para o resultado final (o que o backend recebe: ARRAY)
export type RegisterFormData = z.output<typeof registerSchema>;

// Usamos z.input para o formulário (o que o usuário digita: STRING)
export type RegisterInput = z.input<typeof registerSchema>;