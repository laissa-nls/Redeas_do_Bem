import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroHorse from "@/assets/new-hero-horse.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background font-nunito relative overflow-hidden">
      {/* Hero Section */}
      <main className="relative h-screen flex items-center justify-center" role="banner" aria-label="Página inicial do Rédeas do Bem">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroHorse} 
            alt="Cavalo marrom pastando em campo dourado ao pôr do sol, representando liberdade e cuidado no santuário Rédeas do Bem" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Rédeas do Bem
          </h1>
          
          <div className="rounded-2xl p-8 md:p-12 mb-8 bg-transparent">
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">
              Adote um cavalo resgatado
            </h2>
            <p className="text-xl text-white/90 mb-6 md:text-4xl">
              e transforme uma vida!
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Cada adoção é uma nova chance de vida. Nossos cavalos resgatados 
              aguardam por um lar cheio de amor e cuidado. Seja parte desta 
              corrente do bem.
            </p>
          </div>

          <Link to="/menu">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-xl px-12 py-6 font-semibold shadow-warm focus:ring-4 focus:ring-white/50 focus:outline-none"
              aria-label="Navegar para conhecer os cavalos disponíveis para adoção"
            >
              Conhecer os Cavalos
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </main>

      {/* Quick Stats Section */}
      <section className="py-16" style={{ backgroundColor: '#f1e6dc' }} aria-labelledby="estatisticas">
        <div className="container mx-auto px-4">
          <h2 id="estatisticas" className="sr-only">Estatísticas do Rédeas do Bem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="rounded-lg p-6 shadow-card" style={{ backgroundColor: 'rgba(199, 172, 126, 0.2)' }}>
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" 
                style={{ backgroundColor: '#5f7440' }}
                role="img"
                aria-label="200 ou mais cavalos resgatados"
              >
                <span aria-hidden="true">200+</span>
              </div>
              <p className="text-muted-foreground font-semibold">Cavalos Resgatados</p>
            </div>
            <div className="rounded-lg p-6 shadow-card" style={{ backgroundColor: 'rgba(199, 172, 126, 0.2)' }}>
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" 
                style={{ backgroundColor: '#5f7440' }}
                role="img"
                aria-label="150 ou mais adoções realizadas"
              >
                <span aria-hidden="true">150+</span>
              </div>
              <p className="text-muted-foreground font-semibold">Adoções Realizadas</p>
            </div>
            <div className="rounded-lg p-6 shadow-card" style={{ backgroundColor: 'rgba(199, 172, 126, 0.2)' }}>
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" 
                style={{ backgroundColor: '#5f7440' }}
                role="img"
                aria-label="5 anos de história"
              >
                <span aria-hidden="true">5</span>
              </div>
              <p className="text-muted-foreground font-semibold">Anos de História</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;