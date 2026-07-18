"use client";

import { useRouter } from "next/navigation";
import ProgressStepper from "@/components/booking/ProgressStepper";
import BookingLayout from "@/components/booking/BookingLayout";
import { useBookingStore } from "@/lib/store/booking";

export default function ServicesPage() {
  const router = useRouter();
  const setService = useBookingStore((state) => state.setService);
  
  return (
    <BookingLayout
      title="اختر الخدمة"
      subtitle="حدد الخدمة المناسبة لطلبك"
    >

      <ProgressStepper step={1} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      onClick={() => {
        setService("نقل السيارات");
        router.push("/booking/details");
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 cursor-pointer hover:border-green-500 transition"
    >
      <h3 className="text-xl font-bold">نقل السيارات</h3>
      <p className="text-slate-400 mt-2">
        نقل السيارات داخل وخارج المدن.
      </p>
    </div>

     <div
       onClick={() => {
         setService("نقل الأثاث");
         router.push("/booking/details");
         }}
         className="rounded-2xl border border-white/10 bg-white/5 p-6 cursor-pointer hover:border-green-500 transition"
        >
         <h3 className="text-xl font-bold">نقل الأثاث</h3>
         <p className="text-slate-400 mt-2">
             نقل الأثاث مع عمالة وتجهيز كامل.
            </p>
          </div>

      </div>
    </BookingLayout>
  );
}