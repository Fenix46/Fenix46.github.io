---
layout: default
title: Progetti
---

<section class="projects-page">
    <div class="container">
        <div class="projects__header">
            <h1 class="projects__title">I Miei Progetti</h1>
            <p class="projects__subtitle">
                Una raccolta dei progetti che ho sviluppato, dai sistemi AI ai tool CLI, 
                fino ai sistemi embedded e applicazioni web.
            </p>
        </div>

        <!-- Filtri -->
        <div class="projects__filters">
            <div class="filter-group">
                <label for="category-filter">Categoria:</label>
                <select id="category-filter" class="filter-select">
                    <option value="all">Tutte le categorie</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="CLI/Tools">CLI/Tools</option>
                    <option value="Systems">Systems</option>
                    <option value="Web App">Web App</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label for="status-filter">Stato:</label>
                <select id="status-filter" class="filter-select">
                    <option value="all">Tutti gli stati</option>
                    <option value="active">Attivo</option>
                    <option value="legacy">Legacy</option>
                </select>
            </div>
        </div>

        <!-- Grid Progetti -->
        <div class="projects__grid" id="projects-grid">
            {% for project in site.projects %}
            <article class="project-card" data-category="{{ project.category }}" data-status="{{ project.status }}">
                <div class="project-card__header">
                    <div class="project-card__image">
                        <div class="project-card__placeholder">{{ project.emoji }}</div>
                    </div>
                    <div class="project-card__badges">
                        {% if project.featured %}
                        <span class="badge badge--featured">⭐ Featured</span>
                        {% endif %}
                        {% if project.status == 'legacy' %}
                        <span class="badge badge--legacy">📚 Legacy</span>
                        {% endif %}
                        {% if project.github %}
                        <span class="badge badge--opensource">🔓 Open Source</span>
                        {% endif %}
                    </div>
                </div>
                
                <div class="project-card__content">
                    <h3 class="project-card__title">{{ project.title }}</h3>
                    <p class="project-card__description">{{ project.description }}</p>
                    
                    <div class="project-card__tech">
                        {% for tech in project.tech limit: 4 %}
                        <span class="tech-tag">{{ tech }}</span>
                        {% endfor %}
                        {% if project.tech.size > 4 %}
                        <span class="tech-tag">+{{ project.tech.size | minus: 4 }}</span>
                        {% endif %}
                    </div>
                    
                    <div class="project-card__links">
                        {% if project.github %}
                        <a href="{{ project.github }}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        {% endif %}
                        {% if project.demo %}
                        <a href="{{ project.demo }}" class="project-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        {% endif %}
                        <a href="{{ project.url }}" class="project-link">
                            <i class="fas fa-info-circle"></i> Dettagli
                        </a>
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>

        <!-- Messaggio Nessun Progetto -->
        <div class="projects__empty" id="projects-empty" style="display: none;">
            <div class="empty-state">
                <div class="empty-state__icon">🔍</div>
                <h3>Nessun progetto trovato</h3>
                <p>Prova a modificare i filtri per vedere più progetti.</p>
            </div>
        </div>
    </div>
</section>

<style>
.projects-page {
    padding: 4rem 0;
}

.projects__header {
    text-align: center;
    margin-bottom: 3rem;
}

.projects__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.projects__subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.projects__filters {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-group label {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.875rem;
}

.filter-select {
    padding: 0.5rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.875rem;
    min-width: 150px;
}

.projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.project-card {
    background-color: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.project-card__header {
    position: relative;
}

.project-card__image {
    height: 200px;
    background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-card__placeholder {
    font-size: 4rem;
}

.project-card__badges {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge--featured {
    background-color: var(--accent-color);
    color: white;
}

.badge--legacy {
    background-color: var(--text-light);
    color: white;
}

.badge--opensource {
    background-color: var(--primary-color);
    color: white;
}

.project-card__content {
    padding: 1.5rem;
}

.project-card__title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
}

.project-card__description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.project-card__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tech-tag {
    background-color: var(--bg-tertiary);
    color: var(--text-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
}

.project-card__links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.project-link {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s ease;
}

.project-link:hover {
    color: var(--secondary-color);
}

.projects__empty {
    text-align: center;
    padding: 4rem 0;
}

.empty-state {
    max-width: 400px;
    margin: 0 auto;
}

.empty-state__icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.empty-state h3 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.empty-state p {
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .projects__title {
        font-size: 2rem;
    }
    
    .projects__filters {
        flex-direction: column;
        align-items: center;
    }
    
    .projects__grid {
        grid-template-columns: 1fr;
    }
    
    .project-card__badges {
        position: static;
        margin: 1rem;
        justify-content: center;
    }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category-filter');
    const statusFilter = document.getElementById('status-filter');
    const projectsGrid = document.getElementById('projects-grid');
    const projectsEmpty = document.getElementById('projects-empty');
    const projectCards = document.querySelectorAll('.project-card');

    function filterProjects() {
        const selectedCategory = categoryFilter.value;
        const selectedStatus = statusFilter.value;
        let visibleCount = 0;

        projectCards.forEach(card => {
            const category = card.dataset.category;
            const status = card.dataset.status;
            
            const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
            const statusMatch = selectedStatus === 'all' || status === selectedStatus;
            
            if (categoryMatch && statusMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Mostra/nascondi messaggio vuoto
        if (visibleCount === 0) {
            projectsGrid.style.display = 'none';
            projectsEmpty.style.display = 'block';
        } else {
            projectsGrid.style.display = 'grid';
            projectsEmpty.style.display = 'none';
        }
    }

    categoryFilter.addEventListener('change', filterProjects);
    statusFilter.addEventListener('change', filterProjects);
});
</script> 