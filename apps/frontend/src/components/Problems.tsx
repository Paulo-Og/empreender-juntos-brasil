
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ArrowUp } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      title: "Problemas de Financiamento",
      members: 1247,
      description: "Empreendedores buscando alternativas de financiamento e investimento",
      tags: ["Crowdfunding", "Investidores", "Capital de Giro"]
    },
    {
      title: "Marketing Digital",
      members: 892,
      description: "Estratégias de marketing digital para pequenos negócios",
      tags: ["Social Media", "SEO", "Vendas Online"]
    },
    {
      title: "Gestão de Pessoas",
      members: 634,
      description: "Desafios na contratação e gestão de equipes",
      tags: ["Recrutamento", "Liderança", "Cultura"]
    },
    {
      title: "Inovação Tecnológica",
      members: 423,
      description: "Implementação de tecnologia em negócios tradicionais",
      tags: ["Automação", "Digital", "Processos"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Clubes de{" "}
            <span className="bg-gradient-entrepreneur bg-clip-text text-transparent">
              Resolução
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se a empreendedores que enfrentam desafios similares. 
            Nosso algoritmo conecta você automaticamente a grupos focados em resolver problemas específicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {problem.title}
                  </CardTitle>
                  <div className="flex items-center space-x-1 text-entrepreneur-green">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{problem.members}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  {problem.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {problem.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-entrepreneur-green/10 text-entrepreneur-green px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  className="w-full bg-gradient-entrepreneur hover:bg-gradient-entrepreneur-dark text-white group-hover:scale-105 transition-transform duration-300"
                >
                  Participar do Clube
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <div className="text-center space-y-6">
            <div className="bg-gradient-entrepreneur rounded-full w-20 h-20 flex items-center justify-center mx-auto">
              <ArrowUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Como Funciona o Algoritmo de Conexão
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3">
                <div className="bg-entrepreneur-green/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <span className="text-entrepreneur-green font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900">Descreva seu Problema</h4>
                <p className="text-gray-600 text-sm">
                  Compartilhe detalhes sobre o desafio que está enfrentando
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-entrepreneur-gold/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <span className="text-entrepreneur-gold font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900">Conexão Inteligente</h4>
                <p className="text-gray-600 text-sm">
                  Nosso algoritmo encontra empreendedores com problemas similares
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-entrepreneur-green/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <span className="text-entrepreneur-green font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900">Resolução Colaborativa</h4>
                <p className="text-gray-600 text-sm">
                  Trabalhem juntos até encontrar a solução ideal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
