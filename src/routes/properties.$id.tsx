import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { formatPrice, properties } from "@/lib/properties";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const p = properties.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} - ${loaderData.location} | دار السكن` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "العقار غير موجود" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <p className="py-32 text-center">العقار غير موجود. <Link to="/properties" className="text-accent">رجوع للعقارات</Link></p>,
  component: Detail,
});

function Detail() {
  const p = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/properties" className="text-sm text-muted-foreground">→ رجوع للعقارات</Link>
      <img src={p.image} alt={p.title} width={1024} height={768} className="mt-4 aspect-[16/8] w-full rounded-2xl object-cover" />
      <div className="mt-8 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-sm text-muted-foreground">{p.type} · {p.location} · {p.purpose}</p>
          <h1 className="mt-2 text-4xl text-primary">{p.title}</h1>
          <p className="mt-5 leading-8">{p.description}</p>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[["المساحة", `${p.area} م²`], ["الغرف", p.beds], ["الحمامات", p.baths]].map(([l, v]) => (
              <div key={l} className="rounded-xl bg-secondary p-4"><p className="text-xs text-muted-foreground">{l}</p><p className="font-bold text-primary">{v}</p></div>
            ))}
          </div>
          <h2 className="mt-10 text-2xl text-primary">المميزات</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {p.features.map((f) => <li key={f} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" />{f}</li>)}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl bg-card p-6 shadow-card">
          <p className="text-sm text-muted-foreground">السعر</p>
          <p className="mt-1 font-display text-2xl text-primary">{formatPrice(p)}</p>
          <Link to="/contact" search={{ property: p.title }} className="mt-6 block rounded-full bg-primary py-3 text-center font-bold text-primary-foreground">احجز معاينة</Link>
          <a href="https://wa.me/201000000000" className="mt-3 block rounded-full border py-3 text-center font-bold">واتساب</a>
        </aside>
      </div>
    </div>
  );
}
