// main.js - Integración con menú superior y funcionalidad existente
document.addEventListener("DOMContentLoaded", () => {
    // Ocultar el container principal al cargar la página
    const container = document.querySelector(".container");
    const bannerSection = document.getElementById("bannerSection");
    const inicioContent = document.getElementById("inicioContent");
    const footer = document.querySelector(".main-footer");
    
    // Asegurar que solo se vea el contenido de inicio al cargar
    bannerSection.classList.remove('hidden');
    inicioContent.classList.remove('hidden');
    footer.classList.remove('hidden');
    container.style.display = 'none';

    // Inicializar la aplicación principal
    if (typeof initializeApp === 'function') {
        initializeApp();
    }
    
    const sections = {
        "inicio": () => {
            console.log('Cargando sección: INICIO');
            
            // Mostrar barra superior
            const topContainer = document.querySelector('.top-container');
            if (topContainer) {
                topContainer.style.display = 'flex';
            }
            
            // Mostrar banner, contenido de inicio y footer
            bannerSection.classList.remove('hidden');
            inicioContent.classList.remove('hidden');
            footer.classList.remove('hidden');
            container.style.display = 'none';
            
            // Ocultar navegación de regreso
            const backNav = document.getElementById('backNav');
            backNav.style.display = 'none';
            
            // Limpiar cualquier contenido previo del container
            const mainPage = document.getElementById('mainPage');
            mainPage.innerHTML = '';
            
            // Ocultar páginas de semanas y desactivar activas
            const weekPages = document.getElementById('weekPages');
            weekPages.style.display = 'none';
            document.querySelectorAll('.week-page.active').forEach(page => page.classList.remove('active'));
        },
        "sobre-mi": () => {
            console.log('Cargando sección: SOBRE MI');
            
            // Mostrar barra superior
            const topContainer = document.querySelector('.top-container');
            if (topContainer) {
                topContainer.style.display = 'flex';
            }
            
            // Ocultar contenido de inicio y mostrar container
            bannerSection.classList.add('hidden');
            inicioContent.classList.add('hidden');
            footer.classList.add('hidden');
            container.style.display = 'block';
            
            // Ocultar navegación de regreso
            const backNav = document.getElementById('backNav');
            backNav.style.display = 'none';
            
            // Ocultar páginas de semanas
            const weekPages = document.getElementById('weekPages');
            weekPages.style.display = 'none';
            
            // Mostrar página principal
            const mainPage = document.getElementById('mainPage');
            mainPage.style.display = 'block';
            
            // Limpiar y crear contenido para "Sobre mi"
            mainPage.innerHTML = `
                <div style="padding: 40px; text-align: center;">
                    <h1 style="color: #00eaff; margin-bottom: 30px;">Sobre el Curso</h1>
                    <div style="background: rgba(0,234,255,0.1); padding: 30px; border-radius: 15px; border: 1px solid rgba(0,234,255,0.2); max-width: 800px; margin: 0 auto;">
                        <h3 style="color: #ff00e5; margin-bottom: 20px;">Base de Datos II</h3>
                        <p style="margin-bottom: 15px; line-height: 1.6;">Curso de Ingeniería de Sistemas y Computación - Universidad Peruana Los Andes (UPLA)</p>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>Objetivo:</strong> Desarrollar competencias avanzadas en administración de bases de datos, arquitecturas distribuidas, seguridad y optimización de rendimiento.</p>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>Modalidad:</strong> Presencial con componente práctico en laboratorio</p>
                        <p style="line-height: 1.6;"><strong>Duración:</strong> 16 semanas académicas</p>
                    </div>
                </div>
            `;
        },
        "portafolio": () => {
            console.log('Cargando sección: PORTAFOLIO');
            
            // Ocultar barra superior sólo si se mostrará una semana luego
            const topContainer = document.querySelector('.top-container');
            if (topContainer) {
                topContainer.style.display = 'flex';
            }
            
            // Ocultar contenido de inicio y mostrar container
            bannerSection.classList.add('hidden');
            inicioContent.classList.add('hidden');
            footer.classList.add('hidden');
            container.style.display = 'block';
            
            // Ocultar navegación de regreso
            const backNav = document.getElementById('backNav');
            backNav.style.display = 'none';
            
            // Mostrar página principal
            const mainPage = document.getElementById('mainPage');
            const weekPages = document.getElementById('weekPages');
            mainPage.style.display = 'block';
            mainPage.classList.remove('slide-out');
            
            // Ocultar cualquier página de semana que esté activa
            document.querySelectorAll('.week-page.active').forEach(page => {
                page.classList.remove('active');
            });
            
            // Asegurar que el contenedor de semanas no interfiera
            if (weekPages) {
                weekPages.style.display = 'block';
            }
            
            // Mostrar el contenido del curso (semanas 1-16)
            showCourseContent();
        },
        "contacto": () => {
            console.log('Cargando sección: CONTACTO');
            
            // Mostrar barra superior
            const topContainer = document.querySelector('.top-container');
            if (topContainer) {
                topContainer.style.display = 'flex';
            }
            
            // Ocultar contenido de inicio y mostrar container
            bannerSection.classList.add('hidden');
            inicioContent.classList.add('hidden');
            footer.classList.add('hidden');
            container.style.display = 'block';
            
            // Ocultar navegación de regreso
            const backNav = document.getElementById('backNav');
            backNav.style.display = 'none';
            
            // Ocultar páginas de semanas y desactivar activas
            const weekPages = document.getElementById('weekPages');
            weekPages.style.display = 'none';
            document.querySelectorAll('.week-page.active').forEach(page => page.classList.remove('active'));
            
            // Mostrar página principal
            const mainPage = document.getElementById('mainPage');
            mainPage.style.display = 'block';
            
            // Limpiar y crear contenido para "Contacto"
            mainPage.innerHTML = `
                <div style="padding: 40px; text-align: center;">
                    <h1 style="color: #00eaff; margin-bottom: 30px;">Información de Contacto</h1>
                    <div style="background: rgba(0,234,255,0.1); padding: 30px; border-radius: 15px; border: 1px solid rgba(0,234,255,0.2); max-width: 600px; margin: 0 auto;">
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>Universidad:</strong> Universidad Peruana Los Andes (UPLA)</p>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>Facultad:</strong> Ingeniería de Sistemas y Computación</p>
                        <p style="margin-bottom: 15px; line-height: 1.6;"><strong>Curso:</strong> Base de Datos II</p>
                        <p style="margin-bottom: 20px; line-height: 1.6;"><strong>Repositorio:</strong> 
                            <a href="https://github.com/lespqui16/DATABASE2" target="_blank" style="color: #00eaff; text-decoration: none; font-weight: 600;">
                                github.com/lespqui16/DATABASE2
                            </a>
                        </p>
                        <p style="line-height: 1.6;"><strong>Email:</strong> tu.email@upla.edu.pe</p>
                    </div>
                </div>
            `;
        }
    };

    // Event listeners para el menú superior
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", () => {
            // Remover clase active de todos los elementos
            document.querySelectorAll(".menu-item").forEach(i => i.classList.remove('active'));
            
            // Agregar clase active al elemento clickeado
            item.classList.add('active');
            
            // Ejecutar la función correspondiente
            const section = item.getAttribute("data-section");
            if (sections[section]) {
                sections[section]();
            }
        });
    });

    console.log('Base de Datos 2 - UPLA application initialized with top menu');
});

// Función para mostrar el contenido principal del curso (semanas 1-16)
async function showCourseContent() {
    const mainPage = document.getElementById('mainPage');
    const weekPages = document.getElementById('weekPages');
    
    // Mostrar páginas de semanas
    weekPages.style.display = 'block';
    
    // Restaurar el contenido original del curso
    mainPage.innerHTML = `
        <div id="unitsContainer">
            <!-- Las unidades se generarán con JavaScript -->
        </div>
    `;
    
    // Recrear las unidades y semanas
    if (typeof createUnitsAndWeeks === 'function') {
        createUnitsAndWeeks();
    }
    
    // Cargar archivos de GitHub para todas las semanas
    await loadGitHubFilesForAllWeeks();
}

// Función para mostrar el contenido principal del curso desde el banner
function showMainContent() {
    const bannerSection = document.getElementById("bannerSection");
    const inicioContent = document.getElementById("inicioContent");
    const footer = document.querySelector(".main-footer");
    const container = document.querySelector(".container");
    
    // Ocultar el banner, contenido de inicio y footer
    bannerSection.classList.add('hidden');
    inicioContent.classList.add('hidden');
    footer.classList.add('hidden');
    container.style.display = 'block';
    
    // Remover active del menú y activar "Portafolio" como sección por defecto
    document.querySelectorAll(".menu-item").forEach(i => i.classList.remove('active'));
    document.querySelector('.menu-item[data-section="portafolio"]').classList.add('active');
    
    // Mostrar contenido del curso (semanas 1-16)
    showCourseContent();
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
    const topContainer = document.querySelector('.top-container');
    
    console.log('Volviendo al main desde semana...');
    
    if (currentWeekPage) {
        // Ocultar página actual de semana
        currentWeekPage.classList.remove('active');
        
        setTimeout(() => {
            // Ocultar navegación de regreso
            backNav.style.display = 'none';
            
            // Mostrar barra superior nuevamente
            if (topContainer) {
                topContainer.style.display = 'flex';
            }
            
            // Ocultar páginas de semanas
            weekPages.style.display = 'none';
            
            // Mostrar página principal del portafolio
            mainPage.style.display = 'block';
            mainPage.classList.remove('slide-out');
            
            // Asegurar que el container esté visible
            container.style.display = 'block';
            
            // Asegurar que el contenido de inicio esté oculto
            bannerSection.classList.add('hidden');
            inicioContent.classList.add('hidden');
            footer.classList.add('hidden');
            
            // Reactivar la sección Portafolio en el menú
            document.querySelectorAll(".menu-item").forEach(i => i.classList.remove('active'));
            document.querySelector('.menu-item[data-section="portafolio"]').classList.add('active');
            
            // Scroll al inicio
            window.scrollTo(0, 0);
            
            console.log('Volvió correctamente al portafolio');
        }, 250);
    } else {
        // Si no hay semana activa, simplemente mostrar el portafolio
        console.log('No hay semana activa, mostrando portafolio directamente');
        
        // Ocultar navegación de regreso
        backNav.style.display = 'none';
        
        // Mostrar barra superior nuevamente
        if (topContainer) {
            topContainer.style.display = 'flex';
        }
        
        // Ocultar páginas de semanas
        weekPages.style.display = 'none';
        
        // Mostrar página principal del portafolio
        mainPage.style.display = 'block';
        mainPage.classList.remove('slide-out');
        
        // Asegurar que el container esté visible
        container.style.display = 'block';
        
        // Asegurar que el contenido de inicio esté oculto
        bannerSection.classList.add('hidden');
        inicioContent.classList.add('hidden');
        footer.classList.add('hidden');
        
        // Reactivar la sección Portafolio en el menú
        document.querySelectorAll(".menu-item").forEach(i => i.classList.remove('active'));
        document.querySelector('.menu-item[data-section="portafolio"]').classList.add('active');
    }
}

// Función para visitar GitHub
function visitGitHub(weekNumber) {
    const repoUrl = `https://github.com/lespqui16/DATABASE2/tree/main/semana${weekNumber.toString().padStart(2, '0')}`;
    window.open(repoUrl, '_blank');
}