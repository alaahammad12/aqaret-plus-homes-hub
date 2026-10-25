import { Link } from "@tanstack/react-router";
import { formatPrice, type Property } from "@/lib/properties";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/properties", label: "العقارات" },
  { to: "/services", label: "خدماتنا" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="font-display text-2xl text-primary">دار السكن <span className="text-accent">العقارية</span></Link>
        <nav className="flex flex-wrap gap-4 text-sm font-medium md:gap-7">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="text-muted-foreground transition hover:text-primary" activeProps={{ className: "text-primary font-bold" }}>{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">دار السكن العقارية</p>
          <p className="mt-3 text-sm opacity-80">شريكك الموثوق في بيع وشراء وإيجار العقارات في مصر.</p>
        </div>
        <div className="text-sm opacity-90 space-y-2">
          <p className="font-bold">روابط</p>
          {nav.map((n) => <Link key={n.to} to={n.to} className="block hover:text-gold">{n.label}</Link>)}
        </div>
        <div className="text-sm opacity-90 space-y-2">
          <p className="font-bold">تواصل</p>
          <p>التجمع الخامس، القاهرة الجديدة</p>
          <p dir="ltr" className="text-right">+20 1061378290</p>
          <p>info@daralsakan.com</p>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-70">© 2026 دار السكن العقارية. جميع الحقوق محفوظة.</p>
    </footer>
  );
}

export function PropertyCard({ p }: { p: Property }) {
  return (
    <Link to="/properties/$id" params={{ id: p.id }} className="group overflow-hidden rounded-xl bg-card shadow-card transition hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{p.purpose}</span>
      </div>
      <div className="p-5">
        <p className="text-xs text-muted-foreground">{p.type} · {p.location}</p>
        <h3 className="mt-1 text-lg text-foreground">{p.title}</h3>
        <p className="mt-3 font-bold text-primary">{formatPrice(p)}</p>
        <div className="mt-4 flex gap-4 border-t pt-3 text-xs text-muted-foreground">
          <span>{p.area} م²</span><span>{p.beds} غرف</span><span>{p.baths} حمام</span>
        </div>
      </div>
    </Link>
  );
}

export function PageTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-secondary py-16 text-center">
      <h1 className="text-4xl text-primary md:text-5xl">{title}</h1>
      {sub && <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{sub}</p>}
    </section>
  );
}
