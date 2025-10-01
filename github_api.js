// github-api.js - Integración con GitHub API
class GitHubService {
    constructor() {
        this.baseUrl = 'https://api.github.com/repos/lespqui16/DATABASE2/contents';
        this.cache = new Map();
    }

    // Obtener archivos de una semana específica
    async getWeekFiles(weekNumber) {
        const weekFolder = `semana${weekNumber.toString().padStart(2, '0')}`;
        const cacheKey = `week-${weekNumber}`;
        
        // Verificar cache
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            const url = `${this.baseUrl}/${weekFolder}`;
            console.log('[GitHub] solicitando:', url);
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`Error al obtener archivos: ${response.status}`);
            }
            
            const files = await response.json();
            
            // Filtrar solo archivos (no carpetas) y mapear información relevante
            const fileList = files
                .filter(file => file.type === 'file')
                .map(file => ({
                    name: file.name,
                    download_url: file.download_url,
                    size: this.formatFileSize(file.size),
                    type: this.getFileType(file.name),
                    raw_url: file.download_url
                }));
            
            // Guardar en cache
            this.cache.set(cacheKey, fileList);
            return fileList;
            
        } catch (error) {
            console.error(`Error obteniendo archivos de semana ${weekNumber}:`, error);
            // Propagar error para que la UI pueda mostrar el mensaje
            throw error;
        }
    }

    // Obtener contenido de un archivo específico
    async getFileContent(fileUrl) {
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) {
                throw new Error(`Error al obtener archivo: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Error obteniendo contenido del archivo:', error);
            return null;
        }
    }

    // Determinar tipo de archivo por extensión
    getFileType(filename) {
        const extension = filename.split('.').pop().toLowerCase();
        const typeMap = {
            'pdf': 'pdf',
            'doc': 'doc',
            'docx': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'xls': 'xlsx',
            'xlsx': 'xlsx',
            'sql': 'sql',
            'json': 'json',
            'txt': 'txt',
            'md': 'txt',
            'jpg': 'image',
            'jpeg': 'image',
            'png': 'image',
            'gif': 'image'
        };
        return typeMap[extension] || 'file';
    }

    // Formatear tamaño de archivo
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Instancia global del servicio
const githubService = new GitHubService();