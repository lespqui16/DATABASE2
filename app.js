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
                ${createActivitiesSection(weekNumber, content.activities)}
                ${createResourcesSection(content.resources)}
            </div>
        </div>
    `;
}

// Crear las secciones de contenido
function createSections(sections) {
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

// Crear la sección de actividades
function createActivitiesSection(weekNumber, activities) {
    return `
        <div class="content-section">
            <h3 class="section-title">
                <span class="section-icon">📝</span>
                Actividades de la Semana ${weekNumber}
            </h3>
            <div class="activities-container">
                ${activities.map(activity => `
                    <div class="activity-card">
                        <div class="activity-icon">
                            ${getActivityIcon(activity.type)}
                        </div>
                        <div class="activity-content">
                            <div class="activity-title">${activity.title}</div>
                            <div class="activity-description">${activity.description}</div>
                            <div class="activity-type">${activity.type.toUpperCase()} • ${activity.size || 'N/A'}</div>
                        </div>
                        <div class="activity-actions">
                            <button class="preview-btn" onclick="previewFile(${weekNumber}, '${activity.filename}')">
                                👁️ Vista previa
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="github-section">
                <button class="github-btn" onclick="visitGitHub(${weekNumber})">
                    <span>🔗</span>
                    Ver en GitHub - Semana ${weekNumber}
                </button>
            </div>
        </div>
    `;
}


function previewFile(weekNumber, filename) {
    const baseUrl = "https://raw.githubusercontent.com/lespqui16/DATABASE2/main";
    const weekFolder = `semana${weekNumber.toString().padStart(2, '0')}`;
    const fileUrl = `${baseUrl}/${weekFolder}/${filename}`;

    // Mostrar modal
    const modal = document.getElementById("previewModal");
    const frame = document.getElementById("previewFrame");

    frame.src = getPreviewUrl(fileUrl, filename); 
    modal.style.display = "block";
}

// Cerrar modal
function closePreview() {
    const modal = document.getElementById("previewModal");
    const frame = document.getElementById("previewFrame");
    frame.src = "";
    modal.style.display = "none";
}

// Determinar URL de vista previa según tipo de archivo
function getPreviewUrl(fileUrl, filename) {
    const ext = filename.split('.').pop().toLowerCase();

    if (ext === "pdf") {
        return fileUrl; // PDF se muestra directo
    } else if (["doc", "docx", "ppt", "pptx", "xls", "xlsx"].includes(ext)) {
        return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`;
    } else if (["png", "jpg", "jpeg", "gif"].includes(ext)) {
        return fileUrl; // Imágenes directo
    } else if (["sql", "json", "txt", "js", "css", "html"].includes(ext)) {
        return `https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`;
    } else {
        return fileUrl; // fallback: abrir directo
    }
}

// Crear la sección de recursos
function createResourcesSection(resources) {
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
        'xlsx': '📈'
    };
    return icons[type] || '📁';
}

// Mostrar página de semana específica
function showWeekPage(weekNumber) {
    const mainPage = document.getElementById('mainPage');
    const weekPage = document.getElementById(`week-${weekNumber}`);
    const backNav = document.getElementById('backNav');
    
    if (!weekPage) {
        console.error(`Página de semana ${weekNumber} no encontrada`);
        return;
    }
    
    // Ocultar página principal con transición
    mainPage.classList.add('slide-out');
    
    setTimeout(() => {
        mainPage.style.display = 'none';
        
        // Mostrar página de semana
        weekPage.classList.add('active');
        backNav.style.display = 'block';
        
        currentPage = `week-${weekNumber}`;
        
        // Scroll al inicio
        window.scrollTo(0, 0);
    }, 250);
}

// Volver a la página principal
function goToMain() {
    const mainPage = document.getElementById('mainPage');
    const currentWeekPage = document.querySelector('.week-page.active');
    const backNav = document.getElementById('backNav');
    
    if (currentWeekPage) {
        // Ocultar página actual
        currentWeekPage.classList.remove('active');
        
        setTimeout(() => {
            // Mostrar página principal
            mainPage.style.display = 'block';
            mainPage.classList.remove('slide-out');
            backNav.style.display = 'none';
            
            currentPage = 'main';
            
            // Scroll al inicio
            window.scrollTo(0, 0);
        }, 250);
    }
}


// Función para visitar GitHub
function visitGitHub(weekNumber) {
    // Cambiar por la URL real de tu repositorio
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

// Exportar funciones para uso global (opcional)
window.baseDataApp = {
    goToMain,
    showWeekPage,
    downloadFile,
    visitGitHub,
    debugInfo
};