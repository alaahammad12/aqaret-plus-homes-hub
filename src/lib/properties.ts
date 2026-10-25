import hero from "@/assets/hero.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";

export type Property = {
  id: string;
  title: string;
  type: "شقة" | "فيلا" | "تاون هاوس" | "شاليه";
  purpose: "بيع" | "إيجار";
  location: string;
  price: number;
  area: number;
  beds: number;
  baths: number;
  image: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  { id: "villa-new-cairo", title: "فيلا مستقلة بحمام سباحة", type: "فيلا", purpose: "بيع", location: "القاهرة الجديدة", price: 18500000, area: 420, beds: 5, baths: 4, image: hero, description: "فيلا فاخرة داخل كمبوند متكامل الخدمات، تشطيب سوبر لوكس مع حديقة خاصة وحمام سباحة.", features: ["حمام سباحة خاص", "حديقة", "جراج لعربيتين", "أمن 24 ساعة"] },
  { id: "apt-zayed", title: "شقة بإطلالة مفتوحة", type: "شقة", purpose: "بيع", location: "الشيخ زايد", price: 4200000, area: 165, beds: 3, baths: 2, image: p1, description: "شقة واسعة بإضاءة طبيعية وواجهات زجاجية، قريبة من الخدمات والمحاور الرئيسية.", features: ["تشطيب كامل", "مصعد", "بلكونة", "قريبة من المحور"] },
  { id: "townhouse-october", title: "تاون هاوس بجاردن", type: "تاون هاوس", purpose: "إيجار", location: "6 أكتوبر", price: 45000, area: 260, beds: 4, baths: 3, image: p2, description: "تاون هاوس مودرن بحديقة خاصة في كمبوند هادئ، مناسب للعائلات.", features: ["حديقة خاصة", "نادي اجتماعي", "مكيفات", "أمن وبوابات"] },
  { id: "chalet-sahel", title: "شاليه على البحر مباشرة", type: "شاليه", purpose: "بيع", location: "الساحل الشمالي", price: 6800000, area: 140, beds: 2, baths: 2, image: p3, description: "شاليه بتراس واسع وإطلالة مباشرة على البحر في أرقى قرى الساحل.", features: ["فيو بحر", "تراس", "مفروش", "شاطئ خاص"] },
  { id: "apt-rent-maadi", title: "شقة مفروشة للإيجار", type: "شقة", purpose: "إيجار", location: "المعادي", price: 28000, area: 140, beds: 2, baths: 2, image: p1, description: "شقة مفروشة بالكامل في موقع هادئ قريب من المترو والخدمات.", features: ["مفروشة", "إنترنت", "مطبخ مجهز", "قريبة من المترو"] },
  { id: "villa-rent-sheikh", title: "فيلا للإيجار السنوي", type: "فيلا", purpose: "إيجار", location: "الشيخ زايد", price: 120000, area: 380, beds: 5, baths: 5, image: hero, description: "فيلا راقية للإيجار السنوي بمساحات خضراء واسعة.", features: ["حمام سباحة", "غرفة سائق", "حديقة", "مكيفات مركزية"] },
];

export const formatPrice = (p: Property) =>
  `${p.price.toLocaleString("ar-EG")} ج.م${p.purpose === "إيجار" ? " / شهريًا" : ""}`;
