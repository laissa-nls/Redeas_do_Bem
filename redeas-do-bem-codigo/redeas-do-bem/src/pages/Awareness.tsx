import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Shield, Heart, Phone } from "lucide-react";
import awareness1 from "@/assets/awareness-1.jpg";
import awareness2 from "@/assets/awareness-2.jpg";
const Awareness = () => {
  return <div className="min-h-screen bg-background font-nunito">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/menu">
            <Button variant="outline" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">
            Por que resgatamos?
          </h1>
        </div>

        <div className="space-y-8">
          {/* Programa da Prefeitura */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div>
                <div className="text-muted-foreground">
                  <p>A Prefeitura de Aracaju, por meio da Empresa Municipal de Serviços Urbanos (Emsurb), possui um programa apreensão de animais abandonados ou soltos em áreas urbanas, com o objetivo de reduzir os riscos de acidentes e criar uma cidade mais segura e harmoniosa para todos.</p>
                </div>
                <div className="mt-4">
                  <img src={awareness1} alt="Programa de apreensão de animais" className="w-full rounded-lg" />
                </div>
              </div>
            </div>
          </Card>

          {/* Lei Municipal */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div>
                <div className="text-muted-foreground">
                  <p>Conforme a lei municipal n° 2380, de 14 de maio de 1996, é proibido e será apreendido todo e qualquer animal solto nas vias e logradouros públicos e locais de livre acesso ao público. A legislação prevê ainda que o proprietário do animal está sujeito ao pagamento das despesas referentes à apreensão.</p>
                </div>
                <div className="mt-4">
                  <img src={awareness2} alt="Lei municipal sobre animais soltos" className="w-full rounded-lg" />
                </div>
              </div>
            </div>
          </Card>

          {/* Como denunciar */}
          <Card className="p-6 bg-destructive/5 border-destructive/20">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
              <div>
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Como denunciar animais soltos?</h3>
                  <div className="text-muted-foreground">
                    <p>A Emsurb realiza apreensões de forma contínua, com rotas diárias pelas zonas sul e norte da cidade, além de atender a chamados de emergência. O serviço pode ser acionado por meio do telefone <strong>99151-0315</strong>. Para agilizar o atendimento, é essencial informar a localização exata do animal.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-earth rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">
            Seja um agente de mudança
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Sua consciência e ação podem salvar vidas. Denuncie maus-tratos e 
            considere adotar um de nossos cavalos resgatados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cavalos-disponiveis">
              <Button variant="secondary" size="lg">
                Ver Cavalos para Adoção
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default Awareness;