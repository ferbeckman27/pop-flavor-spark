import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { FlavorHero } from "@/components/FlavorHero";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

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

        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">Nossos sabores</h2>
          {loading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : products.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground">No products found</div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
