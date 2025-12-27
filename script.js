// ========================================
// DONNÉES DES PROJETS
// ========================================

/* 
   Pour ajouter un nouveau projet, ajoutez simplement un objet dans ce tableau
   avec les propriétés suivantes :
   - title: Titre du projet
   - description: Description courte du projet
   - image: URL de l'image (ou chemin vers votre image)
   - link: Lien vers le projet (optionnel, mettre "#" si pas de lien)
*/

const projects = [
    {
        title: "Site E-commerce Mode",
        description: "Plateforme de vente en ligne complète avec gestion des stocks, paiements sécurisés et interface administrateur intuitive.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
        link: "#"
    },
    {
        title: "Application de Gestion RH",
        description: "Solution web pour la gestion des employés, absences, congés et évaluations de performance avec tableaux de bord analytiques.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        link: "#"
    },
    {
        title: "Automatisation Workflow Marketing",
        description: "Système d'automatisation des campagnes email, génération de rapports et synchronisation multi-plateformes.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        link: "#"
    },
    {
        title: "Application Mobile Fitness",
        description: "App mobile de suivi d'entraînement avec plans personnalisés, tracking de progression et communauté intégrée.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
        link: "#"
    },
    {
        title: "Portail Client B2B",
        description: "Interface sécurisée pour la gestion des commandes, facturation et support client avec API REST complète.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        link: "#"
    },
    {
        title: "Outil de Reporting Automatisé",
        description: "Génération automatique de rapports financiers et analytiques avec intégration aux systèmes comptables existants.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        link: "#"
    },
    {
        title: "Application Mobile Cnyts Multi Services",
        description: "Application mobile permettant d'enregistrer des operations de transations financiéres.",
        image: "img/cnyts.png",
        link: "#"
    },
    {
        title: "site web Domtech",
        description: "DOMTECH propose des solutions innovantes en climatisation, réfrigération et énergie pour le confort et performance énergétique.",
        image: " img/domtech site.png",
        link: "#"
    },
];

// ========================================
// FONCTION D'AFFICHAGE DES PROJETS
// ========================================

function displayProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container) return;
    
    // Vider le conteneur avant de le remplir
    container.innerHTML = '';
    
    // Parcourir tous les projets et créer les cartes
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                ${project.link && project.link !== '#' ? `<a href="${project.link}" class="project-link" target="_blank">Voir le projet</a>` : ''}
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// ========================================
// DONNÉES DES ARTICLES DE BLOG
// ========================================
// ========================================
// DONNÉES DES ARTICLES DE BLOG
// ========================================

const blogPosts = [
    {
        title: "Les tendances du développement web en 2025",
        category: "Développement Web",
        excerpt: "Découvrez les technologies et frameworks qui domineront le développement web cette année : IA, WebAssembly, et plus encore.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
        date: "26 Déc 2024",
        link: "articles/tendance-du-dev-web.html"
    },
    /*
    {
        title: "Comment automatiser vos processus métier",
        category: "Automatisation",
        excerpt: "Guide complet pour identifier et automatiser les tâches répétitives dans votre entreprise et gagner en productivité.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        date: "20 Déc 2024",
        link: "#"
    },
    */
    {
        title: "React vs Vue.js : Quel framework choisir en 2025 ?",
        category: "Développement",
        excerpt: "Comparaison détaillée des deux frameworks JavaScript les plus populaires pour vous aider à faire le bon choix.",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop",
        date: "15 Déc 2024",
        link: "articles/react-vs-juejs.html"
    },
    /*
    {
        title: "L'IA dans le développement web : opportunités et défis",
        category: "Intelligence Artificielle",
        excerpt: "Comment l'intelligence artificielle transforme la façon dont nous créons et maintenons les applications web modernes.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
        date: "10 Déc 2024",
        link: "#"
    },
    /*
    {
        title: "Optimiser la performance de votre site web",
        category: "Performance",
        excerpt: "Techniques avancées pour améliorer la vitesse de chargement et l'expérience utilisateur de vos applications web.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        date: "5 Déc 2024",
        link: "#"
    },
    */
    /*
    {
        title: "Sécurité web : les meilleures pratiques 2025",
        category: "Sécurité",
        excerpt: "Protégez vos applications contre les menaces modernes avec ces techniques de sécurité éprouvées.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
        date: "1 Déc 2024",
        link: "#"
    }
    */
];
// ========================================
// NAVIGATION ACTIVE
// ========================================

function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Dans l'initialisation, ajoutez :
document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
    displayBlogPosts();
    initMobileMenu();
    setCurrentYear();
    initSmoothScroll();
    initActiveNavigation(); // <- AJOUTEZ CETTE LIGNE
});
// ========================================
// CARROUSEL BLOG AUTOMATIQUE
// ========================================

let currentSlide = 0;
let carouselInterval;
let isDragging = false;

