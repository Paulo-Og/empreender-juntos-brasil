
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookUser, CheckCircle, Users, Calendar } from 'lucide-react';

const Mentorship = () => {
  const mentors = [
    {
      name: "Carlos Mendes",
      specialty: "E-commerce e Vendas Online",
      experience: "15 anos",
      companies: "Fundador de 3 empresas de tecnologia",
      rating: 4.9,
      sessions: 247,
      available: true
    },
    {
      name: "Ana Silva",
      specialty: "Gestão Financeira e Investimentos",
      experience: "12 anos",
      companies: "Ex-CFO Grandes Empresas",
      rating: 4.8,
      sessions: 189,
      available: true
    },
    {
      name: "Roberto Costa",
      specialty: "Marketing e Branding",
      experience: "20 anos",
      companies: "Agência própria, +100 clientes",
      rating: 4.9,
      sessions: 312,
      available: false
    }
  ];

  const decisions = [
    {
      question: "Devo expandir para o mercado internacional agora?",
      mentor: "Ana Silva",
      response: "Considere primeiro consolidar sua posição no mercado nacional...",
      time: "2 horas atrás",
      helpful: 23
    },
    {
      question: "Qual a melhor estratégia de precificação para meu produto?",
      mentor: "Carlos Mendes",
      response: "Analise seus custos fixos e variáveis, depois pesquise concorrentes...",
      time: "5 horas atrás",
      helpful: 18
    }
  ];

  return (
    <section id="mentorship" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mentoria para{" "}
            <span className="bg-gradient-entrepreneur bg-clip-text text-transparent">
              Decisões Diárias
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empreendedores experientes te ajudam a tomar as melhores decisões no dia a dia. 
            Transforme incertezas em oportunidades com orientação especializada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Mentores Disponíveis</h3>
            {mentors.map((mentor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                        <span>{mentor.name}</span>
                        {mentor.available && (
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        )}
                      </CardTitle>
                      <p className="text-entrepreneur-green font-medium">{mentor.specialty}</p>
                      <p className="text-gray-600 text-sm">{mentor.companies}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">{mentor.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">{mentor.sessions} sessões</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{mentor.experience} de experiência</span>
                    </div>
                    <Button 
                      disabled={!mentor.available}
                      className={mentor.available ? 
                        "bg-gradient-entrepreneur text-white" : 
                        "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }
                    >
                      {mentor.available ? "Agendar Mentoria" : "Indisponível"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Decisões Recentes</h3>
            <div className="space-y-4">
              {decisions.map((decision, index) => (
                <Card key={index} className="bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-4 space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm leading-relaxed">
                      {decision.question}
                    </h4>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-entrepreneur-green">
                      <p className="text-xs text-gray-600 mb-1">
                        Resposta de {decision.mentor}:
                      </p>
                      <p className="text-sm text-gray-700">
                        {decision.response}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{decision.time}</span>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{decision.helpful} acharam útil</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-entrepreneur rounded-xl p-6 text-white">
              <BookUser className="w-8 h-8 mb-4" />
              <h4 className="text-lg font-bold mb-2">Conselhos Solidários</h4>
              <p className="text-sm opacity-90 mb-4">
                Monte seu conselho pessoal com até 5 mentores especializados nos seus desafios.
              </p>
              <Button className="bg-white text-entrepreneur-green hover:bg-gray-100 w-full">
                Montar Meu Conselho
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="bg-entrepreneur-green rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">500+</h4>
              <p className="text-gray-600">Mentores Ativos</p>
            </div>
            <div className="space-y-3">
              <div className="bg-entrepreneur-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">2.500+</h4>
              <p className="text-gray-600">Sessões Realizadas</p>
            </div>
            <div className="space-y-3">
              <div className="bg-entrepreneur-green rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">98%</h4>
              <p className="text-gray-600">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
