import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Package, Boxes, TrendingUp, History, BarChart3, Mail } from "lucide-react";
import { app } from "@/config/app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${app.name} — Download the Android App` },
      { name: "description", content: app.description },
      { property: "og:title", content: `${app.name} — Android App` },
      { property: "og:description", content: app.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const icons = [Package, Boxes, TrendingUp, History, BarChart3];

function DownloadButton() {
  return (
    <Link
      to="/register"
      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90"
    >
      <Download className="h-5 w-5" /> Download APK
    </Link>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-3xl px-5 pt-16 pb-12 text-center animate-rise">
        <img src={app.logo} alt={`${app.name} logo`} width={96} height={96} className="mx-auto h-24 w-24 rounded-3xl shadow-soft" />
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">{app.name}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">{app.description}</p>
        <div className="mt-8"><DownloadButton /></div>
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
          {[["Version", app.version], ["Platform", app.platform], ["File", app.fileType]].map(([k, v]) => (
            <span key={k} className="rounded-full bg-secondary px-4 py-1.5 text-secondary-foreground">
              <span className="text-muted-foreground">{k}:</span> <b>{v}</b>
            </span>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto flex max-w-5xl snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:justify-center">
          {app.screenshots.map((s, i) => (
            <div key={i} className="shrink-0 snap-center rounded-[2.2rem] bg-foreground p-2 shadow-soft">
              <img src={s} alt={`${app.name} screenshot ${i + 1}`} width={576} height={1152} loading={i ? "lazy" : undefined} className="h-[460px] w-[230px] rounded-[1.8rem] object-cover" />
            </div>
          ))}
        </div>
      </section>



      <section className="mx-auto max-w-md px-5 pb-16 text-center">
        <h2 className="font-display text-xl font-semibold">See it in action</h2>
        <div className="mt-5 rounded-[2.2rem] bg-foreground p-2 shadow-soft">
          <video src={app.demoVideo} controls playsInline preload="metadata" className="w-full rounded-[1.8rem]" />
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-6 px-5 pb-16 md:grid-cols-2">
        <div className="rounded-3xl bg-card p-8 shadow-soft">
          <h2 className="font-display text-xl font-semibold">Features</h2>
          <ul className="mt-5 space-y-3">
            {app.features.map((f, i) => {
              const Icon = icons[i % icons.length] ?? Package;
              return (
                <li key={f} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-primary"><Icon className="h-4 w-4" /></span>
                  {f}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground shadow-soft">
          <div>
            <h2 className="font-display text-xl font-semibold">Pricing</h2>
            <p className="mt-4 font-display text-5xl font-bold">{app.price}<span className="text-xl font-medium opacity-80"> / month</span></p>
            <p className="mt-3 opacity-85">{app.priceNote}</p>
          </div>
          <Link to="/register" className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-foreground px-6 py-3 font-semibold text-primary transition hover:opacity-90">
            <Download className="h-4 w-4" /> Download APK
          </Link>
        </div>
      </section>

      <footer className="border-t px-5 py-12 text-center">
        <p className="font-display text-lg font-semibold">Need help? Contact Support</p>
        <a href={`mailto:${app.supportEmail}`} className="mt-4 inline-flex items-center gap-2 rounded-2xl border bg-card px-6 py-3 font-medium shadow-soft transition hover:-translate-y-0.5">
          <Mail className="h-4 w-4" /> Contact Support
        </a>
        <p className="mt-8 text-sm text-muted-foreground">© {new Date().getFullYear()} {app.name}</p>
      </footer>
    </main>
  );
}
