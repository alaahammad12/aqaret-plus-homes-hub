import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { properties } from "@/lib/properties";
import { PageTitle, PropertyCard } from "@/components/site";

type Search = { type?: string | undefined; purpose?: string | undefined; location?: string | undefined };

export const Route = createFileRoute("/properties/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    type: typeof s["type"] === "string" ? s["type"] : undefined,
    purpose: typeof s["purpose"] === "string" ? s["purpose"] : undefined,
    location: typeof s["location"] === "string" ? s["location"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "كل العقارات | دار السكن العقارية" },
      { name: "description", content: "ابحث في الشقق والفلل والشاليهات المتاحة للبيع والإيجار وفلتر حسب النوع والمنطقة." },
      { property: "og:title", content: "كل العقارات | دار السكن" },
      { property: "og:description", content: "شقق وفلل وشاليهات للبيع والإيجار." },
    ],
  }),
  component: Properties,
});

const uniq = (k: "type" | "purpose" | "location") => [...new Set(properties.map((p) => p[k]))];

function Properties() {
  const s = Route.useSearch();
  const navigate = useNavigate({ from: "/properties/" });
  const list = properties.filter((p) => (!s.type || p.type === s.type) && (!s.purpose || p.purpose === s.purpose) && (!s.location || p.location === s.location));
  const sel = (k: keyof Search, label: string) => (
    <select value={s[k] ?? ""} onChange={(e) => navigate({ search: (prev) => ({ ...prev, [k]: e.target.value || undefined }) })} className="rounded-lg border bg-card px-4 py-2.5 text-sm">
      <option value="">{label}</option>
      {uniq(k).map((v) => <option key={v} value={v}>{v}</option>)}
    </select>
  );
  return (
    <>
      <PageTitle title="العقارات المتاحة" sub="فلتر حسب النوع والغرض والمنطقة" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="-mt-6 flex flex-wrap gap-3 rounded-xl bg-card p-4 shadow-card">
          {sel("type", "كل الأنواع")}{sel("purpose", "بيع وإيجار")}{sel("location", "كل المناطق")}
          <span className="ms-auto self-center text-sm text-muted-foreground">{list.length} نتيجة</span>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
        {!list.length && <p className="py-20 text-center text-muted-foreground">مفيش نتائج مطابقة.</p>}
      </div>
    </>
  );
}
