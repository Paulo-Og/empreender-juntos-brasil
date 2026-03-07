
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, BookOpen, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Clubes Temporários",
      description: "Conecte-se com empreendedores que enfrentam desafios similares. Forme grupos focados para resolver problemas específicos através da colaboração.",
      color: "text-entrepreneur-green",
      bgColor: "bg-green-50"
    },
    {
      icon: MessageSquare,
      title: "Conselhos Solidários",
      description: "Monte seu conselho digital personalizado com empreendedores experientes que já passaram pelos seus desafios atuais.",
      color: "text-entrepreneur-gold",
      bgColor: "bg-yellow-50"
    },
    {
      icon: BookOpen,
      title: "Cursos Exclusivos",
      description: "Acesse cursos ministrados por grandes empreendedores. Aprenda com quem realmente faz e transforme conhecimento em resultados.",
      color: "text-entrepreneur-green",
      bgColor: "bg-green-50"
    },
    {
      icon: Calendar,
      title: "Mentoria Diária",
      description: "Receba orientação especializada para suas decisões do dia a dia. Empreendedores experientes te ajudam a navegar pelos desafios cotidianos.",
      color: "text-entrepreneur-gold",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades que{" "}
            <span className="bg-gradient-entrepreneur bg-clip-text text-transparent">
              Transformam
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas poderosas que antes eram exclusivas de grandes empresas, 
            agora disponíveis para todos os empreendedores brasileiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-entrepreneur-green to-entrepreneur-gold rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Mais de 50 funcionalidades em desenvolvimento
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Estamos constantemente inovando para oferecer as melhores ferramentas 
              para o crescimento do seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">Inteligência Artificial</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Análise de Mercado</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Networking Inteligente</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Gestão de Projetos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
