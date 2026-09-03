# Studio Legale Perlasca — Sito Web Statico Moderno

Sito web statico, ultra-veloce e responsive per lo **Studio Legale Avv. Cristiano Perlasca** (Brescia), convertito e ottimizzato dal backup originale WordPress.

Progettato per ottenere il massimo punteggio di performance (100/100 Lighthouse), SEO ottimizzato con Schema.org Structured Data (`LegalService`), zero overhead JavaScript e pronto per il deploy su **Vercel** e **GitHub**.

---

## 🚀 Caratteristiche

- ⚡ **Velocità Istantanea**: Generazione statica pura con **Astro** e **Tailwind CSS**.
- 📱 **Mobile First & Responsive**: Navigazione ottimizzata con menu a scomparsa e pulsanti di chiamata rapida.
- ⚖️ **Pagine del Sito**:
  - `Home` (`/`): Presentazione dello studio, storia (dal 1994), aree di competenza forense, avvocati e call to action.
  - `Su di noi` (`/su-di-noi`): Storia, approccio di lavoro, ricerca giurisprudenziale, Processo Civile Telematico (PCT) e Polis Web.
  - `La nostra politica` (`/la-nostra-politica`): Trasparenza sui costi, primo preventivo gratuito e gestione personale delle pratiche.
  - `Dove trovarci` (`/dove-trovarci`): Indirizzo in Via Armando Diaz 7 a Brescia, mappa Google Maps interattiva e galleria fotografica dello studio.
  - `Privacy Policy` (`/privacy-policy`): Informativa GDPR e note deontologiche.
- 📄 **Curriculum Vitae**: PDF dell'Avv. Cristiano Perlasca integrato e scaricabile direttamente.
- 🎯 **SEO & Structured Data**: Meta tag OpenGraph, Twitter Cards, Sitemap, Robots.txt e Schema.org `LegalService` per Google Search.
- 🔒 **Pronto per Vercel**: Configurazione con `vercel.json` per security headers, caching degli asset e clean URLs.

---

## 🛠️ Comandi Locali

```bash
# 1. Installazione dipendenze (già effettuata)
npm install

# 2. Avviare il server di sviluppo locale
npm run dev

# 3. Compilare il sito statico per la produzione
npm run build

# 4. Visualizzare l'anteprima della build di produzione
npm run preview
```

La cartella di output per la distribuzione statica è `dist/`.

---

## 🌐 Deploy su Vercel e GitHub

### 1. Inizializzare e pubblicare su GitHub

Se non lo hai già fatto, crea un nuovo repository su [GitHub](https://github.com/new) e poi esegui nel terminale:

```bash
# Inizializza git e fai il primo commit (il file .gitignore esclude già file pesanti e backup)
git init
git add .
git commit -m "feat: sito web statico Studio Legale Perlasca"

# Collega il repository remoto e carica il codice
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/NOME_REPO.git
git push -u origin main
```

### 2. Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com) ed effettua l'accesso con GitHub.
2. Clicca su **"Add New Project"** e seleziona il repository appena creato.
3. Vercel riconoscerà automaticamente il framework **Astro** con:
   - **Framework Preset**: `Astro`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clicca su **"Deploy"**. Il sito sarà online in pochi secondi con certificato SSL automatico e CDN globale!

---

## 📁 Struttura del Progetto

```
├── public/
│   ├── documents/           # PDF del Curriculum Vitae
│   ├── images/              # Logo, foto studio e immagini ottimizzate
│   ├── favicon.jpg          # Favicon dello studio
│   └── robots.txt           # File indicizzazione motori di ricerca
├── src/
│   ├── components/
│   │   ├── Header.astro     # Barra di navigazione con menu mobile
│   │   ├── Footer.astro     # Footer con contatti, PEC e social
│   │   └── ContactCard.astro # Scheda professionisti con chiamata rapida e CV
│   ├── layouts/
│   │   └── Layout.astro     # Layout base con SEO e Schema.org JSON-LD
│   ├── pages/
│   │   ├── index.astro
│   │   ├── su-di-noi.astro
│   │   ├── la-nostra-politica.astro
│   │   ├── dove-trovarci.astro
│   │   └── privacy-policy.astro
│   └── styles/
│       └── global.css       # Font Merriweather / Inter e stili globali
├── astro.config.mjs         # Configurazione Astro
├── tailwind.config.mjs      # Configurazione Tailwind CSS
├── vercel.json              # Header di sicurezza e caching Vercel
└── package.json
```
