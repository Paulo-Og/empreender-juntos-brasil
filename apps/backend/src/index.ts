import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { authRoutes } from "./routes/auth.routes";

const door = process.env.PORT || 3000;

const app = new Elysia()
    .use(cors())
    .use(swagger())
    .get('/', () => 'API Empreenderjuntos - Online')
    // Registra rotas de autenticação 
    .use(authRoutes)
    .listen(door)

console.log(
    `Backend rodando em http: //${app.server?.hostname}:${app.server?.port}`
)