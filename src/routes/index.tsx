import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { properties } from "@/lib/properties";
import { PropertyCard } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "دار السكن العقارية | شقق وفلل للبيع والإيجار في مصر" },
      { name: "description", content: "اكتشف أفضل الشقق والفلل والشاليهات للبيع والإيجار في القاهرة الجديدة والشيخ زايد والساحل." },
      { property: "og:title", content: "دار السكن العقارية" },
      { property: "og:description", content: "شقق وفلل وشاليهات للبيع والإيجار في مصر." },
    ],
  }),
  component: Index,
});

const stats = [["+1200", "عميل سعيد"], ["+350", "وحدة متاحة"], ["15", "سنة خبرة"], ["12", "منطقة"]];
const cats = ["شقة", "فيلا", "تاون هاوس", "شاليه"] as const;

function Index() {
  return (
    <>
      <section className="relative flex min-h-[80vh] items-center">
        <img src={hero} alt="فيلا فاخرة" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-6xl px-4 text-primary-foreground">
          <p className="text-gold font-bold">بيت أحلامك يبدأ من هنا</p>
          <h1 className="mt-3 max-w-2xl text-5xl leading-tight md:text-7xl">عقارات مختارة بعناية لحياة أفضل</h1>
          <p className="mt-5 max-w-lg text-lg opacity-90">بيع، شراء، وإيجار شقق وفلل وشاليهات في أرقى مناطق مصر.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/properties" className="rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground transition hover:opacity-90">تصفح العقارات</Link>
            <Link to="/contact" className="rounded-full border border-primary-foreground/60 px-7 py-3 font-bold transition hover:bg-primary-foreground/10">اطلب استشارة</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-12 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl bg-border shadow-card relative md:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l} className="bg-card p-6 text-center">
            <p className="font-display text-3xl text-primary">{n}</p>
            <p className="text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20">
        <h2 className="text-3xl text-primary">تصفح حسب النوع</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {cats.map((c) => (
            <Link key={c} to="/properties" search={{ type: c }} className="rounded-xl border bg-card p-6 text-center font-bold transition hover:border-accent hover:text-primary">
              {c}
              <span className="block text-xs font-normal text-muted-foreground">{properties.filter((p) => p.type === c).length} وحدة</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-20">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl text-primary">عقارات مميزة</h2>
          <Link to="/properties" className="text-sm font-bold text-accent">عرض الكل ←</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 3).map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
        <h2 className="text-3xl">عاوز تبيع أو تأجر عقارك؟</h2>
        <p className="mt-3 opacity-80">فريقنا هيقيّم عقارك مجانًا ويوصله لآلاف المشترين.</p>
        <Link to="/contact" className="mt-6 inline-block rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground">تواصل معنا</Link>
      </section>
    </>
  );
}
