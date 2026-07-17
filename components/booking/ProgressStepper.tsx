interface ProgressStepperProps {
  step: number;
}

const steps = [
  "الخدمة",
  "البيانات",
  "السائق",
  "الدفع",
  "التتبع",
];

export default function ProgressStepper({
  step,
}: ProgressStepperProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((item, index) => {
        const active = index + 1 <= step;

        return (
          <div
            key={item}
            className="flex flex-col items-center flex-1"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                active
                  ? "bg-brand-green text-white"
                  : "bg-slate-700 text-slate-400"
              }`}
            >
              {index + 1}
            </div>

            <span className="mt-2 text-sm">
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}