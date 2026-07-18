"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import BookingLayout from "@/components/booking/BookingLayout";
import ProgressStepper from "@/components/booking/ProgressStepper";
import { useBookingStore } from "@/lib/store/booking";
import GlassCard from "@/components/ui/GlassCard";
import PremiumButton from "@/components/ui/PremiumButton";

import {
  Star,
  Truck,
  Clock3,
  UserRound,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const drivers = [
  {
    id: 1,
    name: "محمد أحمد",
    truck: "سطحة هيدروليك",
    rating: 4.9,
    eta: "12 دقيقة",
    image: "https://i.pravatar.cc/150?img=12",
    online: true,
  },
  {
    id: 2,
    name: "عبدالله خالد",
    truck: "ونش سيارات",
    rating: 4.8,
    eta: "18 دقيقة",
    image: "https://i.pravatar.cc/150?img=15",
    online: true,
  },
  {
    id: 3,
    name: "سعد العتيبي",
    truck: "شاحنة نقل أثاث",
    rating: 5,
    eta: "25 دقيقة",
    image: "https://i.pravatar.cc/150?img=18",
    online: false,
  },
];

export default function DriversPage() {
  const router = useRouter();

  const {
    service,
    name,
    phone,
    from,
    to,
    notes,
  } = useBookingStore();

  return (
    <BookingLayout
      title="اختر السائق"
      subtitle="اختر السائق الأنسب لطلبك"
    >
      <ProgressStepper step={3} />

      <GlassCard className="p-6 mb-8">

        <div className="grid md:grid-cols-2 gap-4">

          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-brand-green" />
            <span>{service}</span>
          </div>

          <div className="flex items-center gap-2">
            <UserRound className="w-5 h-5 text-brand-green" />
            <span>{name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-brand-green" />
            <span>{phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-green" />
            <span>{from}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-green" />
            <span>{to}</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-green" />
            <span>{notes || "لا توجد ملاحظات"}</span>
          </div>

        </div>

      </GlassCard>

      <div className="space-y-6">

        {drivers.map((driver) => (

          <GlassCard
            key={driver.id}
            className="p-6 cursor-pointer"
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div className="flex items-center gap-5">

                <div className="relative">

                  <Image
                    src={driver.image}
                    alt={driver.name}
                    width={72}
                    height={72}
                    className="rounded-full border-2 border-brand-green object-cover"
                  />

                  <span
                    className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-[#07111F] ${
                      driver.online
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    {driver.name}
                  </h2>

                  <p className="text-brand-green text-sm mt-1">
                    {driver.online ? "متاح الآن" : "غير متصل"}
                  </p>

                  <div className="mt-4 space-y-2">

                    <div className="flex items-center gap-2 text-slate-300">
                      <Truck className="w-4 h-4 text-brand-green" />
                      {driver.truck}
                    </div>

                    <div className="flex items-center gap-2 text-yellow-400">
                      <Star className="w-4 h-4 fill-yellow-400" />
                      {driver.rating}
                    </div>

                    <div className="flex items-center gap-2 text-cyan-300">
                      <Clock3 className="w-4 h-4" />
                      الوصول خلال {driver.eta}
                    </div>

                  </div>

                </div>

              </div>

              <div className="lg:w-56">

                <PremiumButton
                  fullWidth
                  onClick={() => router.push("/booking/payment")}
                >
                  اختيار السائق
                </PremiumButton>

              </div>

            </div>

          </GlassCard>

        ))}

      </div>

    </BookingLayout>
  );
}