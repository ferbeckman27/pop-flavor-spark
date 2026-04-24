import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import type { ShopifyProduct } from "@/lib/shopify";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const node = product.node;
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

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
          <p className="text-lg font-bold text-primary">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </p>
        </div>
      </Card>
    </Link>
  );
}