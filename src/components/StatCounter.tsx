"use client";

import { useCountUp } from "./useCountUp";

type StatCounterProps = {
  target: number;
  suffix?: string;
  label: string;
};

export default function StatCounter({ target, suffix = "", label }: StatCounterProps) {
  const { ref, value } = useCountUp<HTMLParagraphElement>(target);

  return (
    <div>
      <p ref={ref} className="text-3xl font-bold text-brand-navy-900">
        {value}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}
