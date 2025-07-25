const projects = {
    'rise-of-heroes': {
        title: 'Rise of Heroes',
        description: 'Multiplayer 4X Strategy Game - Panteon',
        image: 'Rise of Heroes',
        headerImage: 'images/projects/kop-header.png',
        details: `
            <h3>Project Overview</h3>
            <p>A 4X midcore strategy game that was pivoted to a vertical survival format at its final stage, requiring significant adaptation of core gameplay systems.</p>
            <p>The game's core loop involved large-scale MMO elements, including city-building, resource management, technology research, alliance formation, and empire expansion through combat</p>
            
            <h3>Project Details and My Contributions</h3>
            <p>Developed with a team of 30+ developers over the course of 4 years, from concept to release. As Client Developer, I was responsible for the core gameplay mechanics and implementing multiplayer systems.</p>
            <p>Key features I developed include: Alliance feature, Chat system, Event system, Chronicles, Troop/Army operations, Prologue, Onboarding Experience with and more features.</p>
            <p>Developed and improved key subsystems for use by other developers and for implementing features. Most notably, developed the Scene Subsystem which managed all map objects , resulting in a 40% increase in game FPS for the script loop compared to its old state.</p>
            <p>Developed various tools for designers and worked on different types of databases to be used by subsystems/UI controllers.</p>
            <p>Gained hands-on experience with a custom Entity Component System (ECS) solution, focusing on data-oriented development principles.</p>
        `
    },
    'arcane-arena': {
        title: 'Arcane Arena',
        description: 'PvP Multiplayer Tower Defense Game - Panteon',
        image: 'Arcane Arena',
        headerImage: 'images/projects/aa-header.png',
        details: `
            <h3>Project Overview</h3>
            <p>Arcane Arena is a highly competitive, multiplayer PvP Tower Defense game structured around real-time strategic deck building and card-based deployment. The core loop involves managing resources to strategically place defensive towers and utilizing specialized 'trick cards' for active, real-time disruption of an opponent's territory and progression on the global leaderboards.</p>

            <h3>Project Details and My Contributions</h3>
            <p>Developed with a team of 30+ developers. My focus was on implementing core game features, ensuring reliable multiplayer communication, and building scalable pipelines to facilitate rapid content creation in an early access environment.</p>
            <p>Key features I developed include: Multiplayer Systems, Network Communication Service, Tower Implementation Pipeline, VFX Implementation Pipeline, SaveData system, Leaderboards system and many more features.</p>
            <p>Tackled a highly ECS-dependent project, allowing me to build profound expertise in core ECS concepts, from optimized query design to complex entity relationship modeling.</p>
            <p>Contributed to team growth by providing technical guidance to teammates who are new to game development, focusing on best practices for ECS adoption and scalable system design.</p>
        `
    },
    'raid-rush': {
        title: 'Raid Rush',
        description: 'Tower Defense Game - Panteon',
        image: 'Raid Rush',
        headerImage: 'images/projects/rr-header.webp',
        details: `
            <h3>Project Overview</h3>
            <p>Raid Rush is a PvE Tower Defense game that utilizes a persistent deck-building mechanic. The core objective is purely defensive, requiring players to strategically select and deploy cards to summon and upgrade towers, managing the resulting resource economy to withstand escalating and persistent waves of enemy attacks.</p>
            
            <h3>Project Details and My Contributions</h3>
            <p>Provided dedicated technical support and feature backporting for this standalone title within a team of 30+ developers. My focus was on stabilizing live systems, and maintaining code health during the game's update phases.</p>
            <p>Key contributions centered on cross-project feature integration, successfully backporting core systems such as Leaderboards and Content Implementation Pipelines from similar projects.</p>
            <p>I also supported the live service by managing the full development cycle for multiple in-game events, ensuring smooth deployment and stable functionality. Additionally, I executed comprehensive bug fixing and stabilization across various legacy systems and delivered significant UI/UX improvements to enhance the overall player experience.</p>
        `
    },
    'atos': {
        title: 'ATOS',
        description: '2D/3D Simulation Puzzle Game - MagaraJam#3',
        image: 'ATOS',
        headerImage: 'images/projects/atos-header.png',
        details: `
            <div class="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kTZ_czd6OwY" title="ATOS Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>Project Overview</h3>
            <p>A unique simulation puzzle game created during MagaraJam#3, featuring innovative 2D/3D perspective mechanics and challenging puzzle elements.</p>
            
            <h3>Project Details and My Contributions</h3>
            <p>Developed over a 72-hour period as team of 5. I was the core Developer for the project, with contributing to main design elements of the game, and was responsible for implementing the game's central mechanics.</p>
            <p>My primary development focus was on realizing the core 2D/3D perspective system, including the intricate camera manipulation logic and the collision/interaction systems required to translate player actions across the different dimensional views. I also implemented the unique puzzle elements that drove the game's challenging nature. </p>
            <p>The game received <b>second place award</b> in the competition, and was praised for its innovative gameplay mechanics and visual style.</p>
        `
    },
    'last-session': {
        title: 'The Last Session',
        description: '2D DnD Simulator - MagaraJam#5',
        image: 'The Last Session',
        headerImage: 'images/projects/tls-title.png',
        details: `
            <div class="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Hro4atPtExo" title="The Last Session Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>Project Overview</h3>
            <p>A digital DnD simulator created during MagaraJam#5 2022, where you took place as a Dungeon Master and guide (or block) your players through a campaign.</p>
            
            <h3>Project Details and My Contributions</h3>
            <p>Developed over a 72-hour period as team of 5. I was the core Developer for the project, with contributing to main design elements of the game, and was responsible for implementing the game's central mechanics.</p>
            <p>My primary development focus was on developing the core DnD mechanics, including the dice rolling, resource management and spell system. I also implemented the stats system that used to calculate combat outcomes. </p>
            <p>The game received <b>sixth place award</b> in the competition, and was praised for its creative and challenging gameplay mechanics and fun gameplay loop.</p>
        `
    },
    'caretaker': {
        title: 'The Caretaker',
        description: '2D Platformer - MagaraJam2025',
        image: 'The Caretaker',
        headerImage: 'images/projects/caretaker.gif',
        details: `
            <div class="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zF33qI5Ki5E" title="The Caretaker Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>Project Overview</h3>
            <p>A 2D platformer created during MagaraJam2025, where you do even the basic platformer mechanics in a very creative way with puzzles and platforming elements.</p>
            
            <h3>Project Details and My Contributions</h3>
            <p>Developed over a 72-hour period as team of 5. I was the core Developer for the project, with contributing to main design elements of the game, and was responsible for implementing the game's central mechanics.</p>
            <p>My primary development focus was on developing the required systems to be used in he game, including the ability connection system, game and level controllers, level design tools and more.</p>
            <p>The game entered <b>the best 15 games of the competition</b>, and was praised for its unique, theme-centered gameplay mechanics and creative gameplay loop.</p>
        `
    },
    'beat-menace': {
        title: 'Beat Menace',
        description: '2.5D Rhythm Shooter - MagaraJam2023',
        image: 'Beat Menace',
        headerImage: 'images/projects/beat-menace.png',
        details: `
            <div class="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0PnuUpA74LY" title="Beat Menace Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>Project Overview</h3>
            <p>A 2.5D top-down shooter game created during MagaraJam2023, where you give input in a rhythm to boost your character and defeat enemies in this story driven game.</p>
            
            <h3>Project Details and My Contributions</h3>
            <p>Developed over a 72-hour period as team of 5. I was the core Developer for the project, with contributing to main design elements of the game, and was responsible for implementing the game's central mechanics.</p>
            <p>My primary development focus was on developing the required systems to be used in he game, including the rhythmic stat boost system (developed with FMOD), game and level controllers, story/dialogue/audio systems, and more.</p>
            <p>The game has featured in "Honorable Mentions" section of the MagaraJam 2023, and was praised for its addictive, creative and fun gameplay mechanics.</p>
        `
    },
    'judgement-day': {
        title: 'Judgement Day',
        description: 'Multiplayer Beat \'Em Up Mobile Game - University Project',
        image: 'Judgement Day',
        headerImage: 'images/projects/judgement-title.png',
        details: `
            <div class="project-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-b3pBoQtpwY" title="Judgement Day Gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>Project Overview</h3>
            <p>Judgement Day consists of a circular arena and multiple online players displayed from an angled top view. Every character selects different weapons and skills to use them in a last-man-standing kind of fight. Gameplay will be based on using those skills to eliminate the others with various styles. In the small arena with 4-5 players, the camera will follow the main player smoothly. When the player performs the skills, animations and particles related to these skills will play, and they will affect the targeted character.</p>
            
            <h3>Project Details and My Contributions</h3>
            <p>Developed as Game Development course project of Hacettepe University with a team of 3 in 2021. I was mostly responsible for the multiplayer interactions of the project</p>
            <p>The game uses Photon for multiplayer interactions.</p>
            <p>The game received more than the max score of the course.</p>
        `
    }
};

