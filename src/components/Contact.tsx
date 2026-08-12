"use client";

import { useState } from "react";
import Confetti from "./Confetti";
import { CheckIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  return (
    <section id="contatti" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      {celebrate && <Confetti onDone={() => setCelebrate(false)} />}
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-green-600">
            Contatti
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy-900 sm:text-4xl">
            Richiedi la tua consulenza gratuita
          </h2>
          <p className="mt-4 text-slate-600">
            Lascia i tuoi dati: un consulente de La Tua Attività ti
            ricontatterà per proporti la soluzione più adatta a te, senza
            impegno.
          </p>

          <ul className="mt-8 space-y-4 text-sm text-slate-700">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
                <PhoneIcon className="h-4 w-4" />
              </span>
              800 000 000
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
                <MailIcon className="h-4 w-4" />
              </span>
              info@latuaattivita.it
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
                <MapPinIcon className="h-4 w-4" />
              </span>
              Via dell&rsquo;Energia 1, Italia
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-600">
                <CheckIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy-900">
                Richiesta inviata!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-slate-600">
                Questa è una demo: nessun dato è stato realmente inviato. In
                versione definitiva riceverai qui la conferma della tua
                richiesta.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-brand-navy-900"
              >
                Invia un&rsquo;altra richiesta
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
                setCelebrate(true);
              }}
              className="grid gap-5 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700" htmlFor="nome">
                  Nome e cognome
                </label>
                <input
                  id="nome"
                  required
                  type="text"
                  placeholder="Mario Rossi"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700" htmlFor="telefono">
                  Telefono
                </label>
                <input
                  id="telefono"
                  required
                  type="tel"
                  placeholder="333 1234567"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="mario.rossi@email.it"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="servizio">
                  Servizio di interesse
                </label>
                <select
                  id="servizio"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20"
                  defaultValue="Luce e gas"
                >
                  <option>Luce e gas</option>
                  <option>Fotovoltaico</option>
                  <option>Efficientamento energetico</option>
                  <option>Non so, vorrei una consulenza</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700" htmlFor="messaggio">
                  Messaggio (facoltativo)
                </label>
                <textarea
                  id="messaggio"
                  rows={3}
                  placeholder="Raccontaci la tua situazione attuale..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20"
                />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-brand-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-green-600/30 transition hover:bg-brand-green-700"
              >
                Invia richiesta
              </button>
              <p className="text-xs text-slate-400 sm:col-span-2">
                Demo statica: il form non invia dati a nessun server.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
