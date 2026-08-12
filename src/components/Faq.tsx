"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    question: "La consulenza è davvero gratuita?",
    answer:
      "Sì. L'analisi della tua bolletta e la proposta della soluzione più adatta non hanno alcun costo e non prevedono nessun impegno.",
  },
  {
    question: "Rimango senza energia durante il passaggio?",
    answer:
      "No, il cambio fornitore avviene senza interruzioni: la fornitura resta sempre attiva, cambia solo chi te la fattura.",
  },
  {
    question: "Ci sono penali per cambiare fornitore?",
    answer:
      "Nella maggior parte dei casi no. Verifichiamo insieme a te il contratto attuale prima di procedere, così non hai brutte sorprese.",
  },
  {
    question: "Quanto tempo richiede l'attivazione?",
    answer:
      "In genere tra 24 e 48 ore lavorative per l'avvio della pratica; i tempi tecnici di attivazione dipendono dal distributore locale.",
  },
  {
    question: "Cosa mi serve per iniziare?",
    answer:
      "Bastano una bolletta recente e un documento d'identità. Al resto pensiamo noi, dalla proposta alla gestione delle pratiche.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-green-600">
          Domande frequenti
        </span>
        <h2 className="mt-3 text-3xl font-bold text-brand-navy-900 sm:text-4xl">
          Tutto quello che vuoi sapere
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={faq.question} delay={index * 60}>
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-brand-navy-900 sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <span className="absolute h-3 w-px bg-current" />
                    <span className="absolute h-px w-3 bg-current" />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
