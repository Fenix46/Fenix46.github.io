---
layout: default
title: Contatti
---

<section class="contact-page">
    <div class="container">
        <div class="contact__header">
            <h1 class="contact__title">Contattami</h1>
            <p class="contact__subtitle">
                Hai un progetto interessante in mente? Vuoi collaborare o semplicemente 
                fare una chiacchierata sulla tecnologia? Non esitare a contattarmi!
            </p>
        </div>

        <div class="contact__content">
            <!-- Informazioni di Contatto -->
            <div class="contact__info">
                <h2>Come Raggiungermi</h2>
                
                <div class="contact__methods">
                    <div class="contact__method">
                        <div class="contact__icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact__details">
                            <h3>Email</h3>
                            <p>La forma più diretta per contattarmi</p>
                            <a href="mailto:{{ site.email }}" class="contact__link">
                                {{ site.email }}
                            </a>
                        </div>
                    </div>

                    <div class="contact__method">
                        <div class="contact__icon">
                            <i class="fab fa-github"></i>
                        </div>
                        <div class="contact__details">
                            <h3>GitHub</h3>
                            <p>Vedi i miei progetti e contributi</p>
                            <a href="https://github.com/Fenix46" class="contact__link" target="_blank" rel="noopener noreferrer">
                                github.com/Fenix46
                            </a>
                        </div>
                    </div>

                    <div class="contact__method">
                        <div class="contact__icon">
                            <i class="fab fa-linkedin"></i>
                        </div>
                        <div class="contact__details">
                            <h3>LinkedIn</h3>
                            <p>Connettiti professionalmente</p>
                            <a href="https://www.linkedin.com/in/emanuele-scarlata-b23300132/" class="contact__link" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/emanuele-scarlata
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form di Contatto -->
            <div class="contact__form-section">
                <h2>Invia un Messaggio</h2>
                <form class="contact__form" id="contact-form">
                    <div class="form-group">
                        <label for="name">Nome *</label>
                        <input type="text" id="name" name="name" required class="form-input">
                    </div>

                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required class="form-input">
                    </div>

                    <div class="form-group">
                        <label for="subject">Oggetto</label>
                        <select id="subject" name="subject" class="form-select">
                            <option value="">Seleziona un argomento</option>
                            <option value="collaboration">Collaborazione</option>
                            <option value="project">Progetto</option>
                            <option value="question">Domanda Tecnica</option>
                            <option value="other">Altro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="message">Messaggio *</label>
                        <textarea id="message" name="message" rows="6" required class="form-textarea" placeholder="Raccontami del tuo progetto o della tua idea..."></textarea>
                    </div>

                    <button type="submit" class="btn btn--primary">
                        <i class="fas fa-paper-plane"></i>
                        Invia Messaggio
                    </button>
                </form>
            </div>
        </div>

        <!-- FAQ -->
        <div class="contact__faq">
            <h2>Domande Frequenti</h2>
            <div class="faq__grid">
                <div class="faq-item">
                    <h3>Accetti progetti freelance?</h3>
                    <p>
                        Attualmente mi concentro sui miei progetti personali e open source. 
                        Tuttavia, sono sempre interessato a collaborazioni interessanti e 
                        progetti innovativi.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>Come posso contribuire ai tuoi progetti?</h3>
                    <p>
                        Tutti i miei progetti sono open source su GitHub. Puoi contribuire 
                        aprendo issue, suggerendo miglioramenti o inviando pull request.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>Offri mentoring o consulenza?</h3>
                    <p>
                        Mi piace condividere le mie conoscenze e aiutare altri sviluppatori. 
                        Contattami per discutere di opportunità di mentoring o consulenza.
                    </p>
                </div>

                <div class="faq-item">
                    <h3>Quali tecnologie preferisci?</h3>
                    <p>
                        Mi specializzo in React, Node.js, Python e sistemi AI. Tuttavia, 
                        sono sempre aperto a nuove tecnologie e sfide tecniche.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.contact-page {
    padding: 4rem 0;
}

.contact__header {
    text-align: center;
    margin-bottom: 4rem;
}

.contact__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.contact__subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.contact__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
}

.contact__info h2,
.contact__form-section h2 {
    color: var(--text-primary);
    margin-bottom: 2rem;
    font-size: 2rem;
}

.contact__methods {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact__method {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
}

.contact__icon {
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.contact__details h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
}

.contact__details p {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.contact__link {
    color: var(--primary-color);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;
}

.contact__link:hover {
    color: var(--secondary-color);
}

/* Form Styles */
.contact__form {
    background-color: var(--bg-secondary);
    padding: 2rem;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-primary);
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    font-size: 0.875rem;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

/* FAQ Styles */
.contact__faq {
    margin-top: 4rem;
}

.contact__faq h2 {
    text-align: center;
    color: var(--text-primary);
    margin-bottom: 3rem;
    font-size: 2rem;
}

.faq__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.faq-item {
    background-color: var(--bg-secondary);
    padding: 2rem;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
}

.faq-item h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.faq-item p {
    color: var(--text-secondary);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .contact__title {
        font-size: 2rem;
    }
    
    .contact__content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    
    .contact__method {
        flex-direction: column;
        text-align: center;
    }
    
    .contact__form {
        padding: 1.5rem;
    }
    
    .faq__grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simula invio del form
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // In un'implementazione reale, qui invieresti i dati a un server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Mostra messaggio di successo
            alert('Grazie per il tuo messaggio! Ti risponderò presto.');
            this.reset();
        });
    }
});
</script> 