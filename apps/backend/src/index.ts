import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { authRoutes } from "./routes/auth.routes";

const door = process.env.PORT || 3000;

// Puxa a URL do frontend das variáveis de ambiente
// Se não existir (desenvolvimento local), libera o localhost padrão do Vite
const frontEndUrl = process.env.FRONTEND_URL || 'http://localhost:5173';

const app = new Elysia()
    .use(
        cors({
      origin: frontEndUrl, // A Lista VIP: Apenas este endereço pode fazer requisições
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // O que eles podem fazer lá dentro
      allowedHeaders: ['Content-Type', 'Authorization'], // Quais dados extras podem trazer
      credentials: true, // Necessário se você for usar Cookies ou Sessões no futuro
     })
    )
    .use(swagger())
    .get('/', () => 'API Empreenderjuntos - Online')
    // Registra rotas de autenticação 
    .use(authRoutes)
    .listen(door)

console.log(
    `Backend rodando em http: //${app.server?.hostname}:${app.server?.port}`
)