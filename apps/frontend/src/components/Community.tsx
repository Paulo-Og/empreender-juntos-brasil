
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Calendar } from 'lucide-react';

const Community = () => {
  const forums = [
    {
      title: "Fórum Regional - São Paulo",
      members: 2847,
      type: "regional",
      description: "Discussões focadas nos desafios específicos do mercado paulista",
      lastActivity: "2 min atrás"
    },
    {
      title: "Fórum Nacional - Política Econômica",
      members: 8234,
      type: "national",
      description: "Debate sobre taxa de juros, insegurança jurídica e políticas públicas",
      lastActivity: "5 min atrás"
    },
    {
      title: "Fórum Setorial - Tecnologia",
      members: 1523,
      type: "sector",
      description: "Empreendedores de tecnologia compartilhando experiências",
      lastActivity: "1 hora atrás"
    }
  ];

  const discussions = [
    {
      title: "Proposta: Redução da burocracia para MEIs",
      votes: 1247,
      status: "Em votação",
      category: "Política Pública"
    },
    {
      title: "Nova lei de startups - Impactos práticos",
      votes: 892,
      status: "Aprovada",
      category: "Legislação"
    },
    {
      title: "Taxa SELIC atual prejudica pequenos empreendedores?",
      votes: 634,
      status: "Em debate",
      category: "Economia"
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comunidade{" "}
            <span className="bg-gradient-entrepreneur bg-clip-text text-transparent">
              Organizada
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O empresariado brasileiro precisa de organização. Participe de fóruns regionais e nacionais 
            para debater questões que impactam todos os empreendedores.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fóruns Ativos</h3>
            {forums.map((forum, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {forum.title}
                    </CardTitle>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      forum.type === 'national' ? 'bg-entrepreneur-gold/20 text-entrepreneur-gold' :
                      forum.type === 'regional' ? 'bg-entrepreneur-green/20 text-entrepreneur-green' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {forum.type === 'national' ? 'Nacional' : 
                       forum.type === 'regional' ? 'Regional' : 'Setorial'}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    {forum.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{forum.members.toLocaleString()} membros</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{forum.lastActivity}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-entrepreneur-green text-entrepreneur-green hover:bg-entrepreneur-green hover:text-white">
                      Participar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Votações em Andamento</h3>
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-gray-900 text-sm leading-relaxed">
                          {discussion.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
                          discussion.status === 'Aprovada' ? 'bg-green-100 text-green-700' :
                          discussion.status === 'Em votação' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {discussion.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">{discussion.category}</span>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-medium text-entrepreneur-green">
                              {discussion.votes}
                            </span>
                            <span className="text-sm text-gray-500">votos</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-entrepreneur text-white">
                          Votar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-entrepreneur-green to-entrepreneur-gold rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-2">Próxima Assembleia Nacional</h4>
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5" />
                <span>15 de Janeiro, 2025 - 19h00</span>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Debate sobre as principais mudanças regulatórias que afetam os empreendedores brasileiros.
              </p>
              <Button className="bg-white text-entrepreneur-green hover:bg-gray-100">
                Confirmar Presença
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
