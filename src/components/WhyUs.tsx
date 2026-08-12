import { ClockIcon, PiggyBankIcon, ShieldIcon, SunIcon } from "./icons";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

const REASONS = [
  {
    icon: PiggyBankIcon,
    title: "Risparmio reale",
    description:
      "Confrontiamo le migliori offerte del mercato per trovare quella davvero più conveniente per te.",
  },
  {
    icon: ShieldIcon,
    title: "Consulenza indipendente",
    description:
      "Nessun vincolo con un unico fornitore: ti proponiamo solo la soluzione più adatta alle tue esigenze.",
  },
  {
    icon: ClockIcon,
    title: "Assistenza continua",
    description:
      "Un consulente dedicato ti segue dall’attivazione fino alla prima bolletta e oltre.",
  },
  {
    icon: SunIcon,
    title: "Energia sostenibile",
    description:
      "Promuoviamo soluzioni a basso impatto ambientale, dal fotovoltaico alle tariffe green.",
  },
];

export default function WhyUs() {
  return (
    <section id="vantaggi" className="bg-brand-green-50/60">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-green-600">
              Perché sceglierci
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy-900 sm:text-4xl">
              Il partner giusto per gestire la tua energia
            </h2>
            <p className="mt-4 text-slate-600">
              Da anni aiutiamo famiglie e imprese a orientarsi tra offerte
              luce, gas e soluzioni per l&rsquo;energia rinnovabile, con un
              approccio semplice e trasparente.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <StatCounter target={10} suffix="+" label="Anni di esperienza" />
              <StatCounter target={30} suffix="%" label="Risparmio medio stimato" />
              <StatCounter target={48} suffix="h" label="Tempo medio di attivazione" />
              <StatCounter target={100} suffix="%" label="Consulenza gratuita" />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {REASONS.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 100}>
                <div className="group rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="animate-float-soft flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-600 text-white transition-transform group-hover:scale-110" style={{ animationDelay: `${index * 0.3}s` }}>
                    <reason.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-navy-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
