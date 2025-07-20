---
layout: default
title: Blog
---

<section class="blog-page">
    <div class="container">
        <div class="blog__header">
            <h1 class="blog__title">Blog</h1>
            <p class="blog__subtitle">
                Articoli tecnici su React, Node.js, architetture software e best practices. 
                Condivido le mie esperienze e lezioni apprese nello sviluppo software.
            </p>
        </div>

        <!-- Filtri -->
        <div class="blog__filters">
            <div class="filter-group">
                <label for="tag-filter">Tag:</label>
                <select id="tag-filter" class="filter-select">
                    <option value="all">Tutti i tag</option>
                    <option value="react">React</option>
                    <option value="nodejs">Node.js</option>
                    <option value="ai">AI/ML</option>
                    <option value="architecture">Architettura</option>
                    <option value="tutorial">Tutorial</option>
                </select>
            </div>
        </div>

        <!-- Lista Articoli -->
        <div class="blog__grid" id="blog-grid">
            {% for post in site.posts %}
            <article class="blog-card" data-tags="{{ post.tags | join: ',' }}">
                <div class="blog-card__header">
                    <div class="blog-card__meta">
                        <time datetime="{{ post.date | date_to_xmlschema }}" class="blog-card__date">
                            {{ post.date | date: "%d %B %Y" }}
                        </time>
                        {% if post.tags %}
                        <div class="blog-card__tags">
                            {% for tag in post.tags limit: 2 %}
                            <span class="tag">{{ tag }}</span>
                            {% endfor %}
                            {% if post.tags.size > 2 %}
                            <span class="tag">+{{ post.tags.size | minus: 2 }}</span>
                            {% endif %}
                        </div>
                        {% endif %}
                    </div>
                </div>
                
                <div class="blog-card__content">
                    <h2 class="blog-card__title">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h2>
                    <p class="blog-card__excerpt">
                        {% if post.excerpt %}
                        {{ post.excerpt }}
                        {% else %}
                        {{ post.content | strip_html | truncatewords: 30 }}
                        {% endif %}
                    </p>
                    
                    <div class="blog-card__footer">
                        <a href="{{ post.url | relative_url }}" class="read-more">
                            Leggi l'articolo →
                        </a>
                        <span class="reading-time">
                            {% assign words = post.content | number_of_words %}
                            {% assign reading_time = words | divided_by: 200 | plus: 1 %}
                            {{ reading_time }} min read
                        </span>
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>

        <!-- Messaggio Nessun Articolo -->
        <div class="blog__empty" id="blog-empty" style="display: none;">
            <div class="empty-state">
                <div class="empty-state__icon">📝</div>
                <h3>Nessun articolo trovato</h3>
                <p>Prova a modificare i filtri per vedere più articoli.</p>
            </div>
        </div>

        <!-- Newsletter -->
        <div class="blog__newsletter">
            <div class="newsletter">
                <h3>Rimani Aggiornato</h3>
                <p>Iscriviti alla newsletter per ricevere i nuovi articoli direttamente nella tua email.</p>
                <form class="newsletter__form" id="newsletter-form">
                    <input type="email" placeholder="La tua email" required class="newsletter__input">
                    <button type="submit" class="btn btn--primary">Iscriviti</button>
                </form>
                <p class="newsletter__disclaimer">
                    Nessuno spam, solo contenuti di qualità. Puoi disiscriverti in qualsiasi momento.
                </p>
            </div>
        </div>
    </div>
</section>

<style>
.blog-page {
    padding: 4rem 0;
}

.blog__header {
    text-align: center;
    margin-bottom: 3rem;
}

.blog__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.blog__subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.blog__filters {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
}

.blog__grid {
    display: grid;
    gap: 2rem;
    margin-bottom: 4rem;
}

.blog-card {
    background-color: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 2rem;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
}

.blog-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.blog-card__header {
    margin-bottom: 1.5rem;
}

.blog-card__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.blog-card__date {
    color: var(--text-light);
    font-size: 0.875rem;
    font-weight: 500;
}

.blog-card__tags {
    display: flex;
    gap: 0.5rem;
}

.tag {
    background-color: var(--bg-tertiary);
    color: var(--text-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
}

.blog-card__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.blog-card__title a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.blog-card__title a:hover {
    color: var(--primary-color);
}

.blog-card__excerpt {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.blog-card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.read-more {
    color: var(--primary-color);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;
}

.read-more:hover {
    color: var(--secondary-color);
}

.reading-time {
    color: var(--text-light);
    font-size: 0.875rem;
}

.blog__empty {
    text-align: center;
    padding: 4rem 0;
}

.blog__newsletter {
    margin-top: 4rem;
}

.newsletter {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    padding: 3rem;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.newsletter h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.newsletter p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.newsletter__form {
    display: flex;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto 1rem;
    flex-wrap: wrap;
}

.newsletter__input {
    flex: 1;
    min-width: 200px;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    font-size: 0.875rem;
}

.newsletter__input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.newsletter__disclaimer {
    font-size: 0.875rem;
    color: var(--text-light);
    margin: 0;
}

@media (max-width: 768px) {
    .blog__title {
        font-size: 2rem;
    }
    
    .blog-card {
        padding: 1.5rem;
    }
    
    .blog-card__meta {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .blog-card__footer {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .newsletter {
        padding: 2rem 1rem;
    }
    
    .newsletter__form {
        flex-direction: column;
    }
    
    .newsletter__input {
        min-width: auto;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const tagFilter = document.getElementById('tag-filter');
    const blogGrid = document.getElementById('blog-grid');
    const blogEmpty = document.getElementById('blog-empty');
    const blogCards = document.querySelectorAll('.blog-card');

    function filterPosts() {
        const selectedTag = tagFilter.value;
        let visibleCount = 0;

        blogCards.forEach(card => {
            const tags = card.dataset.tags.toLowerCase();
            
            if (selectedTag === 'all' || tags.includes(selectedTag.toLowerCase())) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0) {
            blogGrid.style.display = 'none';
            blogEmpty.style.display = 'block';
        } else {
            blogGrid.style.display = 'grid';
            blogEmpty.style.display = 'none';
        }
    }

    tagFilter.addEventListener('change', filterPosts);

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simula iscrizione
            alert('Grazie per esserti iscritto! Riceverai presto i nostri aggiornamenti.');
            this.reset();
        });
    }
});
</script> 