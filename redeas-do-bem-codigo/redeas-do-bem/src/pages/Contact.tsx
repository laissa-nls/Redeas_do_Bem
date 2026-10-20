import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, MapPin, Phone, Clock, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactAbout from "@/assets/contact-about.jpg";
import contactVisit from "@/assets/contact-visit.jpg";
const Contact = () => {
  const [showVisitForm, setShowVisitForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    toast
  } = useToast();
  const handleScheduleVisit = () => {
    setShowVisitForm(true);
  };
  const handleSubmitVisit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para agendar sua visita."
    });
    setShowVisitForm(false);
    setPhoneNumber("");
  };
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Rédeas do Bem - Adote um Cavalo',
        text: 'Conheça o projeto Rédeas do Bem e adote um cavalo resgatado!',
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(window.location.origin);
      toast({
        title: "Link copiado!",
        description: "Compartilhe com seus amigos para espalhar o bem."
      });
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
            Quem Somos? Fale Conosco
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sobre o projeto */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Sobre o Projeto Rédeas do Bem
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O <strong>Rédeas do Bem</strong> é um centro de acolhimento dedicado ao resgate, 
                  reabilitação e adoção responsável de cavalos em situação de vulnerabilidade.
                </p>
                
                <div className="my-4">
                  <img 
                    src={contactAbout} 
                    alt="Vista do centro de acolhimento Rédeas do Bem com cavalos em pasto verde e instalações adequadas para cuidados veterinários" 
                    className="w-full rounded-lg" 
                  />
                </div>
                
                <p>
                  Nossa equipe é formada por veterinários, tratadores experientes e voluntários 
                  apaixonados pelo bem-estar animal. Trabalhamos 24 horas por dia para garantir 
                  que cada animal receba os cuidados necessários.
                </p>
              </div>
            </Card>

            {/* Nossa equipe */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Nossa Equipe
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">DR</span>
                  </div>
                  <p className="font-medium text-sm">Dr. Roberto Silva</p>
                  <p className="text-xs text-muted-foreground">Veterinário Chefe</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">MA</span>
                  </div>
                  <p className="font-medium text-sm">Maria Santos</p>
                  <p className="text-xs text-muted-foreground">Coordenadora</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Informações de contato */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p className="text-muted-foreground text-sm">
                      Rua 12 de Outubro, s/nº<br />
                      Bairro 18 do Forte<br />
                      Próximo ao quartel 28 BC
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-muted-foreground text-sm">
                      (79) 3215-6798<br />
                      (79) 9 9876-5432
                    </p>
                  </div>
                </div>

                
              </div>
            </Card>

            {/* Agendar visita */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Agende uma Visita!
              </h3>
              
              {!showVisitForm ? <div>
                  <p className="text-muted-foreground mb-4">
                    Venha conhecer nosso centro de acolhimento e os cavalos disponíveis 
                    para adoção. As visitas são gratuitas e muito bem-vindas!
                  </p>
                  <div className="mb-4">
                    <img 
                      src={contactVisit} 
                      alt="Visitantes observando cavalos no centro de acolhimento durante uma visita guiada, mostrando a interação responsável com os animais" 
                      className="w-full rounded-lg" 
                    />
                  </div>
                  <Button 
                    onClick={handleScheduleVisit} 
                    className="w-full bg-gradient-earth focus:ring-4 focus:ring-primary/50 focus:outline-none"
                    aria-describedby="visit-description"
                  >
                    Quero Agendar uma Visita
                  </Button>
                  <div id="visit-description" className="sr-only">
                    Formulário para agendar visita ao centro de acolhimento
                  </div>
                </div> : <form onSubmit={handleSubmitVisit} className="space-y-4" aria-label="Formulário para agendamento de visita">
                  <div>
                    <Label htmlFor="visitPhone">Seu telefone para contato *</Label>
                    <Input 
                      id="visitPhone" 
                      type="tel" 
                      placeholder="(xx) x xxxx-xxxx" 
                      value={phoneNumber} 
                      onChange={e => setPhoneNumber(e.target.value)} 
                      required 
                      aria-describedby="phone-help"
                      aria-invalid="false"
                    />
                    <div id="phone-help" className="sr-only">
                      Digite seu telefone para entrarmos em contato e agendarmos a visita
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-gradient-earth focus:ring-4 focus:ring-primary/50 focus:outline-none"
                    >
                      Enviar Solicitação
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setShowVisitForm(false)}
                      className="focus:ring-4 focus:ring-primary/50 focus:outline-none"
                      aria-label="Cancelar agendamento de visita"
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>}
            </Card>

            {/* Compartilhar */}
            
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;