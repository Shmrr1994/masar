"use client";

export default function BackgroundPattern() {
  return (
    <>
      {/* Saudi Pattern */}
      <div
        className="
        fixed
        inset-0
        -z-50
        opacity-[0.045]
        bg-cover
        bg-center
        bg-no-repeat
        pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/images/saudi-pattern.png')",
        }}
      />

      {/* Top Glow */}
      <div
        className="
        fixed
        top-[-250px]
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-emerald-500/10
        blur-[180px]
        -z-40
        pointer-events-none
        "
      />

      {/* Bottom Glow */}
      <div
        className="
        fixed
        bottom-[-300px]
        right-[-150px]
        w-[650px]
        h-[650px]
        rounded-full
        bg-green-700/10
        blur-[150px]
        -z-40
        pointer-events-none
        "
      />
    </>
  );
}