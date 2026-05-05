import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sparkles, ShieldCheck, Wallet, LineChart, Zap, Users, Target,
  Workflow, BarChart3, CheckCircle2, AlertTriangle, TrendingUp,
  Instagram, Music2, Star, ArrowRight, Brain, Lock,
} from "lucide-react";

const TrustBadge = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur">
    <Icon className="w-4 h-4 text-primary" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const KpiRow = ({ label, value, accent }: { label: string; value: string; accent?: string }) => (
  <div className="flex items-center justify-between py-2.5 border-b border-border/60 last:border-0">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className={`text-sm font-bold ${accent ?? ""}`}>{value}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, gradient }: any) => (
  <div className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-smooth shadow-card hover:shadow-elegant">
    <div className={`w-12 h-12 rounded-xl grid place-items-center mb-4 ${gradient}`}>
      <Icon className="w-6 h-6 text-primary-foreground" />
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
  </div>
);

const ProblemCard = ({ icon: Icon, title }: any) => (
  <div className="p-6 rounded-2xl bg-card border border-border flex gap-4 items-start">
    <div className="w-10 h-10 rounded-xl grid place-items-center bg-destructive/15 shrink-0">
      <Icon className="w-5 h-5 text-destructive" />
    </div>
    <p className="font-semibold leading-snug">{title}</p>
  </div>
);

import { useState } from "react";

const Home = () => {
  const [tab, setTab] = useState<"brands" | "creators">("brands");

  const brandSteps = [
    "Create campaign brief",
    "Deposit campaign budget",
    "Get AI-matched verified creators",
    "Approve content and launch",
    "Track purchase-level results",
  ];
  const creatorSteps = [
    "Create verified profile",
    "Connect social accounts",
    "Receive relevant campaign matches",
    "Submit content and post",
    "Get paid securely",
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="blob bg-primary w-[500px] h-[500px] -top-40 -left-40" />
        <div className="blob bg-magenta w-[400px] h-[400px] top-20 right-0" />

        <div className="container relative pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-muted-foreground">AI-Powered Influencer Marketing</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Big Impact.<br />
              <span className="text-gradient">Small Influencers.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-xl">
              AI-powered nano & micro influencer campaigns built for measurable ROI.
            </p>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Set your brief and budget once. Join Influ auto-matches verified creators, manages outreach, escrow, posting, and purchase-level performance feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="xl" variant="hero">
                <Link to="/businesses">Start Campaign <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button asChild size="xl" variant="soft">
                <Link to="/creators">Join as Creator</Link>
              </Button>
            </div>
          </div>

          {/* Hero dashboard preview */}
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-hero opacity-30 blur-3xl rounded-3xl" />
            <div className="relative p-6 rounded-3xl bg-gradient-card border border-border shadow-elegant">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center">
                    <Brain className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-semibold text-sm">Campaign Intelligence</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-success/15 text-success font-medium">Live</span>
              </div>

              <div className="rounded-2xl p-5 bg-background/50 border border-border mb-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">AI Match Score</span>
                  <span className="text-xs text-success font-medium">Excellent</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-gradient">94%</span>
                  <span className="text-sm text-muted-foreground mb-2">brand fit</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-gradient-primary" style={{ width: "94%" }} />
                </div>
              </div>

              <div className="space-y-1">
                <KpiRow label="Creators matched" value="128" />
                <KpiRow label="Fraud risk" value="Low" accent="text-success" />
                <KpiRow label="Estimated ROI" value="3.2x" accent="text-cyan-soft" />
                <KpiRow label="Budget reserved (escrow)" value="€4,000" accent="text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="container pb-16">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <TrustBadge icon={Brain} label="AI Matching" />
            <TrustBadge icon={ShieldCheck} label="Verified Audience" />
            <TrustBadge icon={Lock} label="Escrow Payments" />
            <TrustBadge icon={LineChart} label="Real-time ROI" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container py-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Influencer campaigns are powerful,<br />
            but <span className="text-gradient">manual execution kills ROI.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProblemCard icon={TrendingUp} title="High cost, low ROI from big influencers" />
          <ProblemCard icon={BarChart3} title="Hard to measure ROI and ROAS" />
          <ProblemCard icon={Users} title="Slow creator selection and vetting" />
          <ProblemCard icon={AlertTriangle} title="Fraud and compliance risks" />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="container py-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            One platform to <span className="text-gradient">match, manage, pay, verify, and measure.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon={Brain} title="AI Creator Matching" desc="Find the highest-fit nano & micro creators in seconds with explainable AI." gradient="bg-gradient-primary" />
          <FeatureCard icon={ShieldCheck} title="Fraud Protection" desc="Detect fake followers, bots, and engagement manipulation before you pay." gradient="bg-gradient-cool" />
          <FeatureCard icon={Lock} title="Escrow Payments" desc="Funds locked safely, released only when posts are verified live." gradient="bg-gradient-hero" />
          <FeatureCard icon={Target} title="Campaign Builder" desc="Brief, budget, audience, deliverables — all in one guided flow." gradient="bg-gradient-primary" />
          <FeatureCard icon={Workflow} title="Workflow Manager" desc="Outreach, approval, posting, deadlines, all tracked automatically." gradient="bg-gradient-cool" />
          <FeatureCard icon={LineChart} title="ROI Dashboard" desc="Purchase-level attribution, real-time ROAS and creator-level performance." gradient="bg-gradient-hero" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">How it works</h2>
          <div className="inline-flex p-1 rounded-2xl bg-card border border-border">
            <button
              onClick={() => setTab("brands")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-smooth ${
                tab === "brands" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
            >
              For Brands
            </button>
            <button
              onClick={() => setTab("creators")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-smooth ${
                tab === "creators" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
            >
              For Creators
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {(tab === "brands" ? brandSteps : creatorSteps).map((step, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-gradient-card border border-border">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-bold mb-3 shadow-glow">
                {i + 1}
              </div>
              <p className="font-semibold leading-snug">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI MATCHING PREVIEW */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">Explainable AI matching</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Never trust a number you can't explain. Every match comes with the reasons behind it.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Creator card */}
          <div className="p-6 rounded-3xl bg-gradient-card border border-border shadow-card">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero grid place-items-center text-2xl font-bold shadow-glow-pink">M</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">@maria.skin</h3>
                  <ShieldCheck className="w-4 h-4 text-success" />
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-card border border-border"><Instagram className="w-3 h-3" /> Instagram</span>
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-card border border-border"><Music2 className="w-3 h-3" /> TikTok</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Match</div>
                <div className="text-2xl font-extrabold text-gradient">94%</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="p-3 rounded-xl bg-background/50 border border-border">
                <div className="text-xs text-muted-foreground">Followers</div>
                <div className="font-bold">8.7K</div>
              </div>
              <div className="p-3 rounded-xl bg-background/50 border border-border">
                <div className="text-xs text-muted-foreground">Engagement</div>
                <div className="font-bold text-success">7.8%</div>
              </div>
              <div className="p-3 rounded-xl bg-background/50 border border-border">
                <div className="text-xs text-muted-foreground">Est. fee</div>
                <div className="font-bold">€120–180</div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-success/15 text-success font-medium">
                <ShieldCheck className="w-3 h-3" /> Fraud Risk: Low
              </span>
              <div className="flex items-center gap-0.5 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-current" />))}
              </div>
            </div>

            <Button variant="hero" className="w-full">Invite Creator</Button>
          </div>

          {/* AI explanation */}
          <div className="p-6 rounded-3xl bg-gradient-card border border-border shadow-card">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center"><Brain className="w-5 h-5" /></div>
              <h3 className="font-bold text-lg">Why this match</h3>
            </div>

            {[
              { label: "Brand fit", value: 94, color: "bg-gradient-primary" },
              { label: "Audience match", value: 89, color: "bg-gradient-cool" },
              { label: "Engagement quality", value: 91, color: "bg-gradient-hero" },
            ].map((m) => (
              <div key={m.label} className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground">{m.label}</span>
                  <span className="font-bold">{m.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className={`h-full ${m.color}`} style={{ width: `${m.value}%` }} />
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-border">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Fraud risk</div>
                <div className="font-bold text-success flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Low</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Predicted clicks</div>
                <div className="font-bold">420–580</div>
              </div>
              <div className="col-span-2">
                <div className="text-xs text-muted-foreground mb-1">Suggested deliverable</div>
                <div className="font-bold">1 Reel + 2 Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: BarChart3, title: "Transparent Performance", desc: "See every click, conversion and creator contribution in real time." },
            { icon: Lock, title: "Safe Payments", desc: "Escrow holds funds until verified posts are live. No surprises." },
            { icon: Zap, title: "SME-friendly ROI", desc: "Built for small budgets that demand real, measurable results." },
          ].map((v) => (
            <div key={v.title} className="p-8 rounded-3xl bg-gradient-card border border-border text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-primary grid place-items-center mb-4 shadow-glow">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-2">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-radial opacity-80" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 max-w-3xl mx-auto">
              Launch your first measurable <span className="text-gradient">nano & micro</span> influencer campaign.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Join brands and creators already running smarter campaigns on Join Influ.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="xl" variant="hero"><Link to="/businesses">Start Campaign</Link></Button>
              <Button size="xl" variant="soft">Book Demo</Button>
              <Button asChild size="xl" variant="outline"><Link to="/creators">Join as Creator</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
