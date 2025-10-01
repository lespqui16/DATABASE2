// Variable global para controlar la página actual
let currentPage = 'main';

// Función para inicializar la aplicación
function initializeApp() {
    createUnitsAndWeeks();
    createWeekPages();
    addEventListeners();
}

// Crear las unidades y semanas organizadas
function createUnitsAndWeeks() {
    const unitsContainer = document.getElementById('unitsContainer');
    
    // Limpiar contenedor primero
    unitsContainer.innerHTML = '';
    
    courseStructure.units.forEach(unit => {
        const unitDiv = document.createElement('div');
        unitDiv.className = 'units-container';
        
        const unitHeader = document.createElement('div');
        unitHeader.className = 'unit-header';
        unitHeader.innerHTML = `
            <div class="unit-title">UNIDAD ${unit.number}: ${unit.title}</div>
            <div class="unit-description">${unit.description}</div>
            <div class="progress-indicator">
                Progreso de la unidad: ${courseContent[unit.weeks[unit.weeks.length - 1]]?.progress || 0}%
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${courseContent[unit.weeks[unit.weeks.length - 1]]?.progress || 0}%"></div>
                </div>
            </div>
        `;
        
        const weeksGrid = document.createElement('div');
        weeksGrid.className = 'weeks-grid';
        
        unit.weeks.forEach(weekNumber => {
            const weekCard = createWeekCard(weekNumber);
            weeksGrid.appendChild(weekCard);
        });
        
        unitDiv.appendChild(unitHeader);
        unitDiv.appendChild(weeksGrid);
        unitsContainer.appendChild(unitDiv);
    });
}

// Crear una tarjeta de semana individual
function createWeekCard(weekNumber) {
    const weekCard = document.createElement('div');
    weekCard.className = 'week-card';
    weekCard.onclick = () => showWeekPage(weekNumber);
    
    const imageUrl = databaseImages[weekNumber - 1];
    const content = courseContent[weekNumber];
    
    weekCard.innerHTML = `
        <div class="week-card-image" style="background-image: url('${imageUrl}')">
            <div class="week-card-overlay">
                <div class="week-number">Semana ${weekNumber}</div>
            </div>
        </div>
        <div class="week-card-content">
            <div class="week-title">${content.title}</div>
            <div class="week-subtitle">${content.subtitle}</div>
        </div>
    `;
    
    return weekCard;
}

// Crear las páginas de contenido semanal
function createWeekPages() {
    const weekPagesContainer = document.getElementById('weekPages');
    
    for (let i = 1; i <= 16; i++) {
        if (!courseContent[i]) continue;
        
        const weekPage = document.createElement('div');
        weekPage.className = 'week-page';
        weekPage.id = `week-${i}`;
        
        const content = courseContent[i];
        const imageUrl = databaseImages[i - 1];
        
        weekPage.innerHTML = createWeekPageContent(i, content, imageUrl);
        weekPagesContainer.appendChild(weekPage);
    }
}

// Crear el contenido HTML de una página semanal
function createWeekPageContent(weekNumber, content, imageUrl) {
    return `
        <div class="week-content-container">
            <div class="week-hero" style="background-image: url('${imageUrl}')">
                <div class="week-hero-overlay">
                    <h2>Semana ${weekNumber}: ${content.title}</h2>
                    <p>${content.subtitle}</p>
                    <div class="progress-indicator" style="margin-top: 20px;">
                        Progreso acumulado: ${content.progress}%
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${content.progress}%"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="week-content">
                ${createSections(content.sections)}
                <div id="activities-week-${weekNumber}" class="activities-container-dynamic">
                    <!-- Las actividades se cargarán dinámicamente desde GitHub -->
                </div>
                ${createResourcesSection(content.resources)}
            </div>
        </div>
    `;
}

