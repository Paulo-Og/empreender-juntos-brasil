import { RegisterFormData } from "../schemas/registerSchema";//importação de Tipo (Interface) gerado automaticamente pelo Zod (z.infer). Isso garante que, se você mudar o esquema do sócio/fundador, o TypeScript avisará se esta função estiver enviando dados incompletos

const API_URL = import.meta.env.VITE_API_URL;

//função de chamada para a API
export async function registerCompany(data: RegisterFormData){
    const response = await fetch(`${API_URL}/api/v1/users/register`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        //o Zod já faz a validação, então não precisamos nos preocupar com isso aqui
        body: JSON.stringify(data), //transforma o objeto JS em uma string JSON para enviar pela rede 
    });

    const result = await response.json(); //transforma a resposta JSON string da API em um objeto JS 

    if(!response.ok){
        throw new Error(result.error || "Ocorreu um erro ao realizar o cadastro!");
    }

    return result;
}