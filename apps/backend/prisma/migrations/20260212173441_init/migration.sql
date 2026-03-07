-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cnpj" TEXT NOT NULL,
    "dataAbertura" TIMESTAMP(3) NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "nomeFantasia" TEXT,
    "naturezaJuridica" TEXT NOT NULL,
    "situacaoCadastral" TEXT NOT NULL,
    "dataSituacao" TIMESTAMP(3) NOT NULL,
    "porte" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "cep" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cnaePrincipal" TEXT NOT NULL,
    "cnaesSecundarios" TEXT[],
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "funcDiretos" INTEGER NOT NULL DEFAULT 0,
    "funcIndiretos" INTEGER NOT NULL DEFAULT 0,
    "faturamentoAnual" DECIMAL(15,2) NOT NULL,
    "historia" TEXT NOT NULL,
    "problemasLatentes" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