const companies = {
    'panteon': 'https://www.panteon.games/',
    'bytetyper': 'https://www.linkedin.com/company/bytetyper/'
};

const socialLinks = {
    'linkedin': 'https://www.linkedin.com/in/alperenaydas/',
    'github': 'https://github.com/alperenaydas',
    'youtube': 'https://www.youtube.com/@alpik44',
    'phone': 'tel:+905306787644'
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close');
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectModals();
    initializeExperienceLinks();
    initializeResumeFunctionality();
    initializeSocialLinks();
});

function initializeProjectModals() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProjectModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;
    
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalImage.src = project.headerImage || 'images/projects/default-header.png';
    modalImage.alt = project.title;
    modalDetails.innerHTML = project.details;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeProjectModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function initializeExperienceLinks() {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        item.addEventListener('click', function() {
            const companyId = this.getAttribute('data-company');
            const companyUrl = companies[companyId];
            
            if (companyUrl) {
                window.open(companyUrl, '_blank', 'noopener,noreferrer');
            }
        });
    });
}

function initializeResumeFunctionality() {
    
}

function initializeSocialLinks() {
    const socialLinksElements = document.querySelectorAll('.social-link');
    
    socialLinksElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const socialType = this.getAttribute('data-social');
            const socialUrl = socialLinks[socialType];
            
            if (socialUrl) {
                if (socialType === 'phone') {
                    window.location.href = socialUrl;
                } else {
                    window.open(socialUrl, '_blank', 'noopener,noreferrer');
                }
            }
        });
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function addLoadingState(element) {
    element.classList.add('loading');
}

function removeLoadingState(element) {
    element.classList.remove('loading');
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

window.addEventListener('resize', function() {
    if (window.innerWidth < 768 && modal.style.display === 'block') {
        closeProjectModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('project-card')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();
