import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { fetchProductByHandle, type ShopifyProductNode } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ArrowLeft, Loader2, Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.handle} — Fizz Flavor Hub` },
      { name: "description", content: `Detalhes do refrigerante ${params.handle} Fizz Flavor Hub.` },
    ],
  }),
  component: ProductPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div>
          <p className="text-destructive">Erro: {error.message}</p>
          <Button
            className="mt-4"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Tentar novamente
          </Button>
        </div>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center p-4 text-center">
      <div>
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Voltar para a loja
        </Link>
      </div>
    </div>
  ),
});

function ProductPage() {
  const { handle } = Route.useParams();
  const [product, setProduct] = useState<ShopifyProductNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    setLoading(true);
    fetchProductByHandle(handle)
      .then(setProduct)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center py-24">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto p-8 text-center">
          <h1 className="text-2xl font-bold">Produto não encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-primary underline">
            Voltar para a loja
          </Link>
        </div>
      </div>
    );
  }

  const variant = product.variants.edges[0]?.node;
  const images = product.images.edges;
  const mainImage = images[activeImage]?.node ?? images[0]?.node;
  const price = variant?.price ?? product.priceRange.minVariantPrice;

  const handleAddToCart = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions ?? [],
    });
    toast.success("Adicionado ao carrinho", {
      description: `${quantity} x ${product.title}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/40">
              {mainImage && (
                <img
                  src={mainImage.url}
                  alt={mainImage.altText ?? product.title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={img.node.url}
                    onClick={() => setActiveImage(idx)}
                    className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-colors ${
                      idx === activeImage ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img.node.url}
                      alt={img.node.altText ?? product.title}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{product.title}</h1>
              <p className="mt-2 text-3xl font-bold text-primary">
                {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
              </p>
            </div>

            {product.description && (
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>{product.description}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium">Quantidade</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
              disabled={isLoading || !variant?.availableForSale}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {variant?.availableForSale ? "Adicionar ao carrinho" : "Indisponível"}
                </>
              )}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}