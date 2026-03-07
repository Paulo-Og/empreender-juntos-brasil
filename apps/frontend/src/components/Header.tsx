
import { Button } from '@/components/ui/button';
import { Users, Menu } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-entrepreneur rounded-lg p-2">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-entrepreneur bg-clip-text text-transparent">
              Empreender Juntos Brasil
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
              Funcionalidades
            </a>
            <a href="#community" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
              Comunidade
            </a>
            <a href="#mentorship" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
              Mentoria
            </a>
            <a href="#research" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
              Pesquisa
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-entrepreneur-green text-entrepreneur-green hover:bg-entrepreneur-green hover:text-white">
              Entrar
            </Button>
            <Button className="bg-gradient-entrepreneur hover:bg-gradient-entrepreneur-dark text-white"
              onClick={() => navigate('/register')}
            >
              Cadastrar
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
                Funcionalidades
              </a>
              <a href="#community" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
                Comunidade
              </a>
              <a href="#mentorship" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
                Mentoria
              </a>
              <a href="#research" className="text-gray-600 hover:text-entrepreneur-green transition-colors">
                Pesquisa
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-entrepreneur-green text-entrepreneur-green">
                  Entrar
                </Button>
                <Button className="bg-gradient-entrepreneur text-white">
                  Cadastrar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
