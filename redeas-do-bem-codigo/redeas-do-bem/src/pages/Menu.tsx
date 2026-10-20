import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Brain, Phone, Sparkles } from "lucide-react";

const Menu = () => {
  const menuItems = [
    {
      icon: Sparkles,
      title: "Ver Cavalos Disponíveis",
      description: "Conheça os cavalos esperando por um novo lar",
      path: "/cavalos-disponiveis",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Heart,
      title: "Finais Felizes",
      description: "Histórias de adoção que aquecem o coração",
      path: "/historias-de-adocao",
      gradient: "bg-gradient-warm"
    },
    {
      icon: Brain,
      title: "Conscientização",
      description: "Por que resgatamos e como você pode ajudar",
      path: "/conscientizacao",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Phone,
      title: "Quem Somos? Fale Conosco",
      description: "Conheça nossa equipe e entre em contato",
      path: "/contato",
      gradient: "bg-gradient-warm"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-nunito">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Rédeas do Bem
          </h1>
          <p className="text-lg text-muted-foreground">
            Transformando vidas através da adoção responsável
          </p>
        </header>

        <main>
          <nav aria-label="Menu principal do site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" role="list">
              {menuItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path}
                  className="focus:ring-4 focus:ring-primary/50 focus:outline-none rounded-lg"
                  aria-label={`${item.title}: ${item.description}`}
                  role="listitem"
                >
                  <Card className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden h-full">
                    <div className={`${item.gradient} p-6 text-center`}>
                      <div className="mb-4 flex justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4" aria-hidden="true">
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h2>
                      <p className="text-white/90 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </nav>
        </main>

        <footer className="text-center mt-8">
          <Link to="/">
            <Button 
              variant="outline" 
              size="lg"
              className="focus:ring-4 focus:ring-primary/50 focus:outline-none"
              aria-label="Retornar à página inicial"
            >
              Voltar ao Início
            </Button>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Menu;