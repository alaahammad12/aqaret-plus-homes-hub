import { createFileRoute } from "@tanstack/react-router";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا العقارية | دار السكن" },
      { name: "description", content: "بيع وشراء وإيجار وتقييم وإدارة العقارات واستشارات الاستثمار العقاري." },
      { property: "og:title", content: "خدماتنا العقارية" },
      { property: "og:description", content: "كل الخدمات العقارية في مكان واحد." },
    ],
  }),
  component: Services,
});

const services = [
  ["بيع وشراء العقارات", "نساعدك تلاقي العقار المناسب أو توصل لمشتري جاد بأفضل سعر."],
  ["الإيجار", "وحدات سكنية وتجارية للإيجار القصير والطويل بعقود موثقة."],
  ["التقييم العقاري", "تقييم دقيق لقيمة عقارك بناءً على السوق والمنطقة."],
  ["إدارة الأملاك", "متابعة الإيجار والصيانة والتحصيل بالنيابة عنك."],
  ["الاستشارات الاستثمارية", "نرشدك لأفضل فرص الاستثمار والمشروعات الجديدة."],
  ["الإجراءات القانونية", "مراجعة العقود والتسجيل والتوثيق مع محامين متخصصين."],
];

function Services() {
  return (
    <>
      <PageTitle title="خدماتنا" sub="كل اللي تحتاجه في رحلتك العقارية" />
      <div className="mx-auto mt-14 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([t, d], i) => (
          <div key={t} className="rounded-xl bg-card p-7 shadow-card">
            <span className="font-display text-3xl text-accent">0{i + 1}</span>
            <h3 className="mt-3 text-xl text-primary">{t}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </>
  );
}
