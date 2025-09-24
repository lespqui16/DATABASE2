// Imágenes relacionadas con bases de datos
const databaseImages = [
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
];

// Estructura del curso basada en el syllabus
const courseStructure = {
    units: [
        {
            number: 1,
            title: "INTRODUCCIÓN A LA ARQUITECTURA DE LA BASE DE DATOS",
            description: "Identifica las arquitecturas de base de datos mediante su capacidad de implementación en gestores de base de datos DBMS vigentes para poder determinar cómo tenemos que almacenar, organizar e integrar los datos.",
            weeks: [1, 2, 3, 4]
        },
        {
            number: 2,
            title: "ADMINISTRACIÓN DE LA INSTANCIA DEL SERVIDOR",
            description: "Gestiona las instancias del servidor, estructuras de almacenamiento, esquemas de una base de datos para trabajar con datos y manejar grandes cantidades de datos de manera eficiente.",
            weeks: [5, 6, 7, 8]
        },
        {
            number: 3,
            title: "ADMINISTRACIÓN DE LA SEGURIDAD",
            description: "Gestiona la seguridad, entorno de red, backups, recuperación de fallos y ejecución de backups para establecer y mantener la confidencialidad, la integridad y la disponibilidad de las bases de datos.",
            weeks: [9, 10, 11, 12]
        },
        {
            number: 4,
            title: "ADMINISTRACIÓN DEL DESEMPEÑO",
            description: "Gestiona el monitoreo, desempeño y flashback del Servidor para mantener la información detallada y actualizada sobre cómo funcionan las aplicaciones de la base de datos.",
            weeks: [13, 14, 15, 16]
        }
    ]
};

// Contenido detallado de cada semana basado en el syllabus
const courseContent = {
    1: {
        title: "Tipos de Arquitecturas de Base de Datos",
        subtitle: "Arquitecturas centralizadas, cliente-servidor y distribuidas",
        sections: [
            {
                title: "Objetivos de Aprendizaje",
                icon: "🎯",
                content: [
                    "Analizar los tipos de arquitecturas de base de datos existentes",
                    "Identificar la aplicabilidad de cada arquitectura en distintos entornos tecnológicos",
                    "Comparar ventajas y desventajas de arquitecturas centralizadas vs distribuidas",
                    "Establecer criterios para la selección de arquitecturas según el contexto empresarial"
                ]
            },
            {
                title: "Contenidos Temáticos",
                icon: "📋",
                content: [
                    "Arquitectura centralizada: características y casos de uso",
                    "Arquitectura cliente-servidor: modelos de 2 y 3 capas",
                    "Arquitecturas distribuidas: replicación y fragmentación",
                    "Arquitecturas híbridas y modernas: microservicios y contenedores"
                ]
            }
        ],
        activities: [
            {
                title: "Modelamiento de Datos",
                description: "Aplicación del modelo conceptual y modelo lógico.",
                type: 'pdf',
                filename: 'MODELAMIENTO DE DATOS.pdf',
                size: '184 kB'
            },
            {
                title: "Arquitectura de Bases de Datos",
                description: "Informe técnico que compara las distintas arquitecturas de base de datos.",
                type: 'pdf',
                filename: 'semana1_arquitecturas_presentacion.pptx',
                size: '8.5 MB'
            }
        ],
        resources: [
            { title: "Database Architecture Patterns", description: "Patrones de arquitectura modernos para sistemas de bases de datos empresariales" },
            { title: "Comparative Analysis Tools", description: "Herramientas para evaluar y comparar diferentes arquitecturas de BD" }
        ],
        progress: 6.25
    },
    2: {
        title: "Gestores de Base de Datos (DBMS)",
        subtitle: "Características y compatibilidad con arquitecturas",
        sections: [
            {
                title: "Análisis de DBMS Principales",
                icon: "🗄️",
                content: [
                    "Características técnicas de SQL Server: arquitectura interna y capacidades",
                    "MySQL: versiones, motores de almacenamiento y configuraciones",
                    "PostgreSQL: extensibilidad, tipos de datos avanzados y performance",
                    "Oracle Database: características empresariales y alta disponibilidad",
                    "MongoDB: modelo de documentos y casos de uso NoSQL"
                ]
            },
            {
                title: "Compatibilidad Arquitectónica",
                icon: "🔧",
                content: [
                    "Evaluación de compatibilidad de DBMS con arquitecturas específicas",
                    "Criterios de selección según requerimientos técnicos y funcionales",
                    "Análisis de costo-beneficio y TCO (Total Cost of Ownership)",
                    "Migración entre DBMS: estrategias y consideraciones técnicas"
                ]
            }
        ],
        activities: [
            {
                title: "Cuadro Comparativo de DBMS",
                description: "Análisis técnico detallado de SQL Server, MySQL, PostgreSQL, Oracle y MongoDB",
                type: 'pdf',
                filename: 'semana2_comparativo_dbms.pdf',
                size: '5.8 MB'
            },
            {
                title: "Laboratorio de Instalación",
                description: "Guías paso a paso para instalación y configuración de diferentes DBMS",
                type: 'doc',
                filename: 'semana2_lab_instalacion.docx',
                size: '3.2 MB'
            }
        ],
        resources: [
            { title: "DBMS Evaluation Framework", description: "Marco de trabajo para evaluar y seleccionar el DBMS más adecuado" },
            { title: "Migration Tools Catalog", description: "Catálogo de herramientas para migración entre diferentes DBMS" }
        ],
        progress: 12.5
    },
    3: {
        title: "Diseño de Arquitectura de Base de Datos",
        subtitle: "Modelado para sistemas específicos",
        sections: [
            {
                title: "Metodología de Diseño",
                icon: "🏗️",
                content: [
                    "Análisis de requerimientos funcionales y no funcionales",
                    "Diseño conceptual: modelo entidad-relación extendido",
                    "Diseño lógico: normalización y optimización de esquemas",
                    "Diseño físico: particionamiento, índices y estructuras de almacenamiento"
                ]
            },
            {
                title: "Criterios de Organización e Integración",
                icon: "🔄",
                content: [
                    "Estrategias de organización de datos: horizontal vs vertical",
                    "Técnicas de integración: ETL, ELT y streaming",
                    "Gestión de metadatos y diccionario de datos",
                    "Políticas de calidad de datos y gobierno de información"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 18.75
    },
    4: {
        title: "Implementación y Evaluación de Arquitectura",
        subtitle: "Prototipo funcional y validación",
        sections: [
            {
                title: "Implementación de Prototipo",
                icon: "⚡",
                content: [
                    "Configuración del entorno de desarrollo y pruebas",
                    "Implementación de esquemas y estructuras de datos",
                    "Desarrollo de procedimientos almacenados y triggers",
                    "Configuración de conexiones y pools de conexión"
                ]
            },
            {
                title: "Validación y Evaluación",
                icon: "✅",
                content: [
                    "Pruebas de funcionalidad: CRUD operations y transacciones",
                    "Evaluación de performance: benchmarks y métricas",
                    "Análisis de escalabilidad y puntos de saturación",
                    "Documentación de resultados y recomendaciones de mejora"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 25.0
    },

    // UNIDAD II: ADMINISTRACIÓN DE LA INSTANCIA DEL SERVIDOR
    5: {
        title: "Estructura y Funcionamiento de Instancias del Servidor",
        subtitle: "Componentes y funciones de DBMS",
        sections: [
            {
                title: "Arquitectura Interna de DBMS",
                icon: "🏢",
                content: [
                    "Estructura de instancias en SQL Server: servicios y componentes",
                    "Arquitectura de PostgreSQL: procesos y memoria compartida",
                    "Oracle Database: instancias, SGA y PGA",
                    "Gestión de procesos y threads en diferentes DBMS"
                ]
            },
            {
                title: "Componentes y Funciones Principales",
                icon: "⚙️",
                content: [
                    "Buffer Manager y gestión de cache",
                    "Transaction Manager y Log Manager",
                    "Query Processor y Optimizer",
                    "Storage Manager y File Manager"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 31.25
    },
    6: {
        title: "Diseño de Estructuras de Almacenamiento",
        subtitle: "Optimización según tipo y volumen de datos",
        sections: [
            {
                title: "Estrategias de Almacenamiento",
                icon: "💾",
                content: [
                    "Tipos de almacenamiento: row-store vs column-store",
                    "Particionamiento horizontal y vertical",
                    "Compresión de datos y técnicas de optimización",
                    "Almacenamiento de datos no estructurados (BLOB, CLOB)"
                ]
            },
            {
                title: "Optimización por Workload",
                icon: "📊",
                content: [
                    "OLTP: optimización para transacciones frecuentes",
                    "OLAP: diseño para consultas analíticas complejas",
                    "Hybrid workloads: balanceando OLTP y OLAP",
                    "Configuración de tablespaces y file groups"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 37.5
    },
    7: {
        title: "Implementación de Esquemas de Base de Datos",
        subtitle: "Integridad y organización de datos",
        sections: [
            {
                title: "Desarrollo de Esquemas",
                icon: "🗂️",
                content: [
                    "Creación de esquemas lógicos y separación por módulos",
                    "Definición de tablas con restricciones de integridad",
                    "Implementación de relaciones y claves foráneas",
                    "Configuración de índices primarios y secundarios"
                ]
            },
            {
                title: "Garantía de Integridad",
                icon: "🔐",
                content: [
                    "Constraints de dominio, entidad y referencial",
                    "Triggers para reglas de negocio complejas",
                    "Stored procedures para operaciones transaccionales",
                    "Vistas para seguridad y abstracción de datos"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 43.75
    },
    8: {
        title: "Evaluación del Rendimiento y Optimización",
        subtitle: "Métricas y propuestas de mejora",
        sections: [
            {
                title: "Monitoreo de Performance",
                icon: "📈",
                content: [
                    "Métricas clave: CPU, memoria, I/O y network",
                    "Análisis de planes de ejecución y query performance",
                    "Identificación de bottlenecks y resource contention",
                    "Herramientas de monitoreo: DMVs, AWR, pg_stat"
                ]
            },
            {
                title: "Estrategias de Optimización",
                icon: "⚡",
                content: [
                    "Tuning de configuración de instancias",
                    "Optimización de estructuras de almacenamiento",
                    "Reconfiguración de índices y estadísticas",
                    "Ajuste de parámetros de memoria y cache"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 50.0
    },

    // UNIDAD III: ADMINISTRACIÓN DE LA SEGURIDAD
    9: {
        title: "Principios de Seguridad en Bases de Datos",
        subtitle: "Amenazas y mecanismos de protección",
        sections: [
            {
                title: "Análisis de Amenazas",
                icon: "⚠️",
                content: [
                    "Clasificación de amenazas: internas vs externas",
                    "Ataques comunes: SQL injection, privilege escalation, data breaches",
                    "Vulnerabilidades en configuraciones por defecto",
                    "Análisis de riesgos y matriz de impacto"
                ]
            },
            {
                title: "Mecanismos de Protección",
                icon: "🛡️",
                content: [
                    "Principios de seguridad: CIA (Confidencialidad, Integridad, Disponibilidad)",
                    "Autenticación multifactor y gestión de identidades",
                    "Autorización basada en roles (RBAC) y permisos granulares",
                    "Cifrado de datos en reposo y en tránsito"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 56.25
    },
    10: {
        title: "Estrategia de Backup y Recuperación",
        subtitle: "Planificación para diferentes escenarios de riesgo",
        sections: [
            {
                title: "Tipos de Backup",
                icon: "💽",
                content: [
                    "Full backup, incremental y differential backup",
                    "Transaction log backup y point-in-time recovery",
                    "Backup comprimido y cifrado",
                    "Estrategias de retención y archivado"
                ]
            },
            {
                title: "Planificación de Recuperación",
                icon: "🔄",
                content: [
                    "RTO (Recovery Time Objective) y RPO (Recovery Point Objective)",
                    "Escenarios de disaster recovery: hardware failure, corruption, human error",
                    "High availability: clustering, mirroring, always on",
                    "Pruebas regulares de restauración y validación"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 62.5
    },
    11: {
        title: "Configuraciones de Seguridad en Red",
        subtitle: "Controles de acceso y monitoreo",
        sections: [
            {
                title: "Configuración de Accesos",
                icon: "🔑",
                content: [
                    "Creación y gestión de roles de seguridad",
                    "Asignación granular de permisos por esquema y objeto",
                    "Configuración de usuarios de servicio y aplicación",
                    "Implementación de least privilege principle"
                ]
            },
            {
                title: "Autenticación y Auditoría",
                icon: "📋",
                content: [
                    "Integración con Active Directory y LDAP",
                    "Configuración de SSL/TLS para conexiones seguras",
                    "Habilitación de auditoría y logging de eventos",
                    "Monitoreo de actividades sospechosas y alertas"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 68.75
    },
    12: {
        title: "Evaluación de Medidas de Seguridad",
        subtitle: "Métricas y propuestas de mejora",
        sections: [
            {
                title: "Métricas de Seguridad",
                icon: "📊",
                content: [
                    "KPIs de seguridad: failed logins, privilege escalations, data access patterns",
                    "Evaluación de efectividad de controles implementados",
                    "Análisis de logs de auditoría y detección de anomalías",
                    "Reporting de compliance y cumplimiento regulatorio"
                ]
            },
            {
                title: "Mejora Continua",
                icon: "🔄",
                content: [
                    "Identificación de gaps en la estrategia de seguridad",
                    "Propuestas de mejora basadas en análisis de riesgos",
                    "Actualización de políticas y procedimientos",
                    "Plan de capacitación y concientización en seguridad"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 75.0
    },

    // UNIDAD IV: ADMINISTRACIÓN DEL DESEMPEÑO
    13: {
        title: "Mecanismos de Monitoreo de Servidores",
        subtitle: "Métricas clave para evaluación de performance",
        sections: [
            {
                title: "Métricas Fundamentales",
                icon: "📈",
                content: [
                    "CPU utilization: user time, system time, wait time",
                    "Memory metrics: buffer hit ratio, page life expectancy, memory grants",
                    "Disk I/O: IOPS, throughput, latency, queue depth",
                    "Network performance: bandwidth utilization, packet loss, connection pooling"
                ]
            },
            {
                title: "Herramientas de Monitoreo",
                icon: "🔧",
                content: [
                    "SQL Server: Performance Monitor, DMVs, Extended Events",
                    "PostgreSQL: pg_stat views, pg_stat_activity, pgbench",
                    "Oracle: AWR reports, ADDM, ASH analytics",
                    "Herramientas third-party: SolarWinds, New Relic, DataDog"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
           
        ],
        progress: 81.25
    },
    14: {
        title: "Plan de Monitoreo Proactivo",
        subtitle: "Alertas, dashboards y análisis de performance",
        sections: [
            {
                title: "Diseño de Sistema de Alertas",
                icon: "🚨",
                content: [
                    "Definición de umbrales críticos y de advertencia",
                    "Configuración de alertas escaladas por severidad",
                    "Integración con sistemas de ticketing y notificaciones",
                    "Reducción de false positives mediante correlation rules"
                ]
            },
            {
                title: "Dashboards y Visualización",
                icon: "📊",
                content: [
                    "Diseño de dashboards ejecutivos y técnicos",
                    "Métricas en tiempo real vs históricas",
                    "Visualización de trends y capacity planning",
                    "Reportes automatizados y distribución"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 87.5
    },
    15: {
        title: "Implementación de Funciones de Flashback",
        subtitle: "Recuperación y restauración ante fallos",
        sections: [
            {
                title: "Tecnologías de Flashback",
                icon: "⏰",
                content: [
                    "Oracle Flashback: Flashback Query, Table, Database",
                    "SQL Server: Temporal Tables, Point-in-time recovery",
                    "PostgreSQL: Point-in-time recovery with WAL",
                    "Implementación de change data capture (CDC)"
                ]
            },
            {
                title: "Escenarios de Recuperación",
                icon: "🔄",
                content: [
                    "Recuperación de transacciones erróneas",
                    "Restauración de tablas específicas sin downtime",
                    "Recovery de bases de datos completas a puntos específicos",
                    "Simulación de disaster recovery scenarios"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 93.75
    },
    16: {
        title: "Evaluación de Desempeño y Continuidad Operativa",
        subtitle: "Métricas finales y optimización integral",
        sections: [
            {
                title: "Análisis Integral de Performance",
                icon: "📊",
                content: [
                    "Evaluación end-to-end del rendimiento del servidor",
                    "Análisis de capacity planning y growth projections",
                    "Efectividad de las funciones de recuperación implementadas",
                    "ROI de las inversiones en infraestructura y herramientas"
                ]
            },
            {
                title: "Estrategias de Optimización Continua",
                icon: "🚀",
                content: [
                    "Propuestas de mejora para garantizar continuidad operativa",
                    "Roadmap de actualizaciones tecnológicas",
                    "Plan de capacitación del equipo técnico",
                    "Establecimiento de SLAs y métricas de éxito"
                ]
            }
        ],
        activities: [
            
        ],
        resources: [
            
        ],
        progress: 100.0
    }
};

// --- NUEVO: Configuración del repositorio GitHub ---
const githubConfig = {
    usuario: "lespqui16",   // 👈 cámbialo por tu usuario GitHub
    repo: "DATABASE2",      // 👈 cámbialo por tu repo
  };