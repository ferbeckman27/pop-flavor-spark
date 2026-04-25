import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Store, Truck, BadgePercent } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Seja Parceiro — Fizz Flavor Hub" },
      {
        name: "description",
        content:
          "Torne-se revendedor ou distribuidor dos refrigerantes Fizz Flavor Hub. Vantagens exclusivas para parceiros comerciais.",
      },
      { property: "og:title", content: "Seja Parceiro — Fizz Flavor Hub" },
      {
        property: "og:description",
        content: "Programa de parceria comercial Fizz Flavor Hub.",
      },
    ],
  }),
  component: ParceirosPage,
});

function ParceirosPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Cadastro recebido!", {
        description: "Nossa equipe comercial entrará em contato em breve.",
      });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Seja parceiro Fizz
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Leve nossos refrigerantes saborizados para o seu estabelecimento.
            Bares, restaurantes, mercados e distribuidores: temos um plano
            ideal para você.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <Store className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Revenda</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Pedidos a partir de 5 caixas com preços diferenciados e suporte
              comercial dedicado.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Truck className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Distribuição</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Atendemos todo o Brasil com logística parceira e prazos
              competitivos para grandes volumes.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <BadgePercent className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Vantagens</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Material promocional, treinamento de equipe e ações de marketing
              cooperado para parceiros ativos.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl border bg-card p-8">
          <h2 className="text-2xl font-bold">Cadastre seu interesse</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preencha o formulário e nossa equipe comercial entrará em contato.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa</Label>
                <Input id="empresa" name="empresa" required placeholder="Razão social" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input id="cnpj" name="cnpj" required placeholder="00.000.000/0000-00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="responsavel">Responsável</Label>
                <Input id="responsavel" name="responsavel" required placeholder="Nome completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" name="telefone" required placeholder="(11) 99999-9999" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" required placeholder="comercial@empresa.com" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="cidade">Cidade / Estado</Label>
                <Input id="cidade" name="cidade" required placeholder="São Paulo / SP" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem">Conte sobre seu negócio</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                placeholder="Tipo de estabelecimento, volume estimado, região de atuação..."
              />
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Enviando..." : "Quero ser parceiro"}
            </Button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}