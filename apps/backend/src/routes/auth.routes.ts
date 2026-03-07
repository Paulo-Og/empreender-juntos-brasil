import { Elysia, t } from 'elysia';
import { prisma } from '../lib/prisma';

export const authRoutes = new Elysia({ prefix: '/api/v1/users' })
    .post('/register', async ({ body, set }) => {                 // body: Contém os dados limpos e validados que o usuário enviou
        try {                                                       // set: Objeto para controlar a resposta (Status Code, Headers). Sucesso(201), erro(409(conflito),500(erro crítico))
            // verifica se ja existe email ou CNPJ
            const userExists = await prisma.user.findFirst({
                where: {
                    OR: [
                        { email: body.email },
                        { cnpj: body.cnpj }
                    ]
                }
            })

            if (userExists) {
                set.status = 409 // Conflict 
                return { error: 'Usuário (Email ou CNPJ) já cadastrado.' }
            }

            //Cria o usuário no banco 
            const newUser = await prisma.user.create({
                data: {
                    ...body,      //..body: O operador spread espalha todos os campos validados de uma vez.
                    dataAbertura: new Date(body.dataAbertura), // Conversão necessária se no schema for DateTime
                    // Garante campos default se não vierem do front
                    isVerified: false
                }
            })

            set.status = 201 // Created
            return {
                message: "Empresa cadastrada com sucesso!",
                userId: newUser.id
            }
        } catch (error) {
            console.error("Erro no registro:", error)
            set.status = 500 // Internal Server Error
            return { error: "Erro interno ao processar cadastro." }
        }
    }, {
        // Metadados para o Swagger
        detail: {
            summary: 'Registrar nova Empresa/Lead',
            tags: ['Autenticação'],
            description: 'Realiza o cadastro completo de uma empresa validando duplicidade de Email e CNPJ.'
        },
        body: t.Object({   //Contrato (TypeBox): O Elysia usa o t.Object para garantir que ninguém tente "construir" sem os materiais certos. Este bloco é o que chamamos de Schema-based Validation.
            nomeFundador: t.String({ minLength: 3, default: 'Nome do Sócio/Fundador' }),
            cnpj: t.String({ pattern: '^[0-9]{14}$', default: '00000000000000' }),
            razaoSocial: t.String(),
            nomeFantasia: t.Optional(t.String()),
            naturezaJuridica: t.String(),
            situacaoCadastral: t.String(),
            dataAbertura: t.String({ default: '2024-01-01' }), // Receberemos como string ISO e o Prisma converte ou trataremos
            porte: t.String(),
            logradouro: t.String(),
            numero: t.String(),
            complemento: t.Optional(t.String()),
            cep: t.String(),
            bairro: t.String(),
            municipio: t.String(),
            uf: t.String(),
            cnaePrincipal: t.String(),
            cnaesSecundarios: t.Array(t.String()),
            email: t.String({ format: 'email', default: 'contato@empresa.com' }),
            telefone: t.String(),
            faturamentoAnual: t.Number(),
            historia: t.String(),
            problemasLatentes: t.String()
        })
    });
