"use client";

import { useRouter } from "next/navigation";
import BookingLayout from "@/components/booking/BookingLayout";
import ProgressStepper from "@/components/booking/ProgressStepper";
import { bookingData } from "@/lib/store/booking";

export default function DetailsPage() {
  const router = useRouter();

  return (
    <BookingLayout
      title="بيانات الطلب"
      subtitle="أدخل بيانات الرحلة"
    >
      <ProgressStepper step={2} />

      <div className="space-y-5">

        <input
         placeholder="الاسم الكامل"
          defaultValue={bookingData.name}
         onChange={(e) => (bookingData.name = e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <input
         placeholder="رقم الجوال"
         defaultValue={bookingData.phone}
         onChange={(e) => (bookingData.phone = e.target.value)}
         className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <input
          placeholder="مدينة الانطلاق"
          defaultValue={bookingData.from}
          onChange={(e) => (bookingData.from = e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <input
          placeholder="مدينة الوصول"
          defaultValue={bookingData.to}
          onChange={(e) => (bookingData.to = e.target.value)}
          className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none"
        />

        <textarea
          rows={4}
          placeholder="تفاصيل إضافية"
          defaultValue={bookingData.notes}
          onChange={(e) => (bookingData.notes = e.target.value)}
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