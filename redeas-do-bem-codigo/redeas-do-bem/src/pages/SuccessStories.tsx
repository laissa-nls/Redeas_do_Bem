import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import successStory1 from "@/assets/new-success-1.jpg";
import successStory2 from "@/assets/new-relampago.jpg";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      horseName: "Amora",
      adopter: "José Reginaldo dos Santos",
      image: successStory1,
      testimonial: "A dócil Amora, adotada por José Reginaldo dos Santos, virou o xodó da filha Isabela, de 10 anos."
    },
    {
      id: 2,
      horseName: "Relâmpago",
      adopter: "João Carlos",
      image: successStory2,
      testimonial: "Adotar o Relâmpago foi a melhor decisão que tomei. Ele me ajuda no trabalho rural e se tornou meu melhor companheiro. É incrível ver como um animal resgatado pode ser tão grato e leal."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-nunito">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/menu">
            <Button variant="outline" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center">
              <Heart className="w-8 h-8 mr-3 text-primary" />
              Finais Felizes
            </h1>
            <p className="text-muted-foreground mt-2">
              Histórias reais de adoção que transformaram vidas
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <Card key={story.id} className="overflow-hidden shadow-card">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`aspect-video lg:aspect-square ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={story.image} 
                    alt={`${story.horseName} em seu novo lar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {story.horseName}
                    </h3>
                    <p className="text-primary font-medium">
                      Adotado por: {story.adopter}
                    </p>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic text-lg leading-relaxed border-l-4 border-primary pl-4">
                    "{story.testimonial}"
                  </blockquote>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-warm rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Quer fazer parte dessa história?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Cada adoção é uma nova chance de vida. Conheça nossos cavalos disponíveis 
            e seja parte desta corrente do bem.
          </p>
          <Link to="/cavalos-disponiveis">
            <Button variant="secondary" size="lg">
              Ver Cavalos Disponíveis
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;