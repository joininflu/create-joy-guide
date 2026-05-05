import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/creators", label: "Creators" },
  { to: "/businesses", label: "Businesses" },
];

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </span>
          <span>Join <span className="text-gradient">Influ</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive
                    ? "text-foreground bg-card"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {pathname !== "/businesses" && (
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <Link to="/businesses">Start Campaign</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
