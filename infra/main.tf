terraform {
  required_providers {
    # Provider oficial do Supabase (Community)
    supabase = {
      source  = "supabase/supabase"
      version = "~> 1.0"
    }
    # Provider do Render (Community/Official)
    render = {
      source  = "render-oss/render"
      version = "~> 1.0"
    }
  }
}

provider "supabase" {
  access_token = var.supabase_token
}

provider "render" {
  api_key = var.render_api_key
  owner_id = var.render_owner_id
}

# --- RECURSO 1: Backend no Render ---
resource "render_web_service" "backend_api" {
  name   = "empreender-juntos-backend"
  plan   = "free"
  region = "oregon"

  #Estrutura exigida pelo Render v1.8.0
  runtime_source = {
    docker = {
      repo_url = var.github_repo_url
      branch   = "main"
    }
  }

  #env_vars agora é um mapa de objetos, não de strings
  env_vars = {
    DATABASE_URL = {
      value = var.database_url_prod
    }
    NODE_ENV = {
      value = "production"
    }
    PORT = {
      value = "3000"
    }
  }
}

# --- RECURSO 2: Configurações do Supabase ---
resource "supabase_settings" "projeto_leads" {
  project_ref = var.supabase_project_id

  # Ativa o suporte a storage no banco de dados
  api = jsonencode({
    db_schema            = "public,storage,graphql_public"
    db_extra_search_path = "public,extensions"
  })
}