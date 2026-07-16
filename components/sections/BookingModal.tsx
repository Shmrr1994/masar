import React, { useState, useEffect, useRef } from "react";
import { X, Search, MapPin, Phone, Truck, CheckCircle2, Star, Send, ShieldAlert, Navigation, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, CITIES, MOCK_DRIVERS, DriverOffer } from "../../lib/data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

interface ChatMessage {
  id: number;
  sender: "driver" | "user";
  text: string;
  time: string;
}

export default function BookingModal({ isOpen, onClose, selectedServiceId }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [city, setCity] = useState("riyadh");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Simulation states
  const [visibleOffers, setVisibleOffers] = useState<DriverOffer[]>([]);
  const [selectedOffer, setSelectedOffer] = useState<DriverOffer | null>(null);
  const [searchStatus, setSearchStatus] = useState("جاري البحث عن سائقين قريبيين...");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [trackingProgress, setTrackingProgress] = useState(10);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-select service if passed from outside
  useEffect(() => {
    if (selectedServiceId) {
      setService(selectedServiceId);
    } else if (SERVICES.length > 0) {
      setService(SERVICES[0].id);
    }
  }, [selectedServiceId]);

  // Handle the live bids search timer simulation
  useEffect(() => {
    if (step === 3 && isOpen) {
      setVisibleOffers([]);
      setSearchStatus("جاري إرسال طلبك للشبكة والبحث عن سائقين متاحين...");
      
      const timer1 = setTimeout(() => {
        setVisibleOffers((prev) => [...prev, MOCK_DRIVERS[0]]);
        setSearchStatus("تم العثور على عروض قريبة! قارن واختر العرض الأنسب.");
      }, 1500);

      const timer2 = setTimeout(() => {
        setVisibleOffers((prev) => [...prev, MOCK_DRIVERS[1]]);
      }, 3000);

      const timer3 = setTimeout(() => {
        setVisibleOffers((prev) => [...prev, MOCK_DRIVERS[2]]);
      }, 4500);

      const timer4 = setTimeout(() => {
        setVisibleOffers((prev) => [...prev, MOCK_DRIVERS[3]]);
      }, 6000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [step, isOpen]);

  // Handle simulated tracking progress and automated driver chat messages
  useEffect(() => {
    if (step === 4 && selectedOffer) {
      // Set initial driver greeting
      setChatMessages([
        {
          id: 1,
          sender: "driver",
          text: `السلام عليكم يا غالي، معك الكابتن ${selectedOffer.name}. لقد قبلت طلبك وأنا متوجه إليك الآن بالـ (${selectedOffer.vehicle}). هل موقعك دقيق؟`,
          time: "الآن"
        }
      ]);
      setTrackingProgress(15);

      // Progress simulator
      const progressInterval = setInterval(() => {
        setTrackingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 5;
        });
      }, 5000);

      // Automated driver check-in
      const chatTimer = setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: "driver",
            text: "ممتاز، أنا على بعد 5 دقائق فقط وسأكون عندك لاستلام الحمولة بأمان إن شاء الله.",
            time: "قبل قليل"
          }
        ]);
      }, 12000);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(chatTimer);
      };
    }
  }, [step, selectedOffer]);

  // Scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  if (!isOpen) return null;

  const currentCityName = CITIES.find((c) => c.id === city)?.name || "";
  const currentServiceName = SERVICES.find((s) => s.id === service)?.title || "";

  // Validation
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!fromLocation.trim()) newErrors.fromLocation = "الرجاء تحديد موقع الاستلام بدقة";
    if (!toLocation.trim()) newErrors.toLocation = "الرجاء تحديد موقع التسليم بدقة";
    if (!phone.trim()) {
      newErrors.phone = "الرجاء إدخال رقم الجوال";
    } else if (!/^05\d{8}$/.test(phone.trim())) {
      newErrors.phone = "الرجاء إدخال رقم جوال سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleAcceptOffer = (offer: DriverOffer) => {
    setSelectedOffer(offer);
    setStep(4);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: inputText.trim(),
      time: "الآن"
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Simulate driver reply based on what the user said
    setTimeout(() => {
      let driverReply = "تمام يا فندم، أنا متابع الخريطة وبإذن الله سأصل إليك سريعاً.";
      const text = userMsg.text;
      if (text.includes("وين") || text.includes("موقع") || text.includes("تاخرت")) {
        driverReply = "أنا في الإشارة القريبة من موقعك حالياً، دقيقتين وأكون عندك.";
      } else if (text.includes("شكرا") || text.includes("يعطيك")) {
        driverReply = "في الخدمة يا طيب، واجبنا تقديم أفضل خدمة لك.";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "driver",
          text: driverReply,
          time: "الآن"
        }
      ]);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
      {/* Dark backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Main wizard card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative bg-[#0D1321]/95 backdrop-blur-2xl border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-10 text-white"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#090D16]/95">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-100 font-heading leading-none">
                {step === 1 && "الخطوة 1: اختيار الخدمة"}
                {step === 2 && "الخطوة 2: معلومات التوصيل والاتصال"}
                {step === 3 && "الخطوة 3: عروض أسعار مباشرة"}
                {step === 4 && "الخطوة 4: تتبع الشحنة المباشر"}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                {step === 4 ? "تتبع الكابتن المخصص لخدمتك" : "محاكي سوق العروض الذكي في مسار"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard step content wrapper */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* STEP 1: Select Service and City */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-right">
                <h4 className="text-sm font-bold text-white mb-2 font-heading">ما الخدمة التي تحتاجها اليوم؟</h4>
                <p className="text-xs text-slate-400">اختر نوع النقل لتتم مشاركته مع نخبة من القادة القريبين.</p>
              </div>

              {/* Grid of services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`p-4 rounded-2xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                      service === s.id
                        ? "bg-brand-green/20 border-brand-green shadow-sm text-white"
                        : "bg-[#111827]/40 border-white/5 hover:bg-[#161F30]/60 text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${service === s.id ? "bg-brand-green text-white" : "bg-slate-800 text-slate-300"}`}>
                        <Truck className="w-4 h-4" />
                      </div>
                      <div className="text-right">
                        <p className={`text-xs font-bold ${service === s.id ? "text-brand-green" : "text-white"}`}>{s.title}</p>
                        <p className="text-[10px] text-slate-400">{s.subtitle}</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      service === s.id ? "border-brand-green bg-brand-green" : "border-white/20"
                    }`}>
                      {service === s.id && <span className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              {/* City selector */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white font-heading">اختر المدينة</h4>
                <div className="grid grid-cols-3 gap-2">
                  {CITIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCity(c.id)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                        city === c.id
                          ? "bg-brand-green border-brand-green text-white shadow"
                          : "bg-[#111827]/40 hover:bg-[#161F30]/60 border-white/5 text-slate-300"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Address and Phone inputs */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="text-right">
                <h4 className="text-sm font-bold text-white mb-2 font-heading">تفاصيل النقل وجهات الاتصال</h4>
                <p className="text-xs text-slate-400">مشاركة التفاصيل الدقيقة تضمن لك الحصول على عروض أسعار أفضل وأكثر دقة.</p>
              </div>

              {/* From / To locations */}
              <div className="space-y-4">
                <div className="space-y-1.5 relative">
                  <label className="text-xs font-bold text-slate-300 block">نقطة الاستلام (من أين؟)</label>
                  <div className="relative">
                    <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    <input
                      type="text"
                      placeholder="مثال: حي الملقا، شارع أنس بن مالك، الرياض"
                      value={fromLocation}
                      onChange={(e) => {
                        setFromLocation(e.target.value);
                        if (errors.fromLocation) setErrors((p) => ({ ...p, fromLocation: "" }));
                      }}
                      className={`w-full pr-10 pl-4 py-3 bg-slate-950 border rounded-xl text-xs font-medium focus:outline-none focus:ring-1 ${
                        errors.fromLocation ? "border-red-500 focus:ring-red-500 text-white" : "border-white/5 focus:ring-brand-green focus:border-brand-green text-white"
                      }`}
                    />
                  </div>
                  {errors.fromLocation && <p className="text-[10px] text-red-500 mt-1">{errors.fromLocation}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 block">وجهة التسليم (إلى أين؟)</label>
                  <div className="relative">
                    <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
                    <input
                      type="text"
                      placeholder="مثال: حي الشاطئ، كورنيش جدة"
                      value={toLocation}
                      onChange={(e) => {
                        setToLocation(e.target.value);
                        if (errors.toLocation) setErrors((p) => ({ ...p, toLocation: "" }));
                      }}
                      className={`w-full pr-10 pl-4 py-3 bg-slate-950 border rounded-xl text-xs font-medium focus:outline-none focus:ring-1 ${
                        errors.toLocation ? "border-red-500 focus:ring-red-500 text-white" : "border-white/5 focus:ring-brand-green focus:border-brand-green text-white"
                      }`}
                    />
                  </div>
                  {errors.toLocation && <p className="text-[10px] text-red-500 mt-1">{errors.toLocation}</p>}
                </div>
              </div>

              {/* Extra details */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">تفاصيل الشحنة أو نوع السيارة (اختياري)</label>
                <textarea
                  placeholder="مثال: سيارة تويوتا لاندكروزر 2023 متعطلة العجلات الأمامية، أو 3 غرف نوم بحاجة لفك وتغليف."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-950 border border-white/5 text-white rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-brand-green focus:border-brand-green resize-none"
                />
              </div>

              {/* Phone number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">رقم الجوال لتلقي الإشعارات</label>
                <div className="relative">
                  <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="tel"
                    placeholder="05xxxxxxxx"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
                    }}
                    className={`w-full pr-10 pl-4 py-3 bg-slate-950 border rounded-xl text-xs font-medium font-mono focus:outline-none focus:ring-1 ${
                      errors.phone ? "border-red-500 focus:ring-red-500 text-white" : "border-white/5 focus:ring-brand-green focus:border-brand-green text-white"
                    }`}
                  />
                </div>
                {errors.phone ? (
                  <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>
                ) : (
                  <p className="text-[9px] text-slate-500 mt-1">يجب إدخال رقم جوال سعودي صحيح لتأكيد الهوية عبر النظام.</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Live marketplace bidding simulator */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Simulation status title */}
              <div className="bg-emerald-950/80 text-slate-200 p-5 rounded-2xl border border-emerald-500/20 flex items-center gap-4 relative overflow-hidden">
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-400 opacity-20"></span>
                  <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center">
                    <Search className="w-5 h-5 text-white animate-pulse" />
                  </div>
                </div>
                <div className="text-right flex-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wide">الربط المباشر بالقادة</span>
                  <p className="text-xs font-bold text-white mt-0.5 leading-tight">{searchStatus}</p>
                </div>
              </div>

              {/* Request metadata cards info summary */}
              <div className="grid grid-cols-2 gap-3 bg-[#0D1321]/60 border border-white/5 p-4 rounded-xl text-xs">
                <div className="text-right">
                  <p className="text-slate-500">الخدمة المطلوبة:</p>
                  <p className="font-bold text-white mt-0.5">{currentServiceName} ({currentCityName})</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-500">مسار التوصيل:</p>
                  <p className="font-bold text-white mt-0.5 truncate" title={`${fromLocation} ← ${toLocation}`}>
                    {fromLocation.slice(0, 18)}... ← {toLocation.slice(0, 18)}...
                  </p>
                </div>
              </div>

              {/* Driver Bids Live List */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-300 font-heading">عروض القادة المتاحة حالياً ({visibleOffers.length})</h4>
                
                <AnimatePresence>
                  {visibleOffers.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border border-dashed border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center text-slate-500 space-y-3"
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-brand-green border-t-transparent animate-spin" />
                      <p className="text-xs font-medium">بانتظار العروض الأولى من السائقين القريبين...</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      {visibleOffers.map((offer) => (
                        <motion.div
                          key={offer.id}
                          id={`bid-card-${offer.id}`}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          className="bg-[#111827]/40 border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-brand-green/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <img
                               src={offer.avatar}
                               alt={offer.name}
                               className="w-12 h-12 rounded-full object-cover border border-slate-800 referrer-policy='no-referrer'"
                            />
                            <div className="text-right">
                              <div className="flex items-center gap-1.5">
                                <h5 className="font-bold text-sm text-white leading-none">{offer.name}</h5>
                                <span className="text-[10px] text-slate-500">({offer.trips} رحلة)</span>
                              </div>
                              <p className="text-xs text-slate-300 mt-1 font-medium">{offer.vehicle}</p>
                              
                              {/* Rating stars */}
                              <div className="flex items-center gap-1 mt-1 text-amber-500 text-[11px] font-bold">
                                <Star className="w-3.5 h-3.5 fill-amber-500" />
                                <span>{offer.rating}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-start gap-4 border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
                            {/* Bidding Offer Price */}
                            <div className="text-right sm:text-left">
                              <span className="text-xs text-slate-500 block leading-none mb-1">عرض السعر</span>
                              <span className="text-xl font-black text-brand-green font-heading leading-none">
                                {offer.price} <span className="text-xs font-bold text-slate-400">ريال</span>
                              </span>
                            </div>

                            {/* Accept Offer Button */}
                            <button
                              id={`btn-accept-${offer.id}`}
                              onClick={() => handleAcceptOffer(offer)}
                              className="bg-brand-green hover:bg-brand-green-hover text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm cursor-pointer sleek-glow-btn"
                            >
                              قبول العرض
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* STEP 4: Live active tracking simulation and driver chat */}
          {step === 4 && selectedOffer && (
            <div className="space-y-6">
              {/* Success Notification */}
              <div className="bg-emerald-950/60 border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-right">
                  <p className="text-xs font-bold text-emerald-200">تم حجز الرحلة بنجاح!</p>
                  <p className="text-[11px] text-emerald-300">الكابتن متوجه الآن لموقع الاستلام. رقم اللوحة: {selectedOffer.vehicleNo}</p>
                </div>
              </div>

              {/* Progress bar tracking simulator */}
              <div className="bg-[#0D1321]/60 border border-white/5 p-5 rounded-2xl space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white">حالة الكابتن: {trackingProgress < 100 ? "في الطريق إليك" : "وصل لموقعك"}</span>
                  <span className="text-slate-400 font-medium">المسافة المتبقية: {trackingProgress < 100 ? "1.5 كم" : "0 كم"}</span>
                </div>
                
                {/* Visual Line */}
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${trackingProgress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-brand-green"
                  />
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>طلب الخدمة</span>
                  <span>في الطريق</span>
                  <span>الوصول للموقع</span>
                </div>
              </div>

              {/* Driver info and Live Chat container */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-80">
                {/* Driver profile details (Col 4) */}
                <div className="md:col-span-4 bg-[#0D1321]/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between items-center text-center">
                  <div className="space-y-2.5">
                    <img
                      src={selectedOffer.avatar}
                      alt={selectedOffer.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-800 shadow referrer-policy='no-referrer'"
                    />
                    <div>
                      <h5 className="font-bold text-sm text-white">{selectedOffer.name}</h5>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {selectedOffer.vehicle}
                      </span>
                    </div>
                  </div>

                  <div className="w-full space-y-2 border-t border-white/5 pt-3 mt-3 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>رقم لوحة المركبة</span>
                      <span className="font-bold text-white font-mono">{selectedOffer.vehicleNo}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>وقت الاستجابة المتوقع</span>
                      <span className="font-bold text-brand-green">{selectedOffer.eta}</span>
                    </div>
                  </div>
                </div>

                {/* Simulated chat widget box (Col 8) */}
                <div className="md:col-span-8 border border-white/5 rounded-2xl overflow-hidden flex flex-col bg-[#0D1321]/60">
                  {/* Chat header */}
                  <div className="bg-[#090D16] text-white px-4 py-2.5 flex items-center justify-between text-xs">
                    <span className="font-bold">محادثة الكابتن المباشرة</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      متصل الآن
                    </span>
                  </div>

                  {/* Message stream */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#090D16]/30">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "mr-auto items-start" : "ml-auto items-end"}`}
                      >
                        <div className={`p-3 rounded-2xl text-xs font-medium leading-relaxed ${
                          msg.sender === "user" ? "bg-brand-green text-white rounded-tl-none" : "bg-slate-900 border border-white/5 text-slate-100 rounded-tr-none"
                        }`}>
                          {msg.text}
                        </div>
                        <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.time}</span>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Message Input form */}
                  <form onSubmit={handleSendMessage} className="p-2 border-t border-white/5 flex gap-2">
                    <input
                      type="text"
                      placeholder="اكتب رسالة للكابتن هنا..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-white/5 text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                    <button
                      type="submit"
                      className="bg-brand-green hover:bg-brand-green-hover text-white p-2.5 rounded-xl cursor-pointer shadow-sm transition-colors flex items-center justify-center"
                    >
                      <Send className="w-4 h-4 rotate-180" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions / Step controllers */}
        <div className="px-6 py-4 border-t border-white/5 bg-[#090D16]/95 flex items-center justify-between">
          {step > 1 && step < 4 ? (
            <button
              onClick={handleBackStep}
              className="px-4 py-2 border border-white/10 text-slate-300 hover:text-white rounded-xl font-bold text-xs hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>السابق</span>
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              id="wizard-next-btn"
              onClick={handleNextStep}
              className="bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition-colors flex items-center gap-1.5 cursor-pointer sleek-glow-btn"
            >
              <span>التالي</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
          ) : step === 4 ? (
            <button
              onClick={() => {
                // Reset flow
                setStep(1);
                setSelectedOffer(null);
                setFromLocation("");
                setToLocation("");
                setDetails("");
                setPhone("");
                onClose();
              }}
              className="w-full bg-slate-950 hover:bg-slate-900 text-white border border-white/10 py-3 rounded-xl font-bold text-xs text-center cursor-pointer shadow"
            >
              إنهاء التجربة والمحاكاة
            </button>
          ) : (
            <div />
          )}
        </div>
      </motion.div>
    </div>
  );
}
