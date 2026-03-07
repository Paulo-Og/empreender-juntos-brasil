import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { authRoutes } from "./routes/auth.routes";

const app = new Elysia()
    .use(cors())
    .use(swagger())
    .get('/', () => 'API Empreenderjuntos - Online')
    // Registra rotas de autenticação 
    .use(authRoutes)
    .listen(3000)

console.log(
    `Backend rodando em http: //${app.server?.hostname}:${app.server?.port}`
)