// Función para cargar actividades desde GitHub
async function loadActivitiesFromGitHub(weekNumber) {
    const container = document.getElementById(`activities-week-${weekNumber}`);
    if (!container) return;

    // Mostrar loading
    container.innerHTML = `
        <div class="content-section">
            <h3 class="section-title">
                <span class="section-icon">📝</span>
                Actividades de la Semana ${weekNumber}
            </h3>
            <div class="loading-activities">
                <p>Cargando actividades desde GitHub...</p>
            </div>
        </div>
    `;

    try {
        const files = await githubService.getWeekFiles(weekNumber);
        
        if (!files || files.length === 0) {
            container.innerHTML = `
                <div class="content-section">
                    <h3 class="section-title">
                        <span class="section-icon">📝</span>
                        Actividades de la Semana ${weekNumber}
                    </h3>
                    <div class="no-activities">
                        <p>No se encontraron archivos para esta semana en el repositorio.</p>
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = createGitHubActivitiesSection(weekNumber, files);
        
    } catch (error) {
        const message = (error && error.message) ? error.message : 'Error desconocido';
        container.innerHTML = `
            <div class="content-section">
                <h3 class="section-title">
                    <span class="section-icon">📝</span>
                    Actividades de la Semana ${weekNumber}
                </h3>
                <div class="error-activities">
                    <p>Error al cargar actividades: ${message}</p>
                </div>
            </div>
        `;
    }
}

// Crear sección de actividades con archivos de GitHub (solo vista previa)
function createGitHubActivitiesSection(weekNumber, files) {
    return `
        <div class="content-section">
            <h3 class="section-title">
                <span class="section-icon">📝</span>
                Actividades de la Semana ${weekNumber}
            </h3>
            <div class="activities-container">
                ${files.map(file => `
                    <div class="activity-card">
                        <div class="activity-icon">
                            ${getActivityIcon(file.type)}
                        </div>
                        <div class="activity-content">
                            <div class="activity-title">${file.name}</div>
                            <div class="activity-description">Archivo ${file.type.toUpperCase()} - ${file.size}</div>
                            <div class="activity-type">${file.type.toUpperCase()}</div>
                        </div>
                        <div class="activity-actions">

                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="activities-footer">
                <button class="github-btn" onclick="visitGitHub(${weekNumber})">Abrir carpeta en GitHub</button>
            </div>
        </div>
    `;
}

// Cargar archivos para todas las semanas
async function loadGitHubFilesForAllWeeks() {
    for (let week = 1; week <= 16; week++) {
        // Cargar en segundo plano
        loadActivitiesFromGitHub(week);
    }
}

// Crear las secciones de contenido
function createSections(sections) {
    if (!sections || sections.length === 0) return '';
    
    return sections.map(section => `
        <div class="content-section">
            <h3 class="section-title">
                <span class="section-icon">${section.icon}</span>
                ${section.title}
            </h3>
            <div class="content-list">
                <ul>
                    ${section.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Crear la sección de recursos
function createResourcesSection(resources) {
    if (!resources || resources.length === 0) return '';
    
    return `
        <div class="content-section">
            <h3 class="section-title">
                <span class="section-icon">📚</span>
                Recursos y Materiales
            </h3>
            <div class="resources-grid">
                ${resources.map(resource => `
                    <div class="resource-card">
                        <div class="resource-title">${resource.title}</div>
                        <div class="resource-description">${resource.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Función auxiliar para obtener el icono de actividad
function getActivityIcon(type) {
    const icons = {
        'pdf': '📄',
        'ppt': '📊',
        'doc': '📃',
        'sql': '🗃️',
        'json': '📋',
        'xlsx': '📈',
        'txt': '📝',
        'image': '🖼️',
        'file': '📁'
    };
    return icons[type] || '📁';
}

// Mostrar página de semana específica
function showWeekPage(weekNumber) {
    console.log('Mostrando semana:', weekNumber);
    
    const mainPage = document.getElementById('mainPage');
    const weekPage = document.getElementById(`week-${weekNumber}`);
    const backNav = document.getElementById('backNav');
    const weekPages = document.getElementById('weekPages');
    
    if (!weekPage) {
        console.error(`Página de semana ${weekNumber} no encontrada`);
        return;
    }
    
    // Asegurar contenedor de semanas visible
    if (weekPages) {
        weekPages.style.display = 'block';
    }

    // Ocultar barra superior
    const topContainer = document.querySelector('.top-container');
    if (topContainer) {
        topContainer.style.display = 'none';
    }

    // Desactivar cualquier semana activa previa
    document.querySelectorAll('.week-page.active').forEach(p => p.classList.remove('active'));
    
    // Ocultar página principal con transición
    mainPage.classList.add('slide-out');
    
    setTimeout(() => {
        mainPage.style.display = 'none';
        
        // Mostrar página de semana
        weekPage.classList.add('active');
        backNav.style.display = 'block';
        
        currentPage = `week-${weekNumber}`;
        
        // Forzar carga de actividades de GitHub para esta semana
        try {
            if (typeof loadActivitiesFromGitHub === 'function') {
                loadActivitiesFromGitHub(weekNumber);
            } else {
                console.warn('loadActivitiesFromGitHub no está disponible');
            }
        } catch (err) {
            console.error('Error al cargar actividades para la semana', weekNumber, err);
        }
        
        // Scroll al inicio
        window.scrollTo(0, 0);
    }, 250);
}

// Función modificada goToMain para integración con menú superior
function goToMain() {
    const mainPage = document.getElementById('mainPage');
    const currentWeekPage = document.querySelector('.week-page.active');
    const backNav = document.getElementById('backNav');
    const weekPages = document.getElementById('weekPages');
    const bannerSection = document.getElementById("bannerSection");
    const inicioContent = document.getElementById("inicioContent");
    const footer = document.querySelector(".main-footer");
    const container = document.querySelector(".container");
    
    console.log('Volviendo al main desde semana...');
    
    if (currentWeekPage) {
        // Ocultar página actual de semana
        currentWeekPage.classList.remove('active');
        
        setTimeout(() => {
            // Ocultar navegación de regreso
            backNav.style.display = 'none';
            
            // Mostrar barra superior nuevamente
            const topContainer = document.querySelector('.top-container');
            if (topContainer) {
                topContainer.style.display = 'flex';
            }
            
            // Mostrar página principal del portafolio
            mainPage.style.display = 'block';
            mainPage.classList.remove('slide-out');
            
            // Asegurar que el container esté visible (para portafolio)
            container.style.display = 'block';
            
            // Asegurar que el contenido de inicio esté oculto
            bannerSection.classList.add('hidden');
            inicioContent.classList.add('hidden');
            footer.classList.add('hidden');
            
            // CORRECCIÓN: classlist -> classList
            document.querySelectorAll(".menu-item").forEach(i => i.classList.remove('active'));
            document.querySelector('.menu-item[data-section="portafolio"]').classList.add('active');
            
            // Scroll al inicio
            window.scrollTo(0, 0);
            
            console.log('Volvió correctamente al portafolio');
        }, 250);
    }
}

// Función para visitar GitHub
function visitGitHub(weekNumber) {
    const repoUrl = `https://github.com/lespqui16/DATABASE2/tree/main/semana${weekNumber.toString().padStart(2, '0')}`;
    window.open(repoUrl, '_blank');
}

// Agregar event listeners
function addEventListeners() {
    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && currentPage !== 'main') {
            goToMain();
        }
    });
    
    // Prevenir zoom accidental en móviles
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Smooth scrolling para dispositivos móviles
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

// Función de utilidad para debugging
function debugInfo() {
    console.log('Current page:', currentPage);
    console.log('Course structure:', courseStructure);
    console.log('Total weeks loaded:', Object.keys(courseContent).length);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    console.log('Base de Datos 2 - UPLA application initialized');
});

// Exportar funciones para uso global
window.createUnitsAndWeeks = createUnitsAndWeeks;
window.createWeekPages = createWeekPages;
window.showWeekPage = showWeekPage;
window.goToMain = goToMain;
window.visitGitHub = visitGitHub;
window.loadGitHubFilesForAllWeeks = loadGitHubFilesForAllWeeks;
window.loadActivitiesFromGitHub = loadActivitiesFromGitHub;