# Emanuele Scarlata - Portfolio & Blog

Portfolio personale e blog tecnico costruito con Jekyll. Un sito moderno e responsive che presenta i miei progetti, competenze e articoli tecnici.

## 🚀 Caratteristiche

- **Design Moderno**: Interfaccia pulita e professionale ispirata a dev.to
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Performance**: Caricamento veloce e SEO ottimizzato
- **Blog Integrato**: Sistema di blog con filtri per tag
- **Portfolio Progetti**: Galleria progetti con filtri per categoria e stato
- **Contatti**: Form di contatto e informazioni professionali

## 🛠️ Tecnologie Utilizzate

- **Jekyll**: Static site generator
- **HTML/CSS**: Markup e styling personalizzato
- **JavaScript**: Interattività e filtri dinamici
- **Font Awesome**: Icone
- **Google Fonts**: Typography (Inter)

## 📁 Struttura del Progetto

```
far-field/
├── _config.yml          # Configurazione Jekyll
├── _layouts/            # Layout template
│   ├── default.html     # Layout principale
│   ├── post.html        # Layout post blog
│   └── project.html     # Layout progetti
├── _posts/              # Articoli blog
├── _projects/           # Progetti portfolio
├── assets/              # Asset statici
│   ├── css/             # Fogli di stile
│   ├── js/              # JavaScript
│   └── favicon.svg      # Favicon
├── about.html           # Pagina Chi Sono
├── projects.html        # Pagina Progetti
├── blog.html            # Pagina Blog
├── contact.html         # Pagina Contatti
└── index.html           # Homepage
```

## 🚀 Sviluppo Locale

### Prerequisiti

- Ruby 2.7 o superiore
- Bundler

### Installazione

1. **Clona il repository**
   ```bash
   git clone https://github.com/Fenix46/Fenix46.github.io.git
   cd Fenix46.github.io/far-field
   ```

2. **Installa le dipendenze**
   ```bash
   bundle install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   bundle exec jekyll serve
   ```

4. **Apri nel browser**
   ```
   http://localhost:4000
   ```

### Comandi Utili

```bash
# Build del sito
bundle exec jekyll build

# Build con watch (ricompila automaticamente)
bundle exec jekyll serve --watch

# Build per produzione
JEKYLL_ENV=production bundle exec jekyll build
```

## 📝 Personalizzazione

### Configurazione Base

Modifica `_config.yml` per personalizzare:

- **Informazioni personali**: Nome, email, social links
- **Competenze**: Categorie e tecnologie
- **SEO**: Meta tags e configurazioni

### Aggiungere Progetti

1. Crea un nuovo file in `_projects/` con estensione `.md`
2. Usa il front matter per configurare:

```yaml
---
layout: project
title: Nome Progetto
description: Descrizione breve
emoji: 🚀
featured: true
tech:
  - React
  - Node.js
  - TypeScript
github: https://github.com/username/project
demo: https://demo-url.com
category: Web App
status: active
---
```

### Aggiungere Post Blog

1. Crea un nuovo file in `_posts/` con formato `YYYY-MM-DD-titolo.md`
2. Usa il front matter:

```yaml
---
layout: post
title: "Titolo Articolo"
date: 2024-12-19
tags: [react, javascript, tutorial]
excerpt: "Breve descrizione dell'articolo"
---
```

### Personalizzazione Stili

- **Colori**: Modifica le variabili CSS in `assets/css/main.css`
- **Layout**: Personalizza i template in `_layouts/`
- **Componenti**: Aggiungi nuovi componenti in `_includes/`

## 🎨 Design System

### Colori

```css
--primary-color: #3b82f6    /* Blu principale */
--secondary-color: #1e40af  /* Blu scuro */
--accent-color: #f59e0b     /* Arancione */
--text-primary: #1f2937     /* Testo scuro */
--text-secondary: #6b7280   /* Testo grigio */
```

### Typography

- **Font**: Inter (Google Fonts)
- **Heading**: 600 weight
- **Body**: 400 weight
- **Line height**: 1.6

### Componenti

- **Buttons**: `.btn`, `.btn--primary`, `.btn--secondary`
- **Cards**: `.project-card`, `.blog-card`
- **Tags**: `.tag`, `.tech-tag`
- **Forms**: `.form-input`, `.form-select`

## 📱 Responsive Design

Il sito è ottimizzato per:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Breakpoints

```css
@media (max-width: 768px) {
  /* Stili mobile */
}
```

## 🔧 Funzionalità JavaScript

### Filtri Progetti

- Filtro per categoria
- Filtro per stato (attivo/legacy)
- Ricerca in tempo reale

### Filtri Blog

- Filtro per tag
- Calcolo tempo di lettura
- Newsletter signup

### Interattività

- Smooth scrolling
- Hover effects
- Form validation
- Copy code blocks

## 🚀 Deployment

### GitHub Pages

1. **Configura il repository**
   - Vai su Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /far-field

2. **Push del codice**
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

### Altri Hosting

Il sito può essere deployato su qualsiasi hosting statico:

- **Netlify**: Drag & drop della cartella `_site`
- **Vercel**: Import repository GitHub
- **AWS S3**: Upload della cartella `_site`

## 📊 Performance

### Ottimizzazioni

- **CSS/JS minificati** per produzione
- **Lazy loading** per immagini
- **Font optimization** con preload
- **SEO meta tags** completi

### Lighthouse Score Target

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🤝 Contribuire

1. Fork il repository
2. Crea un branch per la feature (`git checkout -b feature/nuova-feature`)
3. Commit le modifiche (`git commit -am 'Aggiungi nuova feature'`)
4. Push al branch (`git push origin feature/nuova-feature`)
5. Crea una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per dettagli.

## 📞 Contatti

- **Email**: scarlataemanuele@gmail.com
- **GitHub**: [@Fenix46](https://github.com/Fenix46)
- **LinkedIn**: [Emanuele Scarlata](https://www.linkedin.com/in/emanuele-scarlata-b23300132/)

---

⭐ Se ti piace questo progetto, lascia una stella su GitHub! 