# La Tua Attività — sito web (bozza)

Bozza di sito web statico, solo front-end (nessun backend/database), per
un'attività di consulenza energetica (luce, gas, fotovoltaico,
efficientamento). Ispirato nella struttura e nello stile a siti come
lavarra-proenergy.it e nova-energy.it, con branding "La Tua Attività".

Include un assistente virtuale (chatbot) a risposte guidate, interamente
client-side: nessun dato viene inviato a server esterni.

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Struttura

- `src/app` — layout e pagina principale (App Router)
- `src/components` — sezioni della landing page (Header, Hero, Servizi,
  Perché sceglierci, Come funziona, Testimonianze, Contatti, Footer) e
  il widget Chatbot
- `src/components/icons.tsx` — set di icone SVG inline, nessuna
  dipendenza esterna

## Deploy

Il progetto è pensato per il deploy su [Vercel](https://vercel.com):
basta collegare il repository GitHub, Vercel rileva automaticamente
Next.js e non richiede configurazione aggiuntiva.
