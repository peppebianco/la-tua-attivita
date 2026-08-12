import { BoltIcon, CheckIcon, FlameIcon, SunIcon } from "./icons";
import Reveal from "./Reveal";

const TRUST_POINTS = [
  "Consulenza gratuita e senza impegno",
  "Attivazione in 48 ore",
  "Nessun costo nascosto",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy-900">
      <div
        className="animate-blob pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #16a34a 0%, transparent 45%), radial-gradient(circle at 80% 0%, #f59e0b 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-amber-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-amber-400" />
            </span>
            Energia più semplice, da oggi
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Risparmia su luce e gas con{" "}
            <span className="text-brand-green-500">La Tua Attività</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Analizziamo la tua bolletta e ti proponiamo la soluzione più
            conveniente tra fornitura, fotovoltaico ed efficientamento
            energetico. Un unico consulente, dalla scelta all&rsquo;attivazione.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contatti"
              className="animate-glow-pulse rounded-full bg-brand-green-600 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-green-700"
            >
              Richiedi una consulenza gratuita
            </a>
            <a
              href="#servizi"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Scopri i servizi
            </a>
          </div>

          <ul className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckIcon className="h-4 w-4 shrink-0 text-brand-green-500" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="animate-float-soft rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold text-slate-400">
              Risparmio stimato annuo
            </p>
            <p className="mt-2 text-4xl font-bold text-white">
              fino al 30%
              <span className="ml-2 text-base font-medium text-slate-400">
                sulla bolletta
              </span>
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="animate-float rounded-2xl bg-white/5 p-4 text-center" style={{ animationDelay: "0s" }}>
                <BoltIcon className="mx-auto h-6 w-6 text-brand-green-500" />
                <p className="mt-3 text-xs font-semibold text-slate-300">Luce</p>
              </div>
              <div className="animate-float rounded-2xl bg-white/5 p-4 text-center" style={{ animationDelay: "0.6s" }}>
                <FlameIcon className="mx-auto h-6 w-6 text-brand-amber-400" />
                <p className="mt-3 text-xs font-semibold text-slate-300">Gas</p>
              </div>
              <div className="animate-float rounded-2xl bg-white/5 p-4 text-center" style={{ animationDelay: "1.2s" }}>
                <SunIcon className="mx-auto h-6 w-6 text-brand-amber-400" />
                <p className="mt-3 text-xs font-semibold text-slate-300">
                  Fotovoltaico
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl bg-brand-green-600/15 px-4 py-3 text-sm text-brand-green-500">
              <span className="font-semibold">Preventivo in 2 minuti</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </div>

          <div className="animate-float-soft absolute -left-6 -top-6 hidden items-center gap-2 rounded-2xl border border-white/10 bg-brand-navy-800/90 px-4 py-3 text-xs font-semibold text-white shadow-xl backdrop-blur sm:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-green-500" />
            </span>
            Preventivo richiesto 2 min fa
          </div>
        </Reveal>
      </div>
    </section>
  );
}
