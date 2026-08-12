"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";

type BillType = "luce" | "gas" | "entrambe";

const RATES: Record<BillType, number> = {
  luce: 0.22,
  gas: 0.18,
  entrambe: 0.26,
};

const LABELS: Record<BillType, string> = {
  luce: "Solo luce",
  gas: "Solo gas",
  entrambe: "Luce e gas",
};

const formatEuro = (value: number) =>
  new Intl.NumberFormat("it-IT", { maximumFractionDigits: 0 }).format(Math.round(value));

export default function SavingsCalculator() {
  const [bill, setBill] = useState(120);
  const [type, setType] = useState<BillType>("entrambe");

  const { monthlySavings, newBill, annualSavings, savingsPercent } = useMemo(() => {
    const rate = RATES[type];
    const savings = bill * rate;
    return {
      monthlySavings: savings,
      newBill: bill - savings,
      annualSavings: savings * 12,
      savingsPercent: Math.round(rate * 100),
    };
  }, [bill, type]);

  return (
    <section id="calcolatore" className="bg-brand-green-50/60">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-green-600">
            Calcolatore di risparmio
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy-900 sm:text-4xl">
            Scopri subito quanto potresti risparmiare
          </h2>
          <p className="mt-4 text-slate-600">
            Sposta il cursore sulla tua bolletta media mensile: la stima si
            aggiorna in tempo reale.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-14 max-w-4xl">
          <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(LABELS) as BillType[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setType(key)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      type === key
                        ? "bg-brand-green-600 text-white shadow-sm shadow-brand-green-600/30"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {LABELS[key]}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <div className="flex items-baseline justify-between">
                  <label htmlFor="bill-range" className="text-sm font-medium text-slate-700">
                    Bolletta media mensile
                  </label>
                  <span className="text-2xl font-bold text-brand-navy-900">
                    € {formatEuro(bill)}
                  </span>
                </div>
                <input
                  id="bill-range"
                  type="range"
                  min={40}
                  max={400}
                  step={5}
                  value={bill}
                  onChange={(event) => setBill(Number(event.target.value))}
                  className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand-green-600"
                />
                <div className="mt-1.5 flex justify-between text-xs text-slate-400">
                  <span>€ 40</span>
                  <span>€ 400</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-500">
                    <span>Bolletta attuale</span>
                    <span>€ {formatEuro(bill)}</span>
                  </div>
                  <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-full rounded-full bg-slate-300" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-brand-green-700">
                    <span>Bolletta stimata con noi</span>
                    <span>€ {formatEuro(newBill)}</span>
                  </div>
                  <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-brand-green-600 transition-[width] duration-500 ease-out"
                      style={{ width: `${100 - savingsPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-brand-navy-900 p-8 text-center">
              <p className="text-sm font-semibold text-slate-400">Risparmio stimato</p>
              <p className="mt-2 text-5xl font-bold text-white transition-all duration-300">
                {savingsPercent}%
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xl font-bold text-brand-green-500">
                    € {formatEuro(monthlySavings)}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">al mese</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-brand-green-500">
                    € {formatEuro(annualSavings)}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">all&rsquo;anno</p>
                </div>
              </div>
              <a
                href="#contatti"
                className="mt-7 block rounded-full bg-brand-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-green-700"
              >
                Richiedi questo preventivo
              </a>
              <p className="mt-3 text-[11px] text-slate-500">
                Stima indicativa basata su dati di mercato, non vincolante.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
