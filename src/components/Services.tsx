import {
  ArrowRightIcon,
  BoltIcon,
  FlameIcon,
  LeafIcon,
  SunIcon,
} from "./icons";

const SERVICES = [
  {
    icon: BoltIcon,
    title: "Fornitura luce",
    description:
      "Tariffe trasparenti e su misura per casa o azienda, con energia da fonti rinnovabili.",
    color: "bg-brand-green-50 text-brand-green-600",
  },
  {
    icon: FlameIcon,
    title: "Fornitura gas",
    description:
      "Offerte competitive per il riscaldamento domestico e per attività commerciali.",
    color: "bg-amber-50 text-amber-500",
  },
  {
    icon: SunIcon,
    title: "Fotovoltaico",
    description:
      "Progettazione e installazione di impianti fotovoltaici e accumulo, chiavi in mano.",
    color: "bg-amber-50 text-amber-500",
  },
  {
    icon: LeafIcon,
    title: "Efficientamento energetico",
    description:
      "Diagnosi energetica e interventi per ridurre i consumi e migliorare la classe energetica.",
    color: "bg-brand-green-50 text-brand-green-600",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-green-600">
          I nostri servizi
        </span>
        <h2 className="mt-3 text-3xl font-bold text-brand-navy-900 sm:text-4xl">
          Tutta l&rsquo;energia di cui hai bisogno, in un unico posto
        </h2>
        <p className="mt-4 text-slate-600">
          Dalla scelta del fornitore giusto all&rsquo;installazione di un
          impianto fotovoltaico: ti seguiamo in ogni fase, senza sorprese in
          bolletta.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group flex flex-col rounded-2xl border border-slate-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}
            >
              <service.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-brand-navy-900">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {service.description}
            </p>
            <a
              href="#contatti"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-600"
            >
              Scopri di più
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
