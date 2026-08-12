const STEPS = [
  {
    number: "01",
    title: "Richiedi la consulenza",
    description:
      "Compila il form o scrivi in chat: raccogliamo qualche informazione sui tuoi consumi.",
  },
  {
    number: "02",
    title: "Analizziamo la tua bolletta",
    description:
      "Confrontiamo le offerte disponibili e individuiamo la soluzione più conveniente per te.",
  },
  {
    number: "03",
    title: "Scegli la proposta migliore",
    description:
      "Ti presentiamo un preventivo chiaro, senza costi nascosti né vincoli.",
  },
  {
    number: "04",
    title: "Attiviamo tutto per te",
    description:
      "Ci occupiamo delle pratiche di attivazione: tu inizi a risparmiare da subito.",
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-green-600">
          Come funziona
        </span>
        <h2 className="mt-3 text-3xl font-bold text-brand-navy-900 sm:text-4xl">
          Quattro passi verso il risparmio
        </h2>
      </div>

      <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute top-6 left-0 right-0 hidden h-px bg-slate-200 lg:block" />
        {STEPS.map((step) => (
          <div key={step.number} className="relative">
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy-900 text-sm font-bold text-white">
              {step.number}
            </span>
            <h3 className="mt-5 text-base font-semibold text-brand-navy-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
