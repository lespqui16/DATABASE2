// auth.js - servicio de autenticación simple (demo sin backend)
(function(){
    const STORAGE_KEY = 'auth_session_v1';

    const subscribers = new Set();

    function loadSession() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : { isAuthenticated: false, role: 'guest', username: null };
        } catch (e) {
            return { isAuthenticated: false, role: 'guest', username: null };
        }
    }

    function saveSession(s) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
        subscribers.forEach(fn => {
            try { fn({...s}); } catch(e) {}
        });
    }

    let session = loadSession();

    function login(username, password) {
        // DEMO: credenciales de ejemplo (admin / admin123). Usuario normal: cualquier otro con cualquier password
        if (username === 'admin' && password === 'admin123') {
            session = { isAuthenticated: true, role: 'admin', username };
        } else {
            session = { isAuthenticated: true, role: 'user', username };
        }
        saveSession(session);
        return session;
    }

    function logout() {
        session = { isAuthenticated: false, role: 'guest', username: null };
        saveSession(session);
        return session;
    }

    function getSession() { return {...session}; }
    function getRole() { return session.role; }
    function isAuthenticated() { return !!session.isAuthenticated; }
    function isAdmin() { return session.role === 'admin'; }

    function onAuthChange(cb) {
        subscribers.add(cb);
        return () => subscribers.delete(cb);
    }

    window.authService = { login, logout, getSession, getRole, isAuthenticated, isAdmin, onAuthChange };
})(); 