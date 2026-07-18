"use client";

import { useRouter } from "next/navigation";
import BookingLayout from "@/components/booking/BookingLayout";
import ProgressStepper from "@/components/booking/ProgressStepper";
import { useBookingStore } from "@/lib/store/booking";

export default function DetailsPage() {
  const router = useRouter();

  const {
    name,
    phone,
    from,
    to,
    notes,
    setName,
    setPhone,
    setFrom,
    setTo,
    setNotes,
  } = useBookingStore();

  return (
    <BookingLayout
      title="بيانات الطلب"
      subtitle="أدخل بيانات الرحلة"
    >
      <ProgressStepper step={2} />

      <div className="space-y-5">
        <input
          placeholder="الاسم الكامل"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <input
          placeholder="رقم الجوال"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <input
          placeholder="مدينة الانطلاق"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <input
          placeholder="مدينة الوصول"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <textarea
          rows={4}
          placeholder="تفاصيل إضافية"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <button
          onClick={() => router.push("/booking/drivers")}
          className="w-full bg-brand-green hover:bg-brand-green-hover py-4 rounded-xl font-bold"
        >
          التالي
        </button>
      </div>
    </BookingLayout>
  );
}