// main.js - Integración con menú superior y funcionalidad existente
document.addEventListener("DOMContentLoaded", () => {
    // Ocultar el container principal al cargar la página
    const container = document.querySelector(".container");
    const bannerSection = document.getElementById("bannerSection");
    const inicioContent = document.getElementById("inicioContent");
    const footer = document.querySelector(".main-footer");
    
    // Estado de autenticación UI
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfo = document.getElementById('userInfo');
    const loginModal = document.getElementById('loginModal');
    const loginClose = document.getElementById('loginClose');
    const loginSubmit = document.getElementById('loginSubmit');
    const loginUser = document.getElementById('loginUser');
    const loginPass = document.getElementById('loginPass');

    function renderAuth() {
        if (!window.authService) return;
        const session = authService.getSession();
        if (session.isAuthenticated && session.role === 'admin') {
            userInfo.style.display = 'inline';
            userInfo.textContent = 'Admin';
            userInfo.style.marginRight = '8px';
            userInfo.nextElementSibling && (userInfo.nextElementSibling.style.marginLeft = '0');
            if (!userInfo.nextElementSibling || userInfo.nextElementSibling.textContent !== '|') {
                if (logoutBtn && logoutBtn.previousElementSibling !== userInfo) {
                    const sep = document.createElement('span');
                    sep.textContent = ' | ';
                    sep.style.margin = '0 6px';
                    userInfo.parentNode.insertBefore(sep, logoutBtn);
                }
            }
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
        } else if (session.isAuthenticated) {
            userInfo.style.display = 'inline';
            userInfo.textContent = `${session.username}`;
            userInfo.style.marginRight = '8px';
            userInfo.nextElementSibling && (userInfo.nextElementSibling.style.marginLeft = '0');
            if (!userInfo.nextElementSibling || userInfo.nextElementSibling.textContent !== '|') {
                if (logoutBtn && logoutBtn.previousElementSibling !== userInfo) {
                    const sep = document.createElement('span');
                    sep.textContent = ' | ';
                    sep.style.margin = '0 6px';
                    userInfo.parentNode.insertBefore(sep, logoutBtn);
                }
            }
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
        } else {
            userInfo.style.display = 'none';
            // Eliminar separador si existe
            if (logoutBtn && logoutBtn.previousElementSibling && logoutBtn.previousElementSibling.textContent === ' | ') {
                logoutBtn.previousElementSibling.remove();
            }
            loginBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
        }
        // Forzar recarga de actividades para mostrar/ocultar controles admin
        if (typeof window.loadGitHubFilesForAllWeeks === 'function') {
            window.loadGitHubFilesForAllWeeks();
        }
    }

    function openLogin() { 
        if (loginUser) loginUser.value = '';
        if (loginPass) loginPass.value = '';
        loginModal.style.display = 'flex';
        setTimeout(() => { if (loginUser) loginUser.focus(); }, 0);
    }
    function closeLogin() { loginModal.style.display = 'none'; }

    // Cierre por overlay
    if (loginModal) loginModal.addEventListener('click', (e) => { if (e.target === loginModal) closeLogin(); });
    // Cierre con ESC
    document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && loginModal.style.display === 'flex') closeLogin(); });
    // Submit con Enter
    [loginUser, loginPass].forEach(inp => { if (inp) inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') loginSubmit.click(); }); });

    if (loginBtn) loginBtn.onclick = openLogin;
    if (loginClose) loginClose.onclick = closeLogin;
    if (logoutBtn) logoutBtn.onclick = () => { authService.logout(); renderAuth(); };
    if (loginSubmit) loginSubmit.onclick = () => {
        const u = (loginUser.value || '').trim();
        const p = (loginPass.value || '').trim();
        authService.login(u, p);
        renderAuth();
        closeLogin();
    };

    if (window.authService) {
        authService.onAuthChange(renderAuth);
        renderAuth();
    }

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
            footer.classList.remove('hidden');
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
                <div style="padding: 40px; text-align: center; display: flex; flex-direction: column; align-items: center;">
                    <h1 style="color: #00eaff; margin-bottom: 30px;">Sobre Mi</h1>
                    <div style="display: flex; flex-direction: row; gap: 40px; justify-content: center; align-items: flex-start; flex-wrap: wrap; max-width: 900px; margin: 0 auto;">
                        <div style="min-width:180px; max-width:220px;">
                            <div style="width:180px; height:180px; border-radius:50%; background:linear-gradient(135deg,#00eaff,#ff00e5); margin:0 auto 18px auto; display:flex; align-items:center; justify-content:center; overflow:hidden; box-shadow:0 0 20px #00eaff;">
                                <img src="img/perfil.jpg" alt="Foto de perfil" style="width:100%; height:100%; object-fit:cover; border-radius:50%; border:4px solid #fff; background:#fff;" />
                            </div>
                            <div style="color:#ff00e5; font-weight:600; font-size:1.1rem;">Luis Espejo Quispe</div>
                            <div style="color:#a0a0a0; font-size:0.95rem; margin-top:6px;">Estudiante de la Facultad de Ingeniería de Sistemas y Computación</div>
                        </div>
                        <div style="flex:1; min-width:260px; max-width:600px; text-align:left;">
                            <div style="background: rgba(0,234,255,0.1); padding: 30px; border-radius: 15px; border: 1px solid rgba(0,234,255,0.2);">
                                <h3 style="color: #ff00e5; margin-bottom: 20px;">Sobre mí</h3>
                                <p style="margin-bottom: 15px; line-height: 1.6;">¡Hola! Soy <b>Luis Espejo Quispe</b>, estudiante de V ciclo de la Facultad de Ingeniería de Sistemas y Computación de la Universidad Peruana los Andes. </p>
                                <p style="margin-bottom: 15px; line-height: 1.6;">Dentro de las habilidades desarolladas a lo largo de mi carrera, como la programación en lenguajes como Java, así como el diseño de bases de datos relacionales.</p>
                                <p style="margin-bottom: 15px; line-height: 1.6;">Asimismo, deseo inspirar a más jovenes a inclinarse por el aprendizaje de tecnologías de la información y la programación.</p>
                            </div>
                        </div>
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
            footer.classList.remove('hidden');
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
            // Forzar recarga de archivos de GitHub para todas las semanas
            setTimeout(() => {
                if (typeof loadGitHubFilesForAllWeeks === 'function') {
                    loadGitHubFilesForAllWeeks();
                }
            }, 0);
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
            footer.classList.remove('hidden');
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
            
            // Formulario de contacto
            mainPage.innerHTML = `
                <div style="padding: 40px; max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
                    <h1 style="color: #00eaff; margin-bottom: 20px; text-align:center;">Contacto</h1>
                    <p style="text-align:center; margin-bottom: 25px; color:#a0a0a0;">Completa el formulario y me pondré en contacto contigo.</p>
                    <form id="contactForm" class="contact-form" style="width:100%; max-width:500px; margin-bottom:32px;">
                        <div class="form-row">
                            <label for="cName">Nombre</label>
                            <input id="cName" type="text" placeholder="Tu nombre" required />
                        </div>
                        <div class="form-row">
                            <label for="cEmail">Email</label>
                            <input id="cEmail" type="email" placeholder="tu@email.com" required />
                        </div>
                        <div class="form-row">
                            <label for="cSubject">Asunto</label>
                            <input id="cSubject" type="text" placeholder="Motivo del mensaje" required />
                        </div>
                        <div class="form-row">
                            <label for="cMessage">Mensaje</label>
                            <textarea id="cMessage" rows="6" placeholder="Cuéntame en qué puedo ayudarte" required></textarea>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="auth-btn">Enviar</button>
                        </div>
                    </form>
                </div>
            `;

            const form = document.getElementById('contactForm');
            const emailTo = 's00580g@upla.edu.pe'; // Correo real del usuario
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const name = document.getElementById('cName').value.trim();
                    const email = document.getElementById('cEmail').value.trim();
                    const subject = document.getElementById('cSubject').value.trim();
                    const message = document.getElementById('cMessage').value.trim();

                    // Validación básica
                    if (!name || !email || !subject || !message) {
                        alert('Por favor completa todos los campos.');
                        return;
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        alert('Por favor ingresa un email válido.');
                        return;
                    }

                    // Construir mailto
                    const mailto = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
                    window.location.href = mailto;

                    // Mostrar mensaje de éxito
                    setTimeout(() => {
                        const successMsg = document.createElement('div');
                        successMsg.textContent = '¡Mensaje enviado correctamente!';
                        successMsg.style.background = '#e0ffe0';
                        successMsg.style.color = '#008000';
                        successMsg.style.padding = '16px';
                        successMsg.style.borderRadius = '8px';
                        successMsg.style.textAlign = 'center';
                        successMsg.style.margin = '20px auto 0 auto';
                        form.parentNode.insertBefore(successMsg, form.nextSibling);
                        form.reset();
                        setTimeout(() => {
                            if (successMsg.parentNode) successMsg.parentNode.removeChild(successMsg);
                        }, 3500);
                    }, 500);
                });
            }
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

    // Cargar archivos de GitHub para todas las semanas (asegurar que se ejecute después de crear el DOM)
    setTimeout(() => {
        if (typeof loadGitHubFilesForAllWeeks === 'function') {
            loadGitHubFilesForAllWeeks();
        }
    }, 0);
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
            footer.classList.remove('hidden');
            
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
                        // Volver a cargar archivos de GitHub para todas las semanas
                        setTimeout(() => {
                            if (typeof loadGitHubFilesForAllWeeks === 'function') {
                                loadGitHubFilesForAllWeeks();
                            }
                        }, 0);

// Función para visitar GitHub
function visitGitHub(weekNumber) {
    const repoUrl = `https://github.com/lespqui16/DATABASE2/tree/main/semana${weekNumber.toString().padStart(2, '0')}`;
    window.open(repoUrl, '_blank');
}