import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { app } from "@/config/app";

export const Route = createFileRoute("/payment")({
  component: Payment,
});

function Payment() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("0614498649");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleWaafiPay = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Fadlan eeg taleefankaga... Geli lambarka sirta ah (PIN).");

    // TODO: Replace with real WaafiPay API call from your backend.
    // Example payload:
    // const payload = {
    //   schemaVersion: "1.0",
    //   requestId: Date.now().toString(),
    //   timestamp: new Date().toISOString(),
    //   channelName: "WEB",
    //   serviceName: "API_PURCHASE",
    //   serviceParams: {
    //     merchantUid: "YOUR_MERCHANT_UID",
    //     apiUserId: "YOUR_API_USER_ID",
    //     apiKey: "YOUR_API_KEY",
    //     paymentMethod: "mwallet_account",
    //     payerInfo: { accountNo: phone },
    //     transactionInfo: {
    //       referenceId: Date.now().toString(),
    //       invoiceId: "INV-" + Date.now().toString(),
    //       amount: "4.0",
    //       currency: "USD",
    //       description: "Hubaal Sales App Subscription"
    //     }
    //   }
    // };

    // Simulating the USSD prompt delay
    setTimeout(() => {
      setMessage("Lacag bixintu way guulaysatay! (Payment Successful)");
      setTimeout(() => {
        navigate({ to: "/download" });
      }, 1000);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-5">
      <div className="w-full max-w-md rounded-3xl bg-card p-8 shadow-soft animate-rise text-center">
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold">Subscription Payment</h1>
          <p className="text-muted-foreground mt-2">Activate your account to download the APK.</p>
        </div>

        <div className="rounded-2xl bg-primary/5 p-6 mb-8 border border-primary/10">
          <p className="font-display text-4xl font-bold text-primary">{app.price}<span className="text-xl font-medium opacity-80 text-foreground"> / month</span></p>
          <p className="mt-2 text-sm text-muted-foreground">{app.priceNote}</p>
        </div>

        <form onSubmit={handleWaafiPay} className="space-y-6 text-left">
          <div className="space-y-3">
            <Label htmlFor="phone">WaafiPay Number (EvcPlus / Zaad / Sahal)</Label>
            <Input 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="061XXXXXXX" 
              className="text-lg py-6 rounded-2xl"
              required 
              disabled={loading}
            />
          </div>

          {message && (
            <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-600 text-center animate-pulse">
              {message}
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full rounded-2xl py-6 text-lg font-semibold shadow-soft"
            disabled={loading}
          >
            {loading ? "Waa la dirayaa..." : "Pay with WaafiPay"}
          </Button>
        </form>
      </div>
    </main>
  );
}
