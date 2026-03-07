variable "supabase_token" {
  description = "Token de acesso pessoal do Supabase"
  type        = string
  sensitive   = true
}

variable "supabase_project_id" {
  description = "ID do projeto Supabase (Reference ID)"
  type        = string
}

variable "render_api_key" {
  description = "API Key do Render"
  type        = string
  sensitive   = true
}

variable "github_repo_url" {
  description = "URL completa do repositório GitHub contendo o código-fonte do backend. Utilizada pelo provider do Render para realizar o build e deploy automático via Docker."
  type        = string
}

variable "database_url_prod" {
  description = "String de conexão (URI) do banco de dados PostgreSQL em produção no Supabase. Deve seguir o formato 'postgresql://user:password@host:port/dbname' e é injetada como variável de ambiente no Web Service."
  type        = string
  sensitive   = true
}


variable "render_owner_id" {
  description = "ID do proprietário (User ou Org) no Render, começando com 'usr-' ou 'org-'."
  type        = string
}