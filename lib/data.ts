// Structured static content and mock data for MASAR platform

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  badge?: string;
  basePrice: number;
}

export interface CityInfo {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  activeDrivers: number;
  x: number; // percentage coordinate for map SVG
  y: number; // percentage coordinate for map SVG
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  city: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface WhyReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DriverOffer {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  trips: number;
  vehicle: string;
  vehicleNo: string;
  price: number;
  eta: string; // duration like "15 دقيقة"
  phone: string;
}

export const SERVICES: Service[] = [
  {
    id: "car-transport",
    title: "نقل السيارات",
    subtitle: "شحن آمن لسيارتك بين المدن",
    description: "خدمات نقل السيارات الفارهة، الرياضية، والعادية عبر ناقلات حديثة ومؤمنة بالكامل بين جميع مدن المملكة.",
    detailedDescription: "سواء كنت تمتلك سيارة رياضية منخفضة أو سيارة عائلية فارهة، توفر لك مسار خيارات نقل متعددة تشمل ناقلات جماعية أو ناقلات خاصة مغلقة ومفتوحة مع تأمين شامل على الحمولة لراحة بال تامة.",
    iconName: "Car",
    badge: "الأكثر طلباً",
    basePrice: 350
  },
  {
    id: "flatbeds",
    title: "سطحات إنقاذ (سطحات)",
    subtitle: "مساعدة على الطريق ونقل سريع",
    description: "سطحات هيدروليكية وعادية متوفرة على مدار الساعة لإنقاذ ونقل السيارات المتعطلة أو المصدومة بلمسة زر.",
    detailedDescription: "نظام ذكي يحدد موقعك بدقة ويرسل لك أقرب سطحة هيدروليكية أو عادية لتأمين نقل مركبتك إلى الوجهة المطلوبة بأمان واحترافية عالية مع سائقين مدربين.",
    iconName: "TruckIcon",
    badge: "خدمة 24/7",
    basePrice: 150
  },
  {
    id: "furniture",
    title: "نقل الأثاث",
    subtitle: "فك، تركيب، وتغليف احترافي",
    description: "نقل أثاث منزلي ومكتبي متكامل بأيدي عمالة مدربة مع خدمات الفك والتركيب والتغليف لضمان سلامة ممتلكاتك.",
    detailedDescription: "نقدم حلولاً متكاملة لنقل العفش تشمل فك غرف النوم والمطابخ، التغليف الحراري والفقاعي لحماية القطع الحساسة، والنقل بسيارات مغلقة مخصصة (دينا) لحمايتها من الأتربة والأمطار.",
    iconName: "Home",
    basePrice: 450
  },
  {
    id: "trucks",
    title: "الشاحنات والمعدات",
    subtitle: "حلول النقل الثقيل والمتوسط",
    description: "توفير دينا، لوري، تريلات، وشاحنات ثقيلة لنقل البضائع والمواد بمختلف الأحجام والأوزان بكفاءة عالية.",
    detailedDescription: "منصة مسار تتيح لك طلب مختلف أنواع شاحنات النقل الثقيل والمتوسط لتلبية احتياجات أعمالك أو شحناتك الشخصية الكبيرة، مع تغطية كاملة لكافة مناطق وموانئ المملكة.",
    iconName: "Container",
    basePrice: 600
  },
  {
    id: "corporate",
    title: "لوجستيات الشركات",
    subtitle: "إدارة سلاسل الإمداد للأعمال",
    description: "حلول مخصصة للشركات والمتاجر الإلكترونية تشمل النقل المجدول، التوزيع، وإدارة الشحنات بعقود مرنة.",
    detailedDescription: "نمكن قطاع الأعمال من تحسين عملياتهم اللوجستية عبر حلول رقمية مرنة، تشمل النقل المجدول، إدارة المستندات، تقارير الأداء، وأسعار تعاقدية تنافسية لزيادة كفاءة التوزيع والتشغيل.",
    iconName: "Briefcase",
    badge: "للأعمال",
    basePrice: 1200
  }
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "اختر الخدمة والوجهة",
    description: "حدد نوع الخدمة اللوجستية المطلوبة (سطحة، نقل أثاث، إلخ) وحدد موقع الاستلام والتسليم عبر الخريطة الذكية بسهولة."
  },
  {
    step: "02",
    title: "قارن العروض والأسعار",
    description: "استقبل عروضاً تنافسية مباشرة من السائقين ومقدمي الخدمات القريبين منك، واطلع على تقييماتهم وأسعارهم واختر ما يناسبك."
  },
  {
    step: "03",
    title: "تتبع شحنتك مباشرة",
    description: "تابع مسار شحنتك على الخريطة في الوقت الفعلي منذ لحظة الاستلام وحتى الوصول، مع إمكانية التواصل المباشر مع السائق."
  }
];

