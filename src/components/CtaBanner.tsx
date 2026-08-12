export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-brand-green-600 px-8 py-12 text-center shadow-lg shadow-brand-green-600/20 sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Scopri quanto puoi risparmiare, oggi stesso
          </h2>
          <p className="mt-2 text-brand-green-50">
            Bastano due minuti per ricevere un preventivo personalizzato e
            gratuito.
          </p>
        </div>
        <a
          href="#contatti"
          className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-green-700 transition hover:bg-brand-green-50"
        >
          Richiedi preventivo
        </a>
      </div>
    </section>
  );
}
