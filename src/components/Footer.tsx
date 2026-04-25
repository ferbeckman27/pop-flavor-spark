import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-secondary/40">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-bold tracking-tight">Fizz Flavor Hub</h3>
          <p className="text-sm text-muted-foreground">
            Refrigerantes saborizados artesanais com ingredientes naturais e
            sabor inconfundível.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-background p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-foreground">Sobre nós</Link></li>
            <li><Link to="/parceiros" className="hover:text-foreground">Seja parceiro</Link></li>
            <li><Link to="/contato" className="hover:text-foreground">Fale conosco</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href="mailto:contato@fizzflavorhub.com" className="hover:text-foreground">
                contato@fizzflavorhub.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <a href="tel:+5511999999999" className="hover:text-foreground">
                (11) 99999-9999
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Endereço</h4>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>
              Rua das Frutas, 123<br />
              Vila Sabor — São Paulo/SP<br />
              CEP 01234-567
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Fizz Flavor Hub. Todos os direitos reservados.</p>
          <p>Bebida não alcoólica. Aprecie com responsabilidade.</p>
        </div>
      </div>
    </footer>
  );
}