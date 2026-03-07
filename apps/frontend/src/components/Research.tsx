
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, ArrowUp } from 'lucide-react';

const Research = () => {
  const projects = [
    {
      title: "Sistema de Gestão Cooperativa para PMEs",
      description: "Desenvolvimento de um sistema integrado de gestão para pequenas e médias empresas com foco em cooperação.",
      participants: 23,
      investment: "R$ 150.000",
      progress: 65,
      category: "Tecnologia",
      status: "Em Desenvolvimento"
    },
    {
      title: "Plataforma de Crowdfunding Tokenizado",
      description: "Solução blockchain para financiamento colaborativo de projetos empreendedores.",
      participants: 41,
      investment: "R$ 300.000",
      progress: 40,
      category: "Fintech",
      status: "Captando Recursos"
    },
    {
      title: "IA para Análise de Mercado Local",
      description: "Inteligência artificial que analisa tendências de mercado específicas para pequenos negócios.",
      participants: 17,
      investment: "R$ 200.000",
      progress: 80,
      category: "Inteligência Artificial",
      status: "Fase Final"
    }
  ];

  const courses = [
    {
      title: "Gestão Financeira para Startups",
      instructor: "Ana Silva, CFO da TechBrasil",
      duration: "6 semanas",
      students: 847,
      rating: 4.9,
      price: "Gratuito para membros"
    },
    {
      title: "Marketing Digital Prático",
      instructor: "Carlos Mendes, Fundador da MarketUp",
      duration: "4 semanas",
      students: 1203,
      rating: 4.8,
      price: "Gratuito para membros"
    },
    {
      title: "Como Superar o Fracasso Empresarial",
      instructor: "Roberto Costa, Mentor de Recomeços",
      duration: "3 semanas",
      students: 592,
      rating: 4.9,
      price: "Gratuito para membros"
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pesquisa &{" "}
            <span className="bg-gradient-entrepreneur bg-clip-text text-transparent">
              Desenvolvimento
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe de projetos colaborativos de P&D e tenha acesso a cursos exclusivos 
            ministrados por grandes empreendedores. Conhecimento compartilhado gera crescimento coletivo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Projetos de P&D Colaborativo</h3>
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4">
                        <span className="bg-entrepreneur-green/10 text-entrepreneur-green px-2 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Fase Final' ? 'bg-green-100 text-green-700' :
                          project.status === 'Em Desenvolvimento' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progresso</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-entrepreneur h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{project.participants} participantes</span>
                      </div>
                      <span className="font-medium text-entrepreneur-green">{project.investment}</span>
                    </div>
                    <Button size="sm" className="bg-gradient-entrepreneur text-white">
                      Participar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Cursos Exclusivos</h3>
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {course.title}
                  </CardTitle>
                  <p className="text-entrepreneur-green font-medium text-sm">
                    {course.instructor}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <span>{course.duration}</span>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students} alunos</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-entrepreneur-green font-bold">{course.price}</span>
                    <Button size="sm" className="bg-gradient-entrepreneur text-white">
                      Inscrever-se
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-entrepreneur-green to-entrepreneur-green-dark rounded-2xl p-8 text-white">
            <BookOpen className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Biblioteca de Conhecimento</h3>
            <p className="mb-6 opacity-90">
              Mais de 500 estudos de caso, templates e guias práticos criados pela comunidade.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Recursos Disponíveis</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Categorias</div>
              </div>
            </div>
            <Button className="bg-white text-entrepreneur-green hover:bg-gray-100">
              Explorar Biblioteca
            </Button>
          </div>

          <div className="bg-gradient-to-br from-entrepreneur-gold to-entrepreneur-gold-dark rounded-2xl p-8 text-white">
            <ArrowUp className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Programa de Recomeço</h3>
            <p className="mb-6 opacity-90">
              Apoio especializado para empreendedores que falharam e querem tentar novamente.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold">89%</div>
                <div className="text-sm opacity-80">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3 meses</div>
                <div className="text-sm opacity-80">Duração Média</div>
              </div>
            </div>
            <Button className="bg-white text-entrepreneur-gold hover:bg-gray-100">
              Solicitar Apoio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
