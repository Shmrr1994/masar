import React from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer () {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: "سطحات إنقاذ ونقل", href: "#services" },
    { label: "نقل السيارات الفارهة", href: "#services" },
    { label: "نقل الأثاث والعفش", href: "#services" },
    { label: "شاحنات النقل الثقيل", href: "#services" },
    { label: "حلول لوجستيات الشركات", href: "#services" },
  ];

  const companyLinks = [
    { label: "عن مسار", href: "#hero" },
    { label: "منهجية العمل", href: "#how-it-works" },
    { label: "التغطية الجغرافية", href: "#coverage" },
    { label: "قصص النجاح والآراء", href: "#testimonials" },
    { label: "الشروط والأحكام", href: "#" },
  ];

  return (
    <footer id="footer" className="bg-[#090D16] text-slate-300 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand details (Col 4) */}
          <div className="lg:col-span-4 space-y-6 text-right">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-brand-green flex items-center justify-center">
                <span className="text-white font-bold text-lg select-none">M</span>
              </div>
              <span className="text-lg font-bold font-heading text-white tracking-tight">
                مسار <span className="text-brand-green">|</span> MASAR
              </span>
            </a>
            
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
              مسار هي منصة لوجستية سعودية رائدة، تسعى لإعادة ابتكار قطاع النقل والسطحات ونقل الأثاث في المملكة عبر توظيف الذكاء الاصطناعي والربط المباشر لخدمة عملائنا بأعلى جودة وسرعة وأمان.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-950 hover:bg-brand-green hover:text-white flex items-center justify-center border border-white/5 hover:border-brand-green transition-all duration-200"
                aria-label="Twitter"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-950 hover:bg-brand-green hover:text-white flex items-center justify-center border border-white/5 hover:border-brand-green transition-all duration-200"
                aria-label="Instagram"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-950 hover:bg-brand-green hover:text-white flex items-center justify-center border border-white/5 hover:border-brand-green transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services links (Col 2.5) */}
          <div className="lg:col-span-2.5 text-right space-y-4">
            <h4 className="text-xs font-extrabold text-white tracking-widest uppercase font-heading">الخدمات اللوجستية</h4>
            <ul className="space-y-2.5 text-xs">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-green transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company links (Col 2.5) */}
          <div className="lg:col-span-2.5 text-right space-y-4">
            <h4 className="text-xs font-extrabold text-white tracking-widest uppercase font-heading">الشركة</h4>
            <ul className="space-y-2.5 text-xs">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-green transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (Col 3) */}
          <div className="lg:col-span-3 text-right space-y-5">
            <h4 className="text-xs font-extrabold text-white tracking-widest uppercase font-heading">تواصل معنا</h4>
            
            <div className="space-y-3.5 text-xs">
              <a href="tel:92000000" className="flex items-center gap-3 text-slate-400 hover:text-brand-green transition-colors">
                <Phone className="w-4 h-4 text-brand-green" />
                <span dir="ltr">92000000</span>
              </a>
              <a href="mailto:info@masar.sa" className="flex items-center gap-3 text-slate-400 hover:text-brand-green transition-colors">
                <Mail className="w-4 h-4 text-brand-green" />
                <span>info@masar.sa</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>الرياض، واجهة مسار، المملكة العربية السعودية</span>
              </div>
            </div>

            {/* Simulated mini newsletter sign up */}
            <div className="pt-2">
              <p className="text-[10px] text-slate-500 mb-2">اشترك في النشرة الإخبارية لتلقي آخر العروض وأخبار النقل:</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-1">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 bg-slate-950 border border-white/5 text-slate-100 rounded-lg text-[10px] focus:outline-none focus:border-brand-green"
                />
                <button
                  type="submit"
                  className="bg-brand-green hover:bg-brand-green-hover text-white px-3 py-2 rounded-lg text-[10px] font-bold cursor-pointer"
                >
                  <Send className="w-3 h-3 rotate-180" />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom copyright footprints & trust license footer section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-normal">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>مسار هي علامة تجارية مسجلة لشركة مسار للحلول اللوجستية المحدودة © {currentYear}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">سياسة الخصوصية</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">شروط الاستخدام</a>
            <span>•</span>
            <div className="text-slate-400 bg-[#0D1321] border border-white/5 px-2 py-0.5 rounded-md font-bold text-[9px]">
              رقم الترخيص: ١٠١٠٢٢٩٤٤٢
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
