import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Fizz Flavor Hub" },
      {
        name: "description",
        content:
          "Conheça a história da Fizz Flavor Hub, marca de refrigerantes saborizados artesanais com ingredientes naturais.",
      },
      { property: "og:title", content: "Sobre — Fizz Flavor Hub" },
      {
        property: "og:description",
        content: "A história e os valores por trás dos refrigerantes Fizz Flavor Hub.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Sabor que faz diferença
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A Fizz Flavor Hub nasceu da paixão por sabores brasileiros. Criamos
            refrigerantes artesanais com frutas reais, sem corantes artificiais
            e com muito carinho em cada lata.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <Leaf className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Ingredientes naturais</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Trabalhamos com produtores locais para garantir frutas frescas em
              todas as receitas.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Receitas exclusivas</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sabores como abacate, maracujá e uva desenvolvidos para destacar o
              melhor de cada fruta.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <HeartHandshake className="h-8 w-8 text-primary" />
            <h2 className="mt-4 text-lg font-semibold">Compromisso com você</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Qualidade, transparência e atendimento próximo em cada etapa da
              jornada.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl rounded-2xl bg-secondary/40 p-8 text-center">
          <h2 className="text-2xl font-bold">Nossa missão</h2>
          <p className="mt-3 text-muted-foreground">
            Reinventar o refrigerante brasileiro, levando sabores autênticos
            para mesas do Brasil inteiro com responsabilidade ambiental e
            social.
          </p>
          <Button asChild className="mt-6">
            <Link to="/">Conheça nossos sabores</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}