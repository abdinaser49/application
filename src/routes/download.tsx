import { createFileRoute } from "@tanstack/react-router";
import { Download, CheckCircle2 } from "lucide-react";
import { app } from "@/config/app";

export const Route = createFileRoute("/download")({
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-5">
      <div className="w-full max-w-md rounded-3xl bg-card p-8 shadow-soft animate-rise text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        
        <h1 className="font-display text-2xl font-bold">Payment Successful!</h1>
        <p className="text-muted-foreground mt-2">Your subscription is now active.</p>

        <div className="mt-8">
          <a
            href={app.apkUrl}
            download={app.apkFileName}
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <Download className="h-5 w-5" /> Download APK
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Install the app on your Android device and login with your new account.
          </p>
        </div>
      </div>
    </main>
  );
}
