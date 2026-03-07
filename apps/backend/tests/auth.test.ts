// Usando mock do prisma para testar a autenticação
import { describe, it, spyOn, mock, expect, afterEach } from "bun:test";

mock.module('../src/lib/prisma', () => {
    return {
        prisma: {
            user: {
                findFirst: mock(),
                create: mock(),
            }
        }
    };
});

import { authRoutes } from "../src/routes/auth.routes";
import { prisma } from "../src/lib/prisma"


describe('Fluxo de Registro (POST /api/v1/users/register)', () => {

    afterEach(() => {
        mock.restore();
    });

    // Payload válido baseado no schema prisma (Com todos os campos obrigatórios)
    const validPayload = {
        nomeFundador: "João Empreendedor",
        cnpj: "12345678000199",
        razaoSocial: "Tech Inovação Ltda",
        naturezaJuridica: "206-2",
        situacaoCadastral: "ATIVA",
        dataAbertura: "2024-01-01",
        porte: "ME",
        logradouro: "Av. Paulista",
        numero: "1000",
        cep: "01310100",
        bairro: "Bela Vista",
        municipio: "São Paulo",
        uf: "SP",
        cnaePrincipal: "6201-5-00",
        cnaesSecundarios: ["6202-3-00"],
        email: "joao@techinovacao.com.br",
        telefone: "11999999999",
        faturamentoAnual: 100000,
        funcDiretos: 5,
        funcIndiretos: 2,
        historia: "Começamos na garagem e hoje buscamos expandir...",
        problemasLatentes: "Dificuldade enorme em gerir novos leads..."
    };

    it("Deve registrar uma nova empresa com sucesso e retornar HTTP 201", async () => {

        (prisma.user.findFirst as ReturnType<typeof mock>).mockResolvedValue(null);
        (prisma.user.create as ReturnType<typeof mock>).mockResolvedValue({ id: 'uuid-fake-123' });

        //3. O Elysia permite testar rotas enviando um request nativo diretamente para o manipulador
        const response = await authRoutes.handle(
            new Request('http://localhost/api/v1/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(validPayload)
            })
        );

        // 4. Asserções (Expectativas de output)
        expect(response.status).toBe(201);

        const body = (await response.json()) as { message: string; userId: string };
        expect(body.message).toBe("Empresa cadastrada com sucesso!");
        expect(body.userId).toBe("uuid-fake-123");
    });

    it('Deve retornar HTTP 409 se o CNPJ ou Email já estiverem cadastrados', async () => {
        // 4. Neste teste, mudamos a resposta do mock para simular que o usuário existe
        (prisma.user.findFirst as ReturnType<typeof mock>).mockResolvedValue({ id: 'existente' });

        const response = await authRoutes.handle(
            new Request('http://localhost/api/v1/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(validPayload)
            })
        );

        expect(response.status).toBe(409);

        const body = (await response.json()) as { error: string };
        expect(body.error).toBe("Usuário (Email ou CNPJ) já cadastrado.");
    });

    it('Deve falhar na validação do TypeBox se faltar um campo obrigatório', async () => {
        // Retiramos a razão social do payload
        const { razaoSocial, ...invalidPayload } = validPayload;

        const response = await authRoutes.handle(
            new Request('http://localhost/api/v1/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(invalidPayload)
            })
        );

        //O Elysia retorna 422 Unprocessable Entity ou 400 Bad Request por padrão em erros de schema
        expect(response.status).toBe(422);
    });
});