export const STATS = [
  { value: "+1,000", label: "طلب ناجح شهرياً" },
  { value: "+500", label: "قائد مركبة مرخص" },
  { value: "+25", label: "مدينة مغطاة بالمملكة" },
  { value: "98%", label: "نسبة رضا العملاء" }
];

export const CITIES: CityInfo[] = [
  { id: "riyadh", name: "الرياض", nameEn: "Riyadh", description: "العاصمة والمركز الإداري - تغطية كاملة على مدار الساعة", activeDrivers: 142, x: 55, y: 48 },
  { id: "jeddah", name: "جدة", nameEn: "Jeddah", description: "عروس البحر الأحمر - سرعة استجابة فائقة لنقل المركبات والأثاث", activeDrivers: 98, x: 28, y: 55 },
  { id: "dammam", name: "الدمام", nameEn: "Dammam", description: "بوابة الشرقية - ربط لوجستي متميز للموانئ والشركات", activeDrivers: 76, x: 74, y: 38 },
  { id: "makkah", name: "مكة المكرمة", nameEn: "Makkah", description: "تغطية مكثفة لخدمة الزوار وسكان العاصمة المقدسة", activeDrivers: 54, x: 29, y: 62 },
  { id: "madinah", name: "المدينة المنورة", nameEn: "Madinah", description: "خدمات نقل سريعة وموثوقة لمدينة المصطفى", activeDrivers: 41, x: 31, y: 44 },
  { id: "ahsa", name: "الأحساء", nameEn: "Al Ahsa", description: "تغطية لوجستية شاملة لربط مدن وقرى الواحة", activeDrivers: 33, x: 70, y: 46 }
];

