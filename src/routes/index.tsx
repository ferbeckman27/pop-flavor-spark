import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { FlavorHero } from "@/components/FlavorHero";
import { Footer } from "@/components/Footer";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { Loader2, MessageSquare, Handshake, ArrowUpRight, Leaf, Sparkles, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fizz Flavor Hub — Refrigerantes saborizados artesanais" },
      {
        name: "description",
        content:
          "Refrigerantes saborizados Fizz Flavor Hub: abacate, laranja, morango e mais. Sabor único, ingredientes naturais.",
      },
      { property: "og:title", content: "Fizz Flavor Hub — Refrigerantes saborizados" },
      {
        property: "og:description",
        content: "Descubra nossa linha de refrigerantes saborizados artesanais.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(20)
      .then(setProducts)
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <h1 className="sr-only">Fizz Flavor Hub — Refrigerantes saborizados</h1>
        <FlavorHero />

        <section id="sobre" className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Sobre a Fizz
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Sabor brasileiro, do jeito que só a Fizz faz
            </h2>
            <p className="mt-4 text-muted-foreground">
              A Fizz Flavor Hub nasceu da vontade de reinventar o refrigerante
              brasileiro. Trabalhamos com frutas reais, receitas autênticas e
              uma curadoria de sabores que celebra o nosso país em cada gole —
              do clássico limão ao inesperado abacate.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">Nosso propósito</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Transformar o consumo de refrigerante em uma experiência
                refrescante, divertida e cheia de identidade brasileira.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">Diferencial</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ingredientes naturais, frutas reais e combinações ousadas como
                abacate e maracujá. Sem mistério: só sabor de verdade.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">Compromisso</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Transparência com quem consome e parceria com quem distribui —
                qualidade do começo ao fim, em cada lata.
              </p>
            </div>
          </div>
        </section>

        <section id="sabores" className="container mx-auto px-4 pb-16">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Catálogo
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Nossos sabores
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Conheça toda a linha Fizz e veja os preços em reais. Clique em
              um sabor para mais detalhes ou adicione direto ao carrinho.
            </p>
          </div>
          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : products.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground">
              Nenhum produto encontrado.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </section>

        <section className="border-t border-border/40 bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Vamos conversar?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Tire dúvidas, envie sugestões ou se torne um parceiro Fizz.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group rounded-2xl border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Fale Conosco</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Atendimento direto para clientes: dúvidas sobre produtos,
                  pedidos, sugestões ou elogios. Nossa equipe responde em até
                  2 dias úteis.
                </p>
                <Button asChild className="mt-6">
                  <a href="/contato" target="_blank" rel="noreferrer">
                    Abrir formulário
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="group rounded-2xl border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Handshake className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Seja Parceiro</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bares, restaurantes, mercados e distribuidores: cadastre seu
                  negócio e leve a Fizz Flavor Hub para os seus clientes com
                  condições exclusivas.
                </p>
                <Button asChild variant="secondary" className="mt-6">
                  <a href="/parceiros" target="_blank" rel="noreferrer">
                    Quero ser parceiro
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
