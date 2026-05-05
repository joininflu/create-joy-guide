import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/businesses", label: "For Brands" },
  { to: "/creators", label: "For Creators" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-xl" onClick={() => setOpen(false)}>
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
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive ? "text-foreground bg-card" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-card transition-smooth"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col gap-2">
            <NavLink
              to="/creators"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  isActive ? "text-foreground bg-card" : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`
              }
            >
              For Creators
            </NavLink>
            <NavLink
              to="/businesses"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  isActive ? "text-foreground bg-card" : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`
              }
            >
              For Businesses
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};
