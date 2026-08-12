"use client";

import { useEffect, useRef, useState } from "react";
import { BoltIcon, MessageIcon, XIcon } from "./icons";

type NodeId =
  | "root"
  | "luce_gas"
  | "fotovoltaico"
  | "efficientamento"
  | "consulente"
  | "come_funziona"
  | "cta_contatti";

type ChatOption = {
  label: string;
  next: NodeId;
};

type ChatNode = {
  bot: string[];
  options: ChatOption[];
};

type Message = {
  from: "bot" | "user";
  text: string;
};

const TREE: Record<NodeId, ChatNode> = {
  root: {
    bot: [
      "Ciao! Sono l'assistente virtuale di La Tua Attività 👋",
      "Come posso aiutarti oggi?",
    ],
    options: [
      { label: "Risparmiare su luce e gas", next: "luce_gas" },
      { label: "Impianto fotovoltaico", next: "fotovoltaico" },
      { label: "Efficientamento energetico", next: "efficientamento" },
      { label: "Parlare con un consulente", next: "consulente" },
    ],
  },
  luce_gas: {
    bot: [
      "Confrontiamo le migliori offerte luce e gas del mercato e ti proponiamo quella più conveniente in base ai tuoi consumi, senza costi di attivazione.",
    ],
    options: [
      { label: "Come funziona il passaggio?", next: "come_funziona" },
      { label: "Richiedi un preventivo", next: "cta_contatti" },
      { label: "Torna al menu", next: "root" },
    ],
  },
  fotovoltaico: {
    bot: [
      "Progettiamo e installiamo impianti fotovoltaici e sistemi di accumulo su misura, con sopralluogo gratuito e preventivo dettagliato.",
    ],
    options: [
      { label: "Richiedi un preventivo", next: "cta_contatti" },
      { label: "Parlare con un consulente", next: "consulente" },
      { label: "Torna al menu", next: "root" },
    ],
  },
  efficientamento: {
    bot: [
      "Effettuiamo una diagnosi energetica gratuita per individuare gli interventi più utili a ridurre i consumi e migliorare la classe energetica.",
    ],
    options: [
      { label: "Richiedi un preventivo", next: "cta_contatti" },
      { label: "Parlare con un consulente", next: "consulente" },
      { label: "Torna al menu", next: "root" },
    ],
  },
  consulente: {
    bot: [
      "Puoi chiamarci al 800 000 000 oppure lasciare i tuoi dati nel form contatti: sarai ricontattato entro 24 ore da un consulente dedicato.",
    ],
    options: [
      { label: "Vai al form contatti", next: "cta_contatti" },
      { label: "Torna al menu", next: "root" },
    ],
  },
  come_funziona: {
    bot: [
      "In breve: 1) analizziamo la tua bolletta, 2) ti proponiamo la soluzione più conveniente, 3) ci occupiamo noi dell'attivazione, senza interruzioni di fornitura.",
    ],
    options: [
      { label: "Richiedi un preventivo", next: "cta_contatti" },
      { label: "Torna al menu", next: "root" },
    ],
  },
  cta_contatti: {
    bot: [
      "Perfetto! Compila il form nella sezione Contatti qui sotto, oppure chiamaci al 800 000 000: ti risponderemo il prima possibile.",
    ],
    options: [{ label: "Torna al menu", next: "root" }],
  },
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(TREE.root.bot.map((text) => ({ from: "bot", text })));
  const [options, setOptions] = useState<ChatOption[]>(TREE.root.options);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTeaser, setShowTeaser] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowTeaser(true), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  function openChat() {
    setOpen(true);
    setHasUnread(false);
    setShowTeaser(false);
  }

  function handleOption(option: ChatOption) {
    const node = TREE[option.next];
    setMessages((prev) => [
      ...prev,
      { from: "user", text: option.label },
      ...node.bot.map((text) => ({ from: "bot" as const, text })),
    ]);
    setOptions(node.options);

    if (option.next === "cta_contatti") {
      window.setTimeout(() => {
        document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[520px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-brand-navy-900 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green-600 text-white">
                <BoltIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">La Tua Attività</p>
                <p className="text-xs text-slate-300">Assistente virtuale · demo</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    message.from === "user"
                      ? "rounded-br-sm bg-brand-green-600 text-white"
                      : "rounded-bl-sm border border-slate-100 bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 bg-white p-3">
            <p className="px-1 pb-2 text-[11px] text-slate-400">
              Risposte guidate a scopo dimostrativo, senza raccolta dati.
            </p>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleOption(option)}
                  className="rounded-full border border-brand-green-600 px-3.5 py-2 text-xs font-semibold text-brand-green-700 transition hover:bg-brand-green-50"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {!open && showTeaser && (
        <div className="animate-pop-in flex max-w-[220px] items-start gap-2 rounded-2xl rounded-br-sm border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-xl">
          <span className="flex-1">
            👋 Hai bisogno di aiuto? Chatta con noi, è gratis!
          </span>
          <button
            type="button"
            onClick={() => setShowTeaser(false)}
            aria-label="Chiudi suggerimento"
            className="shrink-0 text-slate-400 transition hover:text-slate-600"
          >
            <XIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <div className="relative">
        {!open && (
          <>
            <span className="pulse-ring absolute inset-0 rounded-full bg-brand-green-500" />
            <span
              className="pulse-ring absolute inset-0 rounded-full bg-brand-green-500"
              style={{ animationDelay: "1.1s" }}
            />
          </>
        )}

        <button
          type="button"
          onClick={() => (open ? setOpen(false) : openChat())}
          aria-label={open ? "Chiudi assistente virtuale" : "Apri assistente virtuale"}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-600 text-white shadow-xl shadow-brand-green-600/30 transition hover:scale-105 hover:bg-brand-green-700 ${
            open ? "" : "animate-bounce-jump"
          }`}
        >
          {open ? <XIcon className="h-6 w-6" /> : <MessageIcon className="h-6 w-6" />}
        </button>

        {!open && hasUnread && (
          <span className="animate-badge-pop pointer-events-none absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
            1
          </span>
        )}
      </div>
    </div>
  );
}
