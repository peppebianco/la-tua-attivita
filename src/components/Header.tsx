"use client";

import { useEffect, useState } from "react";
import { BoltIcon, MenuIcon, PhoneIcon, XIcon } from "./icons";

const NAV_LINKS = [
  { href: "#servizi", label: "Servizi" },
  { href: "#calcolatore", label: "Calcolatore" },
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#contatti", label: "Contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-slate-100 shadow-sm" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green-600 text-white transition-transform duration-300 group-hover:rotate-12">
            <BoltIcon className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-brand-navy-900">
            La Tua Attività
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-green-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+390000000000"
            className="flex items-center gap-2 text-sm font-semibold text-brand-navy-900"
          >
            <PhoneIcon className="h-4 w-4 text-brand-green-600" />
            800 000 000
          </a>
          <a
            href="#contatti"
            className="rounded-full bg-brand-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-green-600/30 transition hover:-translate-y-0.5 hover:bg-brand-green-700"
          >
            Preventivo gratuito
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Apri il menu"
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-green-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Preventivo gratuito
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
