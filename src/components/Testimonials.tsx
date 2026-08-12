import { StarIcon } from "./icons";
import Reveal from "./Reveal";

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
  {
    quote:
      "Consulenza chiara, nessuna pressione commerciale. Ci hanno fatto risparmiare fin dal primo mese.",
    name: "Giulia F.",
    role: "Cliente residenziale",
  },
  {
    quote:
      "Diagnosi energetica utilissima: abbiamo capito subito dove intervenire per ridurre i consumi in azienda.",
    name: "Sartoria Conti",
    role: "Cliente business",
  },
];

const LOOP = [...TESTIMONIALS, ...TESTIMONIALS];

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:w-[360px]">
      <div className="flex gap-1 text-brand-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="mt-5 text-sm font-semibold text-white">{testimonial.name}</p>
      <p className="text-xs text-slate-400">{testimonial.role}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="recensioni" className="overflow-hidden bg-brand-navy-900 py-24">
      <Reveal className="mx-auto max-w-2xl px-5 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-amber-400">
          Recensioni
        </span>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          La fiducia dei nostri clienti
        </h2>
        <p className="mt-4 text-slate-400">
          Le recensioni scorrono in automatico — passa il mouse sopra per metterle in pausa.
        </p>
      </Reveal>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-navy-900 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-navy-900 to-transparent sm:w-32" />

        <div className="flex w-max gap-6 px-5 marquee-track">
          {LOOP.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
