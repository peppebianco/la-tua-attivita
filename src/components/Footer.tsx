import { BoltIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green-600 text-white">
              <BoltIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-white">La Tua Attività</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Consulenza energetica indipendente per famiglie e imprese: luce,
            gas e fotovoltaico con un unico interlocutore di fiducia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Servizi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="#servizi" className="hover:text-brand-amber-400">Fornitura luce</a></li>
            <li><a href="#servizi" className="hover:text-brand-amber-400">Fornitura gas</a></li>
            <li><a href="#servizi" className="hover:text-brand-amber-400">Impianti fotovoltaici</a></li>
            <li><a href="#servizi" className="hover:text-brand-amber-400">Efficientamento energetico</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Azienda
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="#vantaggi" className="hover:text-brand-amber-400">Perché sceglierci</a></li>
            <li><a href="#calcolatore" className="hover:text-brand-amber-400">Calcolatore di risparmio</a></li>
            <li><a href="#come-funziona" className="hover:text-brand-amber-400">Come funziona</a></li>
            <li><a href="#recensioni" className="hover:text-brand-amber-400">Recensioni</a></li>
            <li><a href="#faq" className="hover:text-brand-amber-400">Domande frequenti</a></li>
            <li><a href="#contatti" className="hover:text-brand-amber-400">Contatti</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contatti
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brand-green-500" />
              800 000 000
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 shrink-0 text-brand-green-500" />
              info@latuaattivita.it
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 shrink-0 text-brand-green-500" />
              Via dell&rsquo;Energia 1, Italia
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} La Tua Attività. Tutti i diritti riservati.</p>
          <p>Sito dimostrativo — contenuti di esempio, nessun dato viene raccolto o inviato.</p>
        </div>
      </div>
    </footer>
  );
}
