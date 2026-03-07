// backend/src/lib/prisma.ts
//create the singleton of the prisma 
// src/lib/prisma.ts
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  // Pega a URL de conexão do seu .env
  const connectionString = process.env.DATABASE_URL;
  
  // Cria o pool de conexão do driver 'pg'
  const pool = new Pool({ connectionString });
  
  // Cria o adaptador do Prisma
  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter, // Passa o adaptador aqui
    log: ['query', 'error', 'warn'] as const,
  });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Adiciona o prisma ao escopo global para evitar múltiplas instâncias no hot-reload do bun 
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};//: É um Double Type Casting do TypeScript. O TypeScript, por segurança, não permite que você adicione propriedades aleatórias ao objeto global. Ao dizer que ele é unknown e depois o formato que queremos, "enganamos" o compilador para permitir que acessemos global.prisma.

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton(); //?? (nullish coalescing operator) no TypeScript e JavaScript retorna o operando do lado direito quando o esquerdo é null ou undefined.
//export const prisma: Exporta a instância para ser usada em todo o seu backend
//globalForPrisma.prisma || ...: Aqui está a lógica do Singleton. Ele primeiro verifica: "Já existe uma instância ligada no meu objeto global?";Se não existir (na primeira vez que o servidor liga), ele cria uma nova conexão com o Supabase

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
//globalForPrisma.prisma = prisma: Salva a instância criada no objeto global.
//Por que isso? Ferramentas como o Bun possuem Hot Reload (recarregam o código quando você salva um arquivo). Sem essa linha, toda vez que você salvasse o código, uma nova conexão seria aberta no Supabase. Em poucos minutos, você atingiria o limite de conexões do banco e o sistema travaria.
//"as" e usado para type Assertion 
