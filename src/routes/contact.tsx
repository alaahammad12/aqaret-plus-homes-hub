import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { property?: string | undefined } => ({
    property: typeof s["property"] === "string" ? s["property"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "تواصل معنا | دار السكن العقارية" },
      { name: "description", content: "تواصل مع فريق دار السكن لحجز معاينة أو طلب استشارة عقارية مجانية." },
      { property: "og:title", content: "تواصل معنا | دار السكن" },
      { property: "og:description", content: "احجز معاينة أو اطلب استشارة مجانية." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { property } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-lg border bg-card px-4 py-3 text-sm";
  return (
    <>
      <PageTitle title="تواصل معنا" sub="ابعتلنا وهنرد عليك في أقرب وقت" />
      <div className="mx-auto mt-14 grid max-w-5xl gap-10 px-4 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <div className="rounded-xl bg-card p-5 shadow-card"><p className="text-xs text-muted-foreground">العنوان</p><p className="font-bold">التجمع الخامس، القاهرة الجديدة</p></div>
          <div className="rounded-xl bg-card p-5 shadow-card"><p className="text-xs text-muted-foreground">التليفون</p><p className="font-bold" dir="ltr">+20 1061378290</p></div>
          <div className="rounded-xl bg-card p-5 shadow-card"><p className="text-xs text-muted-foreground">مواعيد العمل</p><p className="font-bold">السبت - الخميس، 10ص - 8م</p></div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-2xl bg-card p-6 shadow-card md:col-span-3">
          {sent ? <p className="py-16 text-center text-lg text-primary">شكرًا! تم استلام رسالتك وهنتواصل معاك قريب.</p> : <>
            <input required placeholder="الاسم" className={field} />
            <input required type="tel" placeholder="رقم الموبايل" className={field} />
            <select className={field} defaultValue=""><option value="">نوع الطلب</option><option>شراء</option><option>بيع</option><option>إيجار</option><option>استشارة</option></select>
            <textarea rows={4} placeholder="رسالتك" defaultValue={property ? `مهتم بـ: ${property}` : ""} className={field} />
            <button className="w-full rounded-full bg-primary py-3 font-bold text-primary-foreground">إرسال</button>
          </>}
        </form>
      </div>
    </>
  );
}
