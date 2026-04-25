import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import type { ShopifyProduct } from "@/lib/shopify";

const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const node = product.node;
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const amount = parseFloat(price.amount);
  const display =
    price.currencyCode === "BRL"
      ? brlFormatter.format(amount)
      : `${price.currencyCode} ${amount.toFixed(2)}`;

  return (
    <Link
      to="/product/$handle"
      params={{ handle: node.handle }}
      className="group block"
    >
      <Card className="overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-square overflow-hidden bg-secondary/40">
          {image && (
            <img
              src={image.url}
              alt={image.altText ?? node.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </div>
        <div className="p-4 space-y-1">
          <h3 className="font-semibold leading-tight">{node.title}</h3>
          <p className="text-lg font-bold text-primary">{display}</p>
        </div>
      </Card>
    </Link>
  );
}