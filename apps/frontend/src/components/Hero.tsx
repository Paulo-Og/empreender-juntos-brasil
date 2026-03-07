
import { Button } from '@/components/ui/button';
import { Users, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua{" "}
                <span className="bg-gradient-entrepreneur bg-clip-text text-transparent">
                  jornada empreendedora
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Uma rede de desenvolvimento que conecta empreendedores, compartilha conhecimento e 
                transforma desafios em oportunidades de crescimento colaborativo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-entrepreneur-green rounded-full"></div>
                  <span className="text-gray-700">Clubes de Resolução de Problemas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-entrepreneur-gold rounded-full"></div>
                  <span className="text-gray-700">Conselhos Solidários</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-entrepreneur-green rounded-full"></div>
                  <span className="text-gray-700">Mentoria Especializada</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-entrepreneur hover:bg-gradient-entrepreneur-dark text-white px-8 py-3 text-lg"
              >
                Começar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-entrepreneur-green text-entrepreneur-green hover:bg-entrepreneur-green hover:text-white px-8 py-3 text-lg"
              >
                Conhecer a Plataforma
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Junte-se a mais de 10.000 empreendedores</p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-entrepreneur rounded-full border-2 border-white flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">+10.000 empreendedores conectados</span>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="bg-gradient-entrepreneur rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Dashboard Empreendedor</h3>
                  <p className="text-gray-600">Sua central de crescimento</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Problemas Resolvidos</span>
                      <span className="text-lg font-bold text-entrepreneur-green">47</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-entrepreneur-green h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Conexões Ativas</span>
                      <span className="text-lg font-bold text-entrepreneur-gold">128</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-entrepreneur-gold h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Mentorias Recebidas</span>
                      <span className="text-lg font-bold text-entrepreneur-green">23</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-entrepreneur-green h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-entrepreneur-gold rounded-xl p-4 shadow-lg animate-pulse-slow">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <ArrowDown className="w-8 h-8 text-entrepreneur-green mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
