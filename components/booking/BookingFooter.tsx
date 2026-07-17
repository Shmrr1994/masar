interface BookingLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function BookingLayout({
  title,
  subtitle,
  children,
}: BookingLayoutProps) {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            {title}
          </h1>

          {subtitle && (
            <p className="text-slate-400 mt-2">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          {children}
        </div>

      </div>
    </main>
  );
}