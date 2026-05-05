import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  UserPlus, Briefcase, FileImage, CheckCircle2, Wallet,
  ArrowRight, Sparkles, ArrowLeft,
} from "lucide-react";

type CreatorType = "nano" | "micro" | null;

const steps = [
  { icon: UserPlus, title: "Register", desc: "Define your interests and niche." },
  { icon: Briefcase, title: "Get Matched", desc: "See SMEs with proposed costs." },
  { icon: FileImage, title: "Create Posts", desc: "Use brief and design hints." },
  { icon: CheckCircle2, title: "Publish", desc: "Declare posts as published." },
  { icon: Wallet, title: "Get Paid", desc: "Released from escrow safely." },
];

const Creators = () => {
  const [type, setType] = useState<CreatorType>(null);
  const { toast } = useToast();

  if (type) {
    return (
      <Layout>
        <section className="container py-16 max-w-2xl">
          <button onClick={() => setType(null)} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-card border border-border shadow-card">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-4 uppercase tracking-wider">
              {type} Creator
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Join as a {type} creator</h1>
            <p className="text-muted-foreground mb-8">Tell us a bit about you. We'll verify your account and start matching you with relevant SMEs.</p>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                toast({ title: "Application received!", description: "We'll review your profile and reach out within 24h." });
                setType(null);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-1.5 block">Legal Name</Label>
                  <Input required placeholder="Jane Doe" />
                </div>
                <div>
                  <Label className="mb-1.5 block">Display Name</Label>
                  <Input required placeholder="@jane.creates" />
                </div>
              </div>
              <div>
                <Label className="mb-1.5 block">Email Address</Label>
                <Input required type="email" placeholder="jane@email.com" />
              </div>
              <div>
                <Label className="mb-1.5 block">Page Link</Label>
                <Input required placeholder="https://instagram.com/jane.creates" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Submit application <ArrowRight className="w-4 h-4" />
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
        <div className="blob bg-magenta w-[450px] h-[450px] -top-20 right-0" />
        <div className="container relative py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border mb-6">
              <Sparkles className="w-4 h-4 text-pink" />
              <span className="text-xs font-medium">For Creators</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
              You can use your social skills to help the <span className="text-gradient">right SMEs.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-3">
              We help you to use your social pages as a source of new income by connecting you to the right businesses.
            </p>
            <p className="text-muted-foreground mb-8">
              Join Influ as a creator and trust in our tools for finding the best SME matched for your page. You also get insightful analytics and smart tips to grow your network.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={() => setType("nano")} variant="hero" size="xl">Start as nano creator</Button>
              <Button onClick={() => setType("micro")} variant="glow" size="xl">Start as micro creator</Button>
            </div>
          </div>

          {/* Workflow card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero opacity-25 blur-3xl rounded-3xl" />
            <div className="relative p-6 rounded-3xl bg-gradient-card border border-border shadow-elegant">
              <h3 className="font-bold mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse-glow" />
                Your creator journey
              </h3>
              <ol className="space-y-3">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3 p-3 rounded-xl bg-background/40 border border-border">
                    <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Step {i + 1}</span>
                      </div>
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

export default Creators;