export const WHY_REASONS: WhyReason[] = [
  {
    id: "speed",
    title: "سرعة الاستجابة",
    description: "بفضل خوارزميات التوزيع الذكية، يتم توجيه أقرب السائقين إليك لتوفير وقت الانتظار وتلبية طلبك في أسرع وقت ممكن.",
    iconName: "Zap"
  },
  {
    id: "safety",
    title: "أمان وموثوقية عالية",
    description: "جميع السائقين ومقدمي الخدمات موثقون رسمياً بهوياتهم وتراخيصهم، مع توفير خيارات تأمين شاملة للحمولات الحساسة.",
    iconName: "ShieldCheck"
  },
  {
    id: "pricing",
    title: "أسعار تنافسية شفافة",
    description: "لا توجد أسعار مخفية. تتيح لك آلية العطاءات الحصول على أفضل الأسعار التنافسية المباشرة من السائقين ومقارنتها فوراً.",
    iconName: "CirclePercent"
  },
  {
    id: "drivers",
    title: "سائقون محترفون",
    description: "تخضع شبكة سائقينا لتدريب مستمر على التعامل مع الحمولات الثقيلة والسيارات الفارهة وضمان تقديم خدمة تليق بكم.",
    iconName: "UserCheck"
  },
  {
    id: "support",
    title: "دعم فني متواصل 24/7",
    description: "فريق دعم سعودي متخصص مستعد لمساعدتك ومتابعة طلبك خطوة بخطوة لضمان سير العملية اللوجستية بأكمل وجه.",
    iconName: "Headphones"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "عبدالرحمن الحربي",
    role: "مالك معرض سيارات",
    city: "الرياض",
    text: "استخدمت مسار لنقل 4 سيارات فارهة من ميناء جدة إلى صالتي بالرياض. دقة المواعيد واحترافية السائق والناقلة المغلقة جعلتني اعتمد مسار كشريك لوجستي رسمي لمعرضي.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    name: "سارة الدوسري",
    role: "ربة منزل",
    city: "الدمام",
    text: "تجربة نقل أثاث بيتي مع مسار كانت ممتازة ومريحة جداً. العمال قاموا بالفك والتغليف الحراري بدقة متناهية، والأسعار كانت واضحة ومنخفضة مقارنة بالمكاتب التقليدية.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    name: "م. فيصل العتيبي",
    role: "مهندس اتصالات",
    city: "جدة",
    text: "تعطلت سيارتي في طريق المدينة السريع بجدة وقت متأخر. طلبت سطحة عبر مسار، وخلال 12 دقيقة فقط وصل السائق وقام برفع السيارة ونقلها للورشة بكل احترافية وأمان.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 4,
    name: "سلمان القحطاني",
    role: "رائد أعمال - متجر إلكتروني",
    city: "الرياض",
    text: "لوجستيات الشركات في مسار ساعدتنا في ربط مخازننا بمنافذ التوزيع بكفاءة تامة وعقود مرنة للغاية. وفرنا أكثر من 25% من تكاليف النقل المعتادة ووقت التشغيل.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

export const MOCK_DRIVERS: DriverOffer[] = [
  {
    id: "driver-1",
    name: "سعيد الشهراني",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 4.9,
    trips: 1240,
    vehicle: "سطحة هيدروليك نزول كامل",
    vehicleNo: "أ ب ج 1234",
    price: 180,
    eta: "8 دقائق",
    phone: "+966 50 111 2222"
  },
  {
    id: "driver-2",
    name: "خالد المطيري",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 4.8,
    trips: 940,
    vehicle: "سطحة عادية مؤمنة",
    vehicleNo: "د هـ و 5678",
    price: 130,
    eta: "14 دقيقة",
    phone: "+966 50 333 4444"
  },
  {
    id: "driver-3",
    name: "محمد الشمري",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 4.9,
    trips: 620,
    vehicle: "دينا نقل أثاث مغلقة (شفروليه)",
    vehicleNo: "س ص ع 9012",
    price: 380,
    eta: "22 دقيقة",
    phone: "+966 50 555 6666"
  },
  {
    id: "driver-4",
    name: "أبو فهد العسيري",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 4.7,
    trips: 1820,
    vehicle: "ونش إنقاذ وسحب هيدروليكي",
    vehicleNo: "ح ط ك 4567",
    price: 160,
    eta: "11 دقيقة",
    phone: "+966 50 777 8888"
  },
  {
    id: "driver-5",
    name: "ياسر الهذلي",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5.0,
    trips: 340,
    vehicle: "شاحنة نقل مغلقة لسيارات السباق والسيارات الفارهة",
    vehicleNo: "م ن و 8888",
    price: 450,
    eta: "18 دقيقة",
    phone: "+966 50 999 0000"
  }
];

export const FAQS = [
  {
    q: "كيف تضمن مسار سلامة الشحنات أو السيارات المنقولة؟",
    a: "جميع عمليات النقل التي تتم عبر مسار مغطاة بوثيقة تأمين شاملة للحمولة. كما أن جميع السائقين في شبكتنا مرخصون رسمياً ومؤهلون للتعامل مع مختلف أنواع الحمولات."
  },
  {
    q: "هل الخدمة متوفرة في جميع مدن المملكة؟",
    a: "نعم، تغطي مسار حالياً جميع المدن الرئيسية والمناطق المجاورة لها مثل الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، الأحساء، الجبيل، الخبر، الطائف، وغيرها."
  },
  {
    q: "كيف يتم تحديد قيمة العرض أو سعر الخدمة؟",
    a: "توفر مسار سوقاً تنافسية (marketplace). بعد إرسال طلبك، يتنافس السائقون القريبون بتقديم عروض أسعار مختلفة لك. يمكنك مقارنة الأسعار واختيار السعر الأنسب لميزانيتك."
  },
  {
    q: "هل توفرون خدمات نقل مجدولة لقطاع الأعمال والشركات؟",
    a: "بالتأكيد، نوفر باقات وعقود مرنة مخصصة للشركات والمتاجر الإلكترونية للنقل والخدمات اللوجستية المكررة مع نظام لإصدار الفواتير وتقارير تتبع ذكية."
  }
];
