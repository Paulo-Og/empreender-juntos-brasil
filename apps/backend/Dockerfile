# 1. Definição da Imagem Base (O "Terreno")
FROM oven/bun:1 AS base

# 2. Diretório de Trabalho (Interno do Container)
WORKDIR /usr/src/app

# 3. Gestão de Dependências (Otimização de Cache)
# Copiamos apenas os manifestos primeiro
COPY package.json ./
# Nota: Se o lockb estiver na raiz do projeto, você precisará 
# decidir se mantém um lock por app ou um global.
COPY bun.lock ./ 

RUN bun install
RUN bunx prisma generate

# 4. Cópia do Código Fonte
COPY . .

# 5. Interface de Rede
EXPOSE 3000

# 6. Execução (Modo Desenvolvimento para a Semana 1)
CMD ["bun", "run", "dev"]