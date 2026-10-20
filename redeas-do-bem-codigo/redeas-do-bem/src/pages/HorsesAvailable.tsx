import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera } from "lucide-react";
import { useState } from "react";
import horse1 from "@/assets/horse-luna.jpg";
import horse2 from "@/assets/new-horse-2.jpg";
import horse3 from "@/assets/horse-estrela.jpg";
import horse4 from "@/assets/horse-dourado.jpg";
const HorsesAvailable = () => {
  const [horses, setHorses] = useState([{
    id: 1,
    name: "Luna",
    age: "8 anos",
    size: "Médio",
    image: horse1,
    personality: "Calma, afetuosa, ideal para companhia"
  }, {
    id: 2,
    name: "Thor",
    age: "12 anos",
    size: "Grande",
    image: horse2,
    personality: "Tranquilo, experiente, ótimo para iniciantes"
  }, {
    id: 3,
    name: "Estrela",
    age: "6 anos",
    size: "Médio",
    image: horse3,
    personality: "Brincalhona, energética, gosta de atividades"
  }, {
    id: 4,
    name: "Dourado",
    age: "10 anos",
    size: "Grande",
    image: horse4,
    personality: "Majestoso, confiável, ideal para equoterapia"
  }]);
  const handleImageChange = (horseId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHorses(prev => prev.map(horse => horse.id === horseId ? {
        ...horse,
        image: imageUrl
      } : horse));
    }
  };
  return <div className="min-h-screen bg-background font-nunito">
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center mb-6">
          <Link to="/menu">
            <Button 
              variant="outline" 
              size="sm" 
              className="mr-4 focus:ring-4 focus:ring-primary/50 focus:outline-none"
              aria-label="Voltar ao menu principal"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">
            Cavalos Disponíveis para Adoção
          </h1>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Lista de cavalos disponíveis para adoção">
            {horses.map(horse => <article key={horse.id} className="overflow-hidden shadow-card hover:shadow-warm transition-all duration-300" role="listitem">
                <Card className="h-full">
                  <div className="aspect-square overflow-hidden relative group cursor-pointer">
                    <img 
                      src={horse.image} 
                      alt={`Foto do cavalo ${horse.name}, ${horse.personality.toLowerCase()}, ${horse.age} de idade, porte ${horse.size.toLowerCase()}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                      onClick={() => document.getElementById(`file-input-${horse.id}`)?.click()}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          document.getElementById(`file-input-${horse.id}`)?.click();
                        }
                      }}
                      role="button"
                      aria-label={`Alterar foto do cavalo ${horse.name}`}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      
                    </div>
                    <input 
                      id={`file-input-${horse.id}`} 
                      type="file" 
                      accept="image/*" 
                      className="sr-only" 
                      onChange={e => handleImageChange(horse.id, e)}
                      aria-label={`Selecionar nova imagem para ${horse.name}`}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      {horse.name}
                    </h2>
                    <dl className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Idade:</dt>
                        <dd className="text-sm font-medium">{horse.age}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Porte:</dt>
                        <dd className="text-sm font-medium">{horse.size}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-sm text-muted-foreground">Vacinação:</dt>
                        <dd>
                          <Badge 
                            variant="secondary" 
                            className="bg-primary/10 text-primary"
                            aria-label="Vacinação completa"
                          >
                            Completa
                          </Badge>
                        </dd>
                      </div>
                    </dl>
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium">Personalidade:</span> {horse.personality}
                    </p>
                    <Link to={`/formulario-adocao?cavalo=${horse.name}`}>
                      <Button 
                        className="w-full bg-gradient-earth hover:opacity-90 focus:ring-4 focus:ring-primary/50 focus:outline-none"
                        aria-label={`Iniciar processo de adoção do cavalo ${horse.name}`}
                      >
                        Quero Adotar
                      </Button>
                    </Link>
                  </div>
                </Card>
              </article>)}
          </div>
        </main>
      </div>
    </div>;
};
export default HorsesAvailable;