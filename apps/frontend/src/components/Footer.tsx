
import { Users, MessageSquare, BookOpen, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-entrepreneur rounded-lg p-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Empreender Juntos Brasil</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformando a jornada empreendedora brasileira através da colaboração, 
              conhecimento compartilhado e apoio mútuo.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors cursor-pointer">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors cursor-pointer">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Plataforma</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Clubes de Problemas</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Conselhos Solidários</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Mentoria Diária</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Fóruns de Discussão</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Recursos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Cursos Exclusivos</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Biblioteca Digital</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Pesquisa & Desenvolvimento</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Crowdfunding</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold">Suporte</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Programa de Recomeço</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-entrepreneur-green transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Empreender Juntos Brasil. Todos os direitos reservados.
            </p>
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                "Melhor fazer amigos nos negócios, do que fazer negócio com os amigos"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gradient-entrepreneur rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-2">O Empresariado Brasileiro Precisa de Organização</h3>
            <p className="text-lg opacity-90 mb-4">
              Juntos, podemos mudar o Brasil através do empreendedorismo consciente e colaborativo.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm opacity-80">Empreendedores</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Mentores</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Projetos P&D</div>
              </div>
              <div>
                <div className="text-3xl font-bold">89%</div>
                <div className="text-sm opacity-80">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
