# Portfolio di Emanuele Scarlata

Portfolio personale e blog tecnico costruito con [Astro](https://astro.build) e deployato su GitHub Pages.

## 🚀 Caratteristiche

- **Portfolio Professionale**: Sezioni per bio, progetti e competenze
- **Blog Tecnico**: Articoli su React, Node.js, architetture software
- **Design Moderno**: Stile pulito e responsive simile a dev.to
- **Performance Ottimizzate**: 100/100 Lighthouse score
- **SEO Friendly**: Meta tag, sitemap e OpenGraph
- **Deployment Automatico**: GitHub Actions per GitHub Pages

## 🛠️ Tecnologie Utilizzate

- **Framework**: Astro
- **Styling**: CSS Custom Properties
- **Content**: Markdown + MDX
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Struttura del Progetto

```
src/
├── components/     # Componenti riutilizzabili
├── content/        # Contenuti del blog
├── layouts/        # Layout delle pagine
├── pages/          # Pagine del sito
├── styles/         # Stili globali
└── consts.ts       # Costanti del sito
```

## 🚀 Sviluppo Locale

1. **Clona il repository**
   ```bash
   git clone https://github.com/Fenix46/Fenix46.github.io.git
   cd Fenix46.github.io/far-field
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri nel browser**
   ```
   http://localhost:4321
   ```

## 📝 Personalizzazione

### Modificare i Dati Personali

Aggiorna il file `src/consts.ts`:

```typescript
export const SITE_TITLE = 'Il Tuo Nome';
export const SITE_DESCRIPTION = 'La tua descrizione';
export const SITE_EMAIL = 'tua.email@example.com';

export const SOCIAL_LINKS = {
  github: 'https://github.com/tuo-username',
  linkedin: 'https://linkedin.com/in/tuo-profilo',
  // Aggiungi altri social
};

export const SKILLS = {
  frontend: ['React', 'Vue.js', 'TypeScript'],
  backend: ['Node.js', 'Python', 'Java'],
  // Personalizza le tue competenze
};
```

### Aggiungere Progetti

Modifica il file `src/pages/projects.astro` e aggiungi i tuoi progetti nell'array `projects`.

### Scrivere Articoli del Blog

Crea nuovi file `.md` o `.mdx` nella cartella `src/content/blog/`:

```markdown
---
title: "Titolo dell'articolo"
description: "Descrizione dell'articolo"
pubDate: "2024-01-15"
heroImage: "/blog-placeholder-1.jpg"
tags: ["react", "javascript"]
---

# Contenuto dell'articolo
```

## 🚀 Deployment

### Configurazione GitHub Pages

**IMPORTANTE**: Questo sito usa Astro, NON Jekyll!

1. Vai nelle impostazioni del repository
2. Sezione "Pages"
3. **Source**: "GitHub Actions" (NON "Deploy from a branch")
4. Salva le modifiche

### Workflow GitHub Actions

Il sito viene deployato automaticamente tramite GitHub Actions quando si fa push sul branch `main`. Il workflow:

1. Installa Node.js 18
2. Installa le dipendenze npm
3. Builda il sito Astro
4. Deploya su GitHub Pages

### Troubleshooting

Se vedi errori Jekyll:
- Assicurati che GitHub Pages sia configurato per usare "GitHub Actions"
- Verifica che il file `.nojekyll` sia presente in `public/`
- Controlla che le permissions di GitHub Actions siano corrette

## 📊 Performance

- **Lighthouse Score**: 100/100
- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributi

I contributi sono benvenuti! Apri una issue o una pull request.

## 📄 Licenza

MIT License - vedi il file [LICENSE](LICENSE) per i dettagli.

---

Costruito con ❤️ usando [Astro](https://astro.build) e deployato su [GitHub Pages](https://pages.github.com/)
