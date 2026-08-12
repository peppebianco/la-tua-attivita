import { StarIcon } from "./icons";

const TESTIMONIALS = [
  {
    quote:
      "Ci hanno seguito passo passo nel passaggio della fornitura di luce e gas. In pochi mesi abbiamo visto la differenza in bolletta.",
    name: "Marco R.",
    role: "Cliente residenziale",
  },
  {
    quote:
      "Impianto fotovoltaico installato in tempi rapidi e con grande professionalità. Consigliati per la consulenza gratuita iniziale.",
    name: "Studio Bianchi",
    role: "Cliente business",
  },
  {
    quote:
      "Finalmente un interlocutore unico per tutte le pratiche energetiche dell’attività. Assistenza sempre disponibile.",
    name: "Laura V.",
    role: "Titolare attività commerciale",
  },
];

export default function Testimonials() {
  return (
    <section id="recensioni" className="bg-brand-navy-900">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-amber-400">
            Recensioni
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            La fiducia dei nostri clienti
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex gap-1 text-brand-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-xs text-slate-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
