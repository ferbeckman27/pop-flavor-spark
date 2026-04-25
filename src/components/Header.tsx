import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, User } from "lucide-react";

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Fizz Flavor Hub</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Sobre
          </Link>
          <Link
            to="/parceiros"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Seja Parceiro
          </Link>
          <Link
            to="/contato"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground font-semibold" }}
          >
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="hidden text-xs text-muted-foreground sm:inline-flex sm:items-center sm:gap-1">
                <User className="h-3.5 w-3.5" />
                {user.email}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={signOut}
                aria-label="Sair"
                title="Sair"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Button asChild variant="outline" size="sm">
              <Link to="/auth">Entrar</Link>
            </Button>
          )}
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}