---
layout: default
title: Chi Sono
---

<section class="about">
    <div class="container">
        <div class="about__header">
            <h1 class="about__title">Chi Sono</h1>
            <p class="about__subtitle">Tech Enthusiast, Hobby's Developer</p>
        </div>

        <div class="about__content">
            <div class="about__bio">
                <h2>La Mia Storia</h2>
                <p>
                    Ciao! Sono Emanuele Scarlata, un appassionato di tecnologia e sviluppo software. 
                    Ho iniziato il mio viaggio nel mondo della programmazione come hobby, esplorando 
                    diversi linguaggi e tecnologie per creare soluzioni innovative.
                </p>
                <p>
                    Mi piace sperimentare con nuove tecnologie e architetture, specialmente nel campo 
                    dell'intelligenza artificiale, dei sistemi distribuiti e dello sviluppo web moderno. 
                    Credo che la tecnologia debba essere accessibile e utile per tutti.
                </p>
            </div>

            <div class="about__philosophy">
                <h2>La Mia Filosofia</h2>
                <p>
                    Credo nell'importanza di scrivere codice pulito, ben documentato e scalabile. 
                    Ogni progetto è un'opportunità per imparare qualcosa di nuovo e migliorare le 
                    mie competenze tecniche.
                </p>
                <p>
                    Mi concentro su soluzioni che siano non solo funzionali, ma anche eleganti e 
                    user-friendly. L'esperienza utente è sempre al centro del mio processo di sviluppo.
                </p>
            </div>

            <div class="about__interests">
                <h2>Interessi e Passioni</h2>
                <div class="interests__grid">
                    <div class="interest-item">
                        <h3>🤖 Intelligenza Artificiale</h3>
                        <p>Studio e sviluppo di sistemi AI, machine learning e multi-agent systems.</p>
                    </div>
                    <div class="interest-item">
                        <h3>🌐 Sviluppo Web</h3>
                        <p>Creazione di applicazioni web moderne con React, Node.js e tecnologie cloud.</p>
                    </div>
                    <div class="interest-item">
                        <h3>🔧 Sistemi Embedded</h3>
                        <p>Esplorazione di kernel Linux, sistemi operativi e programmazione low-level.</p>
                    </div>
                    <div class="interest-item">
                        <h3>📚 Apprendimento Continuo</h3>
                        <p>Aggiornamento costante su nuove tecnologie e best practices.</p>
                    </div>
                </div>
            </div>

            <div class="about__goals">
                <h2>Obiettivi</h2>
                <ul>
                    <li>Contribuire a progetti open source significativi</li>
                    <li>Condividere conoscenze attraverso il blog e la community</li>
                    <li>Sviluppare soluzioni innovative per problemi reali</li>
                    <li>Migliorare costantemente le mie competenze tecniche</li>
                    <li>Collaborare con altri sviluppatori e imparare dalle loro esperienze</li>
                </ul>
            </div>

            <div class="about__cta">
                <h2>Collaboriamo?</h2>
                <p>
                    Se sei interessato a collaborare su progetti interessanti o vuoi semplicemente 
                    fare una chiacchierata sulla tecnologia, non esitare a contattarmi!
                </p>
                <a href="{{ '/contact' | relative_url }}" class="btn btn--primary">Contattami</a>
            </div>
        </div>
    </div>
</section>

<style>
.about {
    padding: 4rem 0;
}

.about__header {
    text-align: center;
    margin-bottom: 4rem;
}

.about__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.about__subtitle {
    font-size: 1.25rem;
    color: var(--primary-color);
    font-weight: 600;
}

.about__content {
    max-width: 800px;
    margin: 0 auto;
}

.about__content h2 {
    color: var(--text-primary);
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
}

.about__content p {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
}

.interests__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.interest-item {
    background-color: var(--bg-secondary);
    padding: 2rem;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.interest-item h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.interest-item p {
    color: var(--text-secondary);
    margin-bottom: 0;
}

.about__goals ul {
    list-style: none;
    padding: 0;
}

.about__goals li {
    padding: 0.75rem 0;
    padding-left: 2rem;
    position: relative;
    color: var(--text-secondary);
    font-size: 1.125rem;
}

.about__goals li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

.about__cta {
    text-align: center;
    margin-top: 4rem;
    padding: 3rem;
    background-color: var(--bg-secondary);
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.about__cta h2 {
    margin-top: 0;
}

.about__cta p {
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .about__title {
        font-size: 2rem;
    }
    
    .interests__grid {
        grid-template-columns: 1fr;
    }
    
    .about__cta {
        padding: 2rem 1rem;
    }
}
</style> 