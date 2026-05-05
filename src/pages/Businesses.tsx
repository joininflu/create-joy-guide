import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Building2, Target, Users, LineChart, ArrowRight, ArrowLeft, Sparkles,
} from "lucide-react";

const steps = [
  { icon: Building2, title: "Define your business", desc: "Tell us about your brand and audience." },
  { icon: Target, title: "Set budget & criteria", desc: "Budget, goals, deliverables, timeline." },
  { icon: Users, title: "Review matched creators", desc: "See AI-matched influencers and the campaign flow." },
  { icon: LineChart, title: "Track ROI online", desc: "Real-time ROAS and creator-level performance." },
];

const Businesses = () => {
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  if (showForm) {
    return (
      <Layout>
        <section className="container py-16 max-w-2xl">
          <button onClick={() => setShowForm(false)} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-card border border-border shadow-card">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Start your campaign</h1>
            <p className="text-muted-foreground mb-8">A few details and we'll set up your account and brief workspace.</p>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                toast({ title: "Welcome aboard!", description: "We'll be in touch shortly to set up your campaign." });
                setShowForm(false);
              }}
            >
              <div>
                <Label className="mb-1.5 block">Business name</Label>
                <Input required placeholder="Acme Skincare" />
              </div>
              <div>
                <Label className="mb-1.5 block">Business Link</Label>
                <Input required placeholder="https://acme.com" />
              </div>
              <div>
                <Label className="mb-1.5 block">Email address</Label>
                <Input required type="email" placeholder="founder@acme.com" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Create account <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="blob bg-cyber w-[450px] h-[450px] -top-20 -left-20" />
        <div className="container relative py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border mb-6">
              <Sparkles className="w-4 h-4 text-cyan-soft" />
              <span className="text-xs font-medium">For Businesses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
              Grow your business by connecting to the <span className="text-gradient">best choice influencer.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-3">
              We help you grow by finding influencers that match your brand at an affordable cost.
            </p>
            <p className="text-muted-foreground mb-8">
              Join Influ to find influencers matched for your business and to run a campaign effortlessly with more ROI.
            </p>
            <Button onClick={() => setShowForm(true)} variant="hero" size="xl">
              Start your campaign <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-cool opacity-25 blur-3xl rounded-3xl" />
            <div className="relative p-6 rounded-3xl bg-gradient-card border border-border shadow-elegant">
              <h3 className="font-bold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-soft animate-pulse-glow" />
                Your campaign workflow
              </h3>
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-background/40 border border-border">
                    <div className="w-9 h-9 rounded-xl bg-gradient-cool grid place-items-center shrink-0">
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-muted-foreground">Step {i + 1}</span>
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-sm text-muted-foreground">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Businesses;