function displayBlogPosts() {
    const container = document.getElementById('blog-container');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (!container) return;
    
    // Vider les conteneurs
    container.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';
    
    // Créer les cartes de blog
    blogPosts.forEach((post, index) => {
        const blogCard = document.createElement('article');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <a href="${post.link}" class="blog-link">Lire la suite →</a>
                </div>
            </div>
        `;
        
        container.appendChild(blogCard);
        
        // Créer les points indicateurs
        if (dotsContainer) {
            const dot = document.createElement('span');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        }
    });
    
    // Initialiser le carrousel
    initCarousel();
}

function initCarousel() {
    const container = document.getElementById('blog-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!container) return;
    
    // Démarrer le défilement automatique
    startAutoplay();
    
    // Arrêter au survol
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
    
    // Navigation par boutons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            previousSlide();
            startAutoplay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        });
    }
    
    // Navigation tactile (swipe) pour mobile
    let startX = 0;
    let currentX = 0;
    
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        stopAutoplay();
    });
    
    container.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX;
    });
    
    container.addEventListener('touchend', () => {
        const diff = startX - currentX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                previousSlide();
            }
        }
        
        startAutoplay();
    });
}

function startAutoplay() {
    stopAutoplay(); // Éviter les doublons
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Change toutes les 3 secondes (modifiable)
}

function stopAutoplay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % blogPosts.length;
    updateCarousel();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + blogPosts.length) % blogPosts.length;
    updateCarousel();
}

function goToSlide(index) {
    stopAutoplay();
    currentSlide = index;
    updateCarousel();
    startAutoplay();
}

function updateCarousel() {
    const container = document.getElementById('blog-container');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!container) return;
    
    // Calculer le décalage
    const cardWidth = 350; // Largeur de la carte + gap
    const gap = 35;
    const offset = currentSlide * (cardWidth + gap);
    
    // Appliquer la transformation
    container.style.transform = `translateX(-${offset}px)`;
    
    // Mettre à jour les indicateurs
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    displayProjects();
    displayBlogPosts(); // Initialise le carrousel automatique
    initMobileMenu();
    setCurrentYear();
    initSmoothScroll();
});
// ========================================
// NAVIGATION MOBILE
// ========================================

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (!menuToggle || !navMenu) return;
    
    // Toggle du menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Fermer le menu lors du clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ========================================
// VALIDATION DU FORMULAIRE DE CONTACT
// ========================================

// ========================================
// GESTION DU FORMULAIRE DE CONTACT
// ========================================
/*
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (!form || !successMessage) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Récupérer le bouton
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Désactiver le bouton pendant l'envoi
        submitBtn.disabled = true;
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline';
        
        // Récupérer les données du formulaire
        const formData = new FormData(form);
        
        try {
            // Envoyer les données à FormSubmit
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Masquer le formulaire
                form.style.display = 'none';
                
                // Afficher le message de succès
                successMessage.style.display = 'block';
                
                // Scroll vers le message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Réinitialiser le formulaire
                form.reset();
                
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
            
        } catch (error) {
            alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
            console.error('Erreur:', error);
        } finally {
            // Réactiver le bouton
            submitBtn.disabled = false;
            if (btnText) btnText.style.display = 'inline';
            if (btnLoading) btnLoading.style.display = 'none';
        }
    });
}
*/
// Fonction pour réafficher le formulaire
function resetForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (form && successMessage) {
        successMessage.style.display = 'none';
        form.style.display = 'block';
        form.reset();
        
        // Scroll vers le formulaire
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
// ========================================
// renvoi du formulaire
// ========================================
function resetForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    successMessage.style.display = 'none';
    form.style.display = 'block';
    form.reset();
    
    // Nettoyer l'URL
    window.history.replaceState({}, document.title, window.location.pathname + '#contact');
}
// ========================================
// FONCTIONS UTILITAIRES DE VALIDATION
// ========================================

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorSpan = field.parentElement.querySelector('.error-message');
    
    if (errorSpan) {
        errorSpan.textContent = message;
        field.style.borderColor = '#dc2626';
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    errorMessages.forEach(error => error.textContent = '');
    inputs.forEach(input => input.style.borderColor = '');
    
    const formStatus = document.getElementById('form-status');
    if (formStatus) {
        formStatus.style.display = 'none';
    }
}

// ========================================
// ANNÉE DYNAMIQUE DANS LE FOOTER
// ========================================

function setCurrentYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// ========================================
// SCROLL SMOOTH POUR LES LIENS D'ANCRAGE
// ========================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Éviter le comportement par défaut seulement si l'ancre existe
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const offset = 80; // Hauteur de la navbar
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Afficher les projets
    displayProjects();
    
    // Initialiser le menu mobile
    initMobileMenu();
    
    // Initialiser le formulaire de contact
   // initContactForm();
    
    // Définir l'année courante
    setCurrentYear();
    
    // Initialiser le scroll smooth
    initSmoothScroll();
});