"use client";

import { useEffect, useState } from "react";
import { XIcon } from "./icons";

const EVENTS = [
  "Marco da Milano ha richiesto un preventivo",
  "Giulia da Torino sta risparmiando il 27% in bolletta",
  "Studio Rossi ha attivato un impianto fotovoltaico",
  "Andrea da Bologna ha completato il passaggio a La Tua Attività",
  "Famiglia Conti da Napoli ha richiesto una consulenza gratuita",
  "Sartoria Ferri ha ridotto i consumi del 19% in tre mesi",
];

const FIRST_DELAY = 6000;
const VISIBLE_DURATION = 5500;
const GAP_BETWEEN = 5000;

export default function LiveActivity() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [chatbotOccupied, setChatbotOccupied] = useState(false);

  useEffect(() => {
    function handleChatbotState(event: Event) {
      const detail = (event as CustomEvent<{ occupied: boolean }>).detail;
      setChatbotOccupied(detail.occupied);
    }
    window.addEventListener("chatbot-widget-state", handleChatbotState);
    return () => window.removeEventListener("chatbot-widget-state", handleChatbotState);
  }, []);

  useEffect(() => {
    if (dismissed) return;

    let hideTimer: number;
    let nextTimer: number;

    const showTimer = window.setTimeout(
      function show() {
        setVisible(true);
        hideTimer = window.setTimeout(() => {
          setVisible(false);
          nextTimer = window.setTimeout(() => {
            setIndex((i) => (i + 1) % EVENTS.length);
          }, GAP_BETWEEN);
        }, VISIBLE_DURATION);
      },
      index === 0 ? FIRST_DELAY : 400
    );

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(nextTimer);
    };
  }, [index, dismissed]);

  if (dismissed || !visible || chatbotOccupied) return null;

  return (
    <div className="animate-slide-in-left fixed bottom-24 inset-x-4 z-40 flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:bottom-5 sm:left-5 sm:inset-x-auto sm:max-w-[280px]">
      <span className="relative mt-1 flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green-500 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green-500" />
      </span>
      <p className="flex-1 text-xs leading-relaxed text-slate-700">{EVENTS[index]}</p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Chiudi notifica"
        className="shrink-0 text-slate-400 transition hover:text-slate-600"
      >
        <XIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
