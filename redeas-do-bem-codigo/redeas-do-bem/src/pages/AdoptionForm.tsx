import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const AdoptionForm = () => {
  const [searchParams] = useSearchParams();
  const horseName = searchParams.get('cavalo') || '';
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Formulário enviado!",
      description: "Obrigada pelo interesse em adotar. Vamos entrar em contato para agendar uma visita!"
    });
  };
  if (isSubmitted) {
    return <div className="min-h-screen bg-background font-nunito flex items-center justify-center">
        <Card className="p-8 max-w-md text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🐴</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Formulário Enviado!
            </h2>
            <p className="text-muted-foreground">
              Obrigada pelo interesse em adotar. Vamos entrar em contato para agendar uma visita!
            </p>
          </div>
          <div className="space-y-3">
            <Link to="/cavalos-disponiveis">
              <Button className="w-full" variant="outline">
                Ver Outros Cavalos
              </Button>
            </Link>
            <Link to="/menu">
              <Button className="w-full bg-gradient-earth">
                Voltar ao Menu
              </Button>
            </Link>
          </div>
        </Card>
      </div>;
  }
  return <div className="min-h-screen bg-background font-nunito">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <header className="flex items-center mb-6">
          <Link to="/cavalos-disponiveis">
            <Button variant="outline" size="sm" className="mr-4 focus:ring-4 focus:ring-primary/50 focus:outline-none" aria-label="Voltar para cavalos disponíveis">
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">
            Formulário de Adoção
          </h1>
        </header>

        {horseName && <div className="mb-6 p-4 bg-primary/10 rounded-lg" role="status" aria-live="polite">
            <p className="text-primary font-medium">
              Interesse em adotar: <span className="font-bold">{horseName}</span>
            </p>
          </div>}

        <main>
          <Card className="p-6">
            <p className="text-lg text-foreground mb-6">
              Nos conte um pouco sobre você para continuarmos o processo de adoção
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Formulário de inscrição para adoção de cavalos">
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <legend className="sr-only">Informações pessoais</legend>
              <div>
                <Label htmlFor="nome">Nome completo *</Label>
                <Input id="nome" required aria-describedby="nome-help" aria-invalid="false" />
                <div id="nome-help" className="sr-only">Campo obrigatório para seu nome completo</div>
              </div>
              <div>
                <Label htmlFor="cpf">CPF *</Label>
                <Input id="cpf" required aria-describedby="cpf-help" aria-invalid="false" placeholder="000.000.000-00" />
                <div id="cpf-help" className="sr-only">Campo obrigatório para seu CPF</div>
              </div>
            </fieldset>

            <div>
              <div className="mb-3 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-destructive text-sm font-medium">⚠️ Moradores de Aracaju e região não estão aptos para adotar, pois grande parte dos animais anteriormente adotados por residentes locais acabaram voltando às ruas.</p>
              </div>
              <Label htmlFor="endereco">Endereço completo *</Label>
              <Input id="endereco" required aria-describedby="endereco-help" aria-invalid="false" placeholder="Rua, número, bairro, cidade, CEP" />
              <div id="endereco-help" className="sr-only">Campo obrigatório para seu endereço completo</div>
            </div>

            <div>
              <Label htmlFor="telefone">Telefone *</Label>
              <Input id="telefone" type="tel" required aria-describedby="telefone-help" aria-invalid="false" placeholder="(00) 00000-0000" />
              <div id="telefone-help" className="sr-only">Campo obrigatório para seu telefone de contato</div>
            </div>

            <div>
              <Label htmlFor="experiencia">Tem alguma experiência com cavalos? *</Label>
              <Textarea id="experiencia" placeholder="Descreva sua experiência com cavalos..." required aria-describedby="experiencia-help" aria-invalid="false" rows={4} />
              <div id="experiencia-help" className="sr-only">Campo obrigatório para descrever sua experiência prévia com cavalos</div>
            </div>

            <div>
              <Label htmlFor="local">Condições do local onde o cavalo ficará *</Label>
              <Textarea id="local" placeholder="Descreva o local, tamanho do pasto, abrigo, etc..." required aria-describedby="local-help" aria-invalid="false" rows={4} />
              <div id="local-help" className="sr-only">Campo obrigatório para descrever as condições do local onde o cavalo será mantido</div>
            </div>

            <div>
              <Label htmlFor="motivo">Por que quer adotar? *</Label>
              <Textarea id="motivo" placeholder="Conte-nos o motivo da adoção (trabalho, companhia, recreação, etc.)" required aria-describedby="motivo-help" aria-invalid="false" rows={4} />
              <div id="motivo-help" className="sr-only">Campo obrigatório para explicar sua motivação para adotar um cavalo</div>
            </div>

            <Button type="submit" className="w-full bg-gradient-earth text-lg py-6 focus:ring-4 focus:ring-primary/50 focus:outline-none" aria-describedby="submit-help">
              Enviar Formulário
            </Button>
            <div id="submit-help" className="sr-only">Enviar formulário de adoção para análise</div>
            </form>
          </Card>
        </main>
      </div>
    </div>;
};
export default AdoptionForm;