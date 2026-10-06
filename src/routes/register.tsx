import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { app } from "@/config/app";

export const Route = createFileRoute("/register")({
  component: Register,
});

function Register() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-5">
      <div className="w-full max-w-md rounded-3xl bg-card p-8 shadow-soft animate-rise">
        <div className="text-center mb-8">
          <img src={app.logo} alt={`${app.name} logo`} width={64} height={64} className="mx-auto h-16 w-16 rounded-2xl shadow-sm mb-4" />
          <h1 className="font-display text-2xl font-bold">Create Account</h1>
          <p className="text-muted-foreground mt-2">Sign up to get the Hubaal Sales APK</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); /* TODO: Implement */ }}>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          
          <Link to="/payment" className="block mt-6">
            <Button className="w-full rounded-2xl py-6 text-lg font-semibold shadow-soft">
              Continue to Payment
            </Button>
          </Link>
        </form>
      </div>
    </main>
  );
}
