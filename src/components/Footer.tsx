import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-extrabold text-xl mb-3">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </span>
            Join <span className="text-gradient">Influ</span>
          </div>
          <p className="text-muted-foreground max-w-md">
            AI-powered nano & micro influencer campaigns built for measurable ROI.
          </p>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-3">Product</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/businesses" className="hover:text-foreground transition-smooth">For Brands</Link></li>
            <li><Link to="/creators" className="hover:text-foreground transition-smooth">For Creators</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} Join Influ. All rights reserved.</span>
          <span className="px-3 py-1 rounded-full bg-card border border-border">Version v0 — MVP</span>
        </div>
      </div>
    </footer>
  );
};
