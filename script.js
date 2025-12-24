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

function initContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupérer les valeurs des champs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Réinitialiser les messages d'erreur
        clearErrors();
        
        // Validation
        let isValid = true;
        
        if (name.length < 2) {
            showError('name', 'Le nom doit contenir au moins 2 caractères');
            isValid = false;
        }
        
        if (!isValidEmail(email)) {
            showError('email', 'Veuillez entrer une adresse email valide');
            isValid = false;
        }
        
        if (message.length < 10) {
            showError('message', 'Le message doit contenir au moins 10 caractères');
            isValid = false;
        }
        
        // Si validation OK
        if (isValid) {
            // Simulation d'envoi (à remplacer par votre logique backend)
            formStatus.textContent = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
            formStatus.className = 'form-status success';
            
            // Réinitialiser le formulaire
            form.reset();
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            formStatus.textContent = 'Veuillez corriger les erreurs ci-dessus';
            formStatus.className = 'form-status error';
        }
    });
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
    initContactForm();
    
    // Définir l'année courante
    setCurrentYear();
    
    // Initialiser le scroll smooth
    initSmoothScroll();
});