import { createFileRoute } from "@tanstack/react-router";
import p2 from "@/assets/p2.jpg";
import { PageTitle } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | دار السكن العقارية" },
      { name: "description", content: "تعرّف على دار السكن العقارية، خبرة 15 سنة في السوق العقاري المصري." },
      { property: "og:title", content: "من نحن | دار السكن" },
      { property: "og:description", content: "خبرة 15 سنة في السوق العقاري المصري." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageTitle title="من نحن" />
      <div className="mx-auto mt-14 grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <img src={p2} alt="مشروع سكني" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-card" />
        <div className="space-y-5 leading-8">
          <h2 className="text-3xl text-primary">خبرة بتبني ثقة</h2>
          <p>دار السكن العقارية شركة مصرية متخصصة في التسويق والوساطة العقارية منذ 2011. بنقدم لعملائنا حلول عقارية متكاملة من أول البحث لحد استلام المفتاح.</p>
          <p><b className="text-primary">رؤيتنا:</b> أن نكون الاختيار الأول لكل من يبحث عن سكن أو استثمار آمن.</p>
          <p><b className="text-primary">قيمنا:</b> الشفافية، الأمانة، والالتزام بمصلحة العميل.</p>
        </div>
      </div>
    </>
  );
}
