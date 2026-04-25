import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
      <main className="container mx-auto px-4 py-16">
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Nossa marca
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Fizz Flavor Hub
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A Fizz Flavor Hub nasceu para reinventar o refrigerante brasileiro.
            Trabalhamos com frutas reais e receitas autênticas para entregar
            sabores que celebram o Brasil em cada gole.
          </p>
        </section>

        <section className="mx-auto mt-12 max-w-3xl rounded-2xl bg-secondary/40 p-8 md:p-10">
          <h2 className="text-2xl font-bold">Nosso propósito</h2>
          <p className="mt-4 text-muted-foreground">
            Acreditamos que uma bebida pode ser uma experiência. Por isso,
            criamos refrigerantes saborizados com personalidade — feitos para
            quem busca algo diferente, natural e cheio de identidade.
            Nosso propósito é oferecer momentos de prazer com qualidade,
            transparência e respeito por quem consome.
          </p>
          <p className="mt-4 text-muted-foreground">
            Cada lata Fizz é um convite a redescobrir o sabor das frutas
            brasileiras de um jeito único: refrescante, marcante e inesquecível.
          </p>
          <Button asChild className="mt-8">
            <Link to="/">Conheça nossos sabores</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}