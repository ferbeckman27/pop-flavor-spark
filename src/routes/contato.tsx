import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Fale Conosco — Fizz Flavor Hub" },
      {
        name: "description",
        content:
          "Entre em contato com a Fizz Flavor Hub. Tire dúvidas, envie sugestões ou solicite informações sobre nossos refrigerantes.",
      },
      { property: "og:title", content: "Fale Conosco — Fizz Flavor Hub" },
      {
        property: "og:description",
        content: "Canais de atendimento da Fizz Flavor Hub.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Mensagem enviada!", {
        description: "Obrigado pelo contato. Responderemos em breve.",
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Fale Conosco
          </h1>
          <p className="mt-4 text-muted-foreground">
            Estamos prontos para ouvir você. Envie sua mensagem ou utilize um
            dos nossos canais de atendimento.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[2fr_1fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg border bg-card p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" required placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="voce@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Input id="assunto" name="assunto" required placeholder="Como podemos ajudar?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                required
                rows={6}
                placeholder="Escreva sua mensagem..."
              />
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>

          <aside className="space-y-4">
            <div className="rounded-lg border bg-card p-5">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-sm font-semibold">E-mail</h2>
              <a
                href="mailto:contato@fizzflavorhub.com"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                contato@fizzflavorhub.com
              </a>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <Phone className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-sm font-semibold">Telefone</h2>
              <a
                href="tel:+5511999999999"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                (11) 99999-9999
              </a>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="mt-3 text-sm font-semibold">Endereço</h2>
              <p className="text-sm text-muted-foreground">
                Rua das Frutas, 123<br />
                Vila Sabor — São Paulo/SP<br />
                CEP 01234-567
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}