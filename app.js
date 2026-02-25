// ============================================================================
// PORTFOLIO APP - Main Script
// ============================================================================

// Global data and state
let data = null;
let themes = [];
const state = {
  activeTheme: "",
  visibleProjects: {},
  searchTerm: ""
};

// UI element references
const ui = {
  heroTitle: document.getElementById("heroTitle"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  heroMetrics: document.getElementById("heroMetrics"),
  categoryTabs: document.getElementById("categoryTabs"),
  categoryPanels: document.getElementById("categoryPanels")
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Use data from portfolio-data.js
  if (window.PORTFOLIO_DATA) {
    data = window.PORTFOLIO_DATA;
    themes = data.themes || [];
    state.activeTheme = themes.length > 0 ? themes[0].id : "";

    console.log('✅ Portfolio initialized');
    console.log(`📊 ${data.stats.totalProjects} projects loaded`);

    // Render all sections
    renderHero();
    renderCategoryTabs();
    renderCategoryPanel();

    // NEW: Search listener
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.toLowerCase().trim();
        // Reset visible counts when searching
        state.visibleProjects = {};
        renderCategoryPanel();
      });
    }
  } else {
    console.error('❌ Portfolio data not found. Make sure portfolio-data.js is loaded.');
  }
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const formatNumber = (value) => new Intl.NumberFormat("en-US").format(Number(value || 0));

const formatDate = (value) => {
  const text = String(value || "").trim();
  if (!text) return "-";
  const parsed = new Date(`${text}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return text;
  return parsed.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
};

const escapeHtml = (value) => String(value || "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const asArray = (value) => Array.isArray(value) ? value : [];

// Custom project descriptions (loaded from external file)
// Import descriptions from project-descriptions.js
let CUSTOM_DESCRIPTIONS = {};

// Try to load from external file if available
if (typeof PROJECT_DESCRIPTIONS !== 'undefined') {
  CUSTOM_DESCRIPTIONS = PROJECT_DESCRIPTIONS;
} else {
  // Fallback to inline descriptions (legacy support)
  CUSTOM_DESCRIPTIONS = {
    "telecomunicaciones-redes-lan-inalambrica-y-cableada": "Diseño e implementación de infraestructura de red empresarial de 3 capas (núcleo, distribución, acceso) utilizando tecnologías LAN cableadas e inalámbricas. Se configuraron VLANs para segmentación de tráfico, protocolos de redundancia (HSRP/VRRP), y seguridad mediante port-security y 802.1X. El proyecto incluyó 29 laboratorios prácticos en Cisco Packet Tracer simulando escenarios empresariales reales con switches multicapa, routers y puntos de acceso inalámbricos. Se obtuvieron topologías funcionales con QoS implementado, políticas de seguridad activas y documentación técnica completa de configuraciones.",

    "telecomunicaciones-redes-principios-de-enrutamiento": "Implementación de soluciones de enrutamiento estático y dinámico para redes empresariales escalables. Se diseñaron topologías jerárquicas de 3 capas con protocolos OSPF multi-área y EIGRP, incluyendo sumarización de rutas, redistribución entre protocolos y optimización de convergencia. El proyecto abarcó configuración de ACLs estándar y extendidas, NAT/PAT para traducción de direcciones, y troubleshooting sistemático de problemas de conectividad. Se realizaron 29 laboratorios prácticos en Packet Tracer simulando redes corporativas con múltiples sitios remotos. Los resultados incluyen redes completamente funcionales con tablas de enrutamiento optimizadas, políticas de seguridad implementadas y documentación de configuraciones.",

    "electronica-control-electronica-de-potencia": "Diseño completo de un inversor SPWM (Sinusoidal Pulse Width Modulation) trifásico y un variador de frecuencia (VFD) para control de motores de inducción. Se desarrolló el modelo matemático del inversor con análisis de THD (Distorsión Armónica Total) inferior al 5%, diseño de filtros LC para reducción de armónicos, y etapas de conversión AC-DC-AC. El proyecto incluyó simulaciones en MATLAB/Simulink de las estrategias de modulación unipolar y bipolar, cálculos de FFT para análisis espectral, y diseño del sistema de control V/f para el variador. Se obtuvieron circuitos de potencia dimensionados con IGBTs, esquemas de control PWM implementados, y análisis completo del comportamiento del motor bajo diferentes condiciones de carga.",

    "electronica-control-automatas-programables": "Desarrollo de soluciones de automatización industrial mediante PLCs para procesos de manufactura y control de maquinaria. Se diseñaron programas en lenguaje Ladder y bloques funcionales (FBD) para control secuencial de procesos, sistemas de arranque de motores, control de nivel y temperatura, y líneas de producción automatizadas. El proyecto incluyó identificación de sensores y actuadores, diseño de diagramas de bloques funcionales, programación en software de simulación PLC, y pruebas de funcionamiento. Se obtuvieron programas ladder funcionales para múltiples escenarios industriales, documentación técnica de E/S, y simulaciones validadas de procesos automatizados.",

    "software-datos-evaluacion-de-software": "Implementación de metodologías de testing y aseguramiento de calidad de software siguiendo estándares IEEE 829 e ISO/IEC 25010. Se ejecutaron pruebas funcionales, de integración, de sistema y de aceptación sobre aplicaciones reales, con análisis de cobertura de código superior al 85%. El proyecto incluyó diseño de casos de prueba con matriz de trazabilidad, ejecución de pruebas automatizadas, identificación y documentación de defectos, y análisis de métricas de calidad (complejidad ciclomática, mantenibilidad). Se utilizaron herramientas como JUnit para pruebas unitarias, Selenium para pruebas de UI, y SonarQube para análisis estático de código. Los resultados incluyen 27 documentos técnicos de ejecución de pruebas, reportes de bugs con severidad clasificada, y recomendaciones de mejora de calidad.",

    "gestion-negocio-contabilidad-y-costos": "Análisis financiero y contable de operaciones empresariales con enfoque en costeo de productos y toma de decisiones. Se desarrollaron sistemas de costeo por órdenes de producción y por procesos, análisis de punto de equilibrio, presupuestos maestros y estados financieros. El proyecto incluyó elaboración de balances generales, estados de resultados, flujos de caja, y análisis de indicadores financieros (liquidez, rentabilidad, endeudamiento). Se utilizaron hojas de cálculo avanzadas con modelos financieros automatizados, tablas dinámicas para análisis multidimensional, y dashboards de indicadores. Los resultados incluyen modelos de costeo implementados, análisis de variaciones presupuestales, y recomendaciones financieras basadas en datos."
  };
}


// Filter out basic science and ultra-academic projects (not relevant for employability)
const isBasicScienceProject = (project) => {
  const excludeKeywords = [
    // Matemáticas Básicas (Núcleo Común)
    'algebra lineal', 'algebra', 'calculo diferencial', 'calculo integral',
    'calculo vectorial', 'calculo multivariable', 'calculo multivariado',
    'estadistica', 'probabilidad', 'estadistica y probabilidad',
    'geometria', 'trigonometria', 'matematicas basicas',
    'precalculo',

    // Física Básica
    'fisica general', 'fisica mecanica',

    // Química Básica
    'quimica general', 'quimica inorganica', 'quimica organica', 'quimica analitica',
    'fisicoquimica', 'bioquimica',

    // Biología Básica
    'biologia',

    // Ciencias de Ingeniería Puras (sin aplicación práctica directa)
    'termodinamica', 'transferencia de calor', 'transferencia de masa',
    'mecanica de fluidos', 'estatica', 'resistencia de materiales',

    // Cursos Generales/Humanidades (sin valor técnico diferencial)
    'catedra unadista', 'etica y ciudadania', 'etica', 'epistemologia',
    'pensamiento logico', 'proyecto de vida', 'psicologia',
    'sociologia', 'derechos humanos',
    'tecnicas de investigacion', 'fundamentos y generalidades de investigacion',
    'metodologia de la investigacion',

    // Cursos muy básicos/introductorios genéricos
    'introduccion a', 'fundamentos de economia',

    // Agronomía/Biología aplicada (no relevante para perfil de ingeniería electrónica/sistemas)
    'agricultura biologica', 'agroforesteria', 'cultivos de clima',
    'dasometria', 'extension agricola', 'fitomejoramiento', 'fitopatologia',
    'floricultura', 'herbologia', 'horticultura', 'mejoramiento animal',
    'nutricion vegetal', 'pastos y forrajes', 'poscosecha',
    'propagacion y micropropagacion', 'maquinaria y mecanizacion agricola',
    'manejo de arvenses', 'manejo integrado de enfermedades',
    'fisiologia de cultivos', 'fisiologia vegetal',

    // Salud/Ciencias Sociales (no relevante para perfil técnico)
    'salud oral', 'salud publica', 'accion psicosocial',
    'etnopsicologia', 'psicologia de la personalidad',
    'modelos de intervencion en psicologia',

    // Cursos ambientales muy generales (mantener los técnicos como acústica, SIG)
    'educacion ambiental', 'politica agraria y ambiental',
    'biodiversidad y servicios ecosistemicos',

    // Alimentos (no relevante para perfil de automatización/sistemas)
    'analisis y control de calidad de los alimentos',
    'control de la contaminacion de los alimentos',
    'ingenieria de plantas de alimentos',
    'quimica de alimentos',

    // Cursos de gestión muy básicos
    'comunidad', 'sociologia'
  ];

  const title = String(project.title || project.topic || '').toLowerCase();
  const topic = String(project.topic || '').toLowerCase();
  const id = String(project.id || '').toLowerCase();

  return excludeKeywords.some(keyword =>
    title.includes(keyword) || topic.includes(keyword) || id.includes(keyword)
  );
};

// ============================================================================
// RENDERING FUNCTIONS
// ============================================================================

const renderHero = () => {
  if (!data) return;

  const stats = data.stats || {};

  if (ui.heroTitle) {
    ui.heroTitle.textContent = "Diego Fernando Tulcán Silva";
  }

  if (ui.heroSubtitle) {
    ui.heroSubtitle.innerHTML = `Industrial Automation Engineer &amp; Systems Engineer <br> Specialist in Automation, Cybersecurity and Software Development`;
  }

  // Hero metrics removed - KPIs not needed
  // const renderHeroMetrics = (stats) => {
  //   if (!ui.heroMetrics) return;
  //   ...
  // };
};

const getThemeInfo = (theme) => {
  const infoMap = {
    "software-datos": {
      icon: "fas fa-code",
      focus: "Development, databases, AI"
    },
    "telecom-redes": {
      icon: "fas fa-network-wired",
      focus: "Networks, telecommunications, NGN"
    },
    "electronica-automatizacion": {
      icon: "fas fa-microchip",
      focus: "PLC, control, power electronics"
    },
    "ambiental-energia": {
      icon: "fas fa-leaf",
      focus: "Environment, renewable energy"
    },
    "agro-bio": {
      icon: "fas fa-seedling",
      focus: "Agriculture, food, biology"
    },
    "gestion-negocio": {
      icon: "fas fa-briefcase",
      focus: "Management, finance, business"
    },
    "salud-social": {
      icon: "fas fa-heartbeat",
      focus: "Health, social sciences"
    },
    "ciencias-base": {
      icon: "fas fa-flask",
      focus: "Mathematics, physics, modeling"
    },
    "interdisciplinario": {
      icon: "fas fa-project-diagram",
      focus: "Multidisciplinary projects"
    }
  };

  return infoMap[theme.id] || {
    icon: "fas fa-folder",
    focus: "Technical projects"
  };
};

const renderCategoryTabs = () => {
  if (!ui.categoryTabs || !themes.length) return;

  ui.categoryTabs.innerHTML = themes
    .map((theme) => {
      const info = getThemeInfo(theme);

      return `
        <button
          type="button"
          class="tab-card ${state.activeTheme === theme.id ? "is-active" : ""}"
          data-theme="${escapeHtml(theme.id)}"
          aria-label="Category ${escapeHtml(theme.label)}"
        >
          <span class="tab-card-icon">
            <i class="${escapeHtml(info.icon)}" aria-hidden="true"></i>
          </span>
          <span class="tab-card-body">
            <strong>${escapeHtml(theme.label)}</strong>
            <small>${escapeHtml(info.focus)}</small>
            <span class="tab-card-stats">
              <span>${formatNumber(theme.projectCount)} projects</span>
              <span>${formatNumber(theme.fileCount)} files</span>
              <span>score ${formatNumber(theme.evidenceScore)}</span>
            </span>
          </span>
        </button>
      `;
    })
    .join("");

  // Add event listeners
  ui.categoryTabs.querySelectorAll(".tab-card").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.theme || "";
      if (!id || id === state.activeTheme) return;
      state.activeTheme = id;
      renderCategoryTabs();
      renderCategoryPanel();
    });
  });
};

const getThemeProjects = (themeId) => {
  if (!data || !data.projects) return [];

  let filtered = data.projects.filter((p) => p.themeId === themeId);

  // Apply search filter if active
  if (state.searchTerm) {
    filtered = data.projects.filter((p) => {
      const searchStr = `${p.title || ''} ${p.summary || ''} ${p.topic || ''} ${(p.skills || []).join(' ')}`.toLowerCase();
      return searchStr.includes(state.searchTerm);
    });
  }

  return filtered
    .filter((p) => !isBasicScienceProject(p)) // Exclude basic science projects
    .sort((a, b) => {
      const scoreA = Number(a?.evidence?.evidenceScore || 0);
      const scoreB = Number(b?.evidence?.evidenceScore || 0);
      return scoreB - scoreA;
    });
};

const renderCategoryPanel = () => {
  if (!ui.categoryPanels || !state.activeTheme) return;

  const projects = getThemeProjects(state.activeTheme);
  const theme = themes.find((t) => t.id === state.activeTheme);

  if (!projects.length) {
    ui.categoryPanels.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-folder-open"></i>
        <p>No projects available in this category</p>
      </div>
    `;
    return;
  }

  // Show top 6 projects initially (reduced for less visual overload)
  const visibleCount = state.visibleProjects[state.activeTheme] || 6;
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = projects.length > visibleCount;

  ui.categoryPanels.innerHTML = `
    <div class="category-panel-header">
      <h3>
        <i class="${escapeHtml(getThemeInfo(theme).icon)}"></i>
        ${escapeHtml(theme.label)}
      </h3>
      <p>${formatNumber(projects.length)} projects found</p>
    </div>
    
    <div class="projects-grid">
      ${visibleProjects.map((project) => renderProjectCard(project)).join("")}
    </div>
    
    ${hasMore ? `
      <div class="load-more-wrap">
        <button class="load-more-btn" onclick="loadMoreProjects()">
          <i class="fas fa-chevron-down"></i>
          Show more projects (${projects.length - visibleCount} remaining)
        </button>
      </div>
    ` : ""}
  `;
};

const renderProjectCard = (project) => {
  const evidence = project.evidence || {};
  const score = Number(evidence.evidenceScore || 0);
  const files = Number(evidence.fileCount || 0);
  const dateStart = formatDate(evidence.dateStart);
  const dateEnd = formatDate(evidence.dateEnd);

  // Get deliverables for "what was done"
  const deliverables = asArray(evidence.deliverables);
  const hasCode = deliverables.some(d => d.key === 'code');
  const hasReports = deliverables.some(d => d.key === 'reports');
  const hasDiagrams = deliverables.some(d => d.key === 'diagrams');
  const hasSimulations = deliverables.some(d => d.key === 'simulations');

  // Build narrative summary from project data
  let narrativeSummary = '';

  // Check if custom description exists
  const projectId = project.id || project.topic.toLowerCase().replace(/\s+/g, '-');
  if (CUSTOM_DESCRIPTIONS[projectId]) {
    narrativeSummary = CUSTOM_DESCRIPTIONS[projectId];
  } else {
    // Fallback to generic summary with deliverable information
    narrativeSummary = project.summary;

    if (deliverables.length > 0) {
      const activities = [];
      if (hasCode) activities.push('code development and implementation');
      if (hasReports) activities.push('technical documentation and reports');
      if (hasDiagrams) activities.push('diagram and schematic design');
      if (hasSimulations) activities.push('simulations and modeling');

      if (activities.length > 0) {
        narrativeSummary += ` The project included ${activities.join(', ')}.`;
      }
    }
  }
  // Get top extensions for tools (only specialized software)
  const topExtensions = asArray(evidence.topExtensions).slice(0, 8);
  const tools = topExtensions
    .map(ext => {
      const e = ext.extension.toLowerCase();
      // Only return specialized tools, not generic office files
      if (e === '.py') return 'Python';
      if (e === '.m' || e === '.slx' || e === '.mdl') return 'MATLAB/Simulink';
      if (e === '.pkt') return 'Cisco Packet Tracer';
      if (e === '.cpp' || e === '.c' || e === '.h') return 'C/C++';
      if (e === '.java') return 'Java';
      if (e === '.cs') return 'C#';
      if (e === '.js' || e === '.ts') return 'JavaScript/TypeScript';
      if (e === '.sql') return 'SQL';
      if (e === '.r') return 'R';
      if (e === '.mat') return 'MATLAB';
      if (e === '.dwg' || e === '.dxf') return 'AutoCAD';
      if (e === '.sch' || e === '.pcb') return 'Electronic Design';
      if (e === '.vhd' || e === '.v') return 'VHDL/Verilog';
      if (e === '.ino') return 'Arduino';
      if (e === '.hex') return 'Firmware';
      if (e === '.gcode') return 'CNC/3D Printing';
      if (e === '.sldprt' || e === '.sldasm') return 'SolidWorks';
      if (e === '.step' || e === '.iges') return 'CAD 3D';
      // GIS specific tools
      if (e === '.shp') return 'QGIS/ArcGIS';
      if (e === '.kml' || e === '.kmz') return 'Google Earth/QGIS';
      if (e === '.qgs' || e === '.qgz') return 'QGIS';
      if (e === '.mxd' || e === '.aprx') return 'ArcGIS';
      if (e === '.geojson') return 'GIS (GeoJSON)';
      if (e === '.tif' || e === '.tiff') return 'GIS (Raster)';
      if (e === '.ipynb') return 'Jupyter Notebook';
      if (e === '.drawio') return 'Draw.io';
      if (e === '.vsd' || e === '.vsdx') return 'Visio';
      if (e === '.psd') return 'Photoshop';
      if (e === '.ai') return 'Illustrator';
      // Exclude generic files (Word, Excel, PDF, PowerPoint, etc.)
      return null;
    })
    .filter(tool => tool !== null) // Remove null values
    .filter((tool, index, self) => self.indexOf(tool) === index) // Remove duplicates
    .slice(0, 5); // Limit to 5 tools
  // Get skills from project
  const skills = asArray(project.skills).slice(0, 6);

  // Create technology badges for key tools
  const getTechBadge = (tool) => {
    const badges = {
      'Python': '<i class="fab fa-python"></i>',
      'MATLAB/Simulink': '<i class="fas fa-wave-square"></i>',
      'Cisco Packet Tracer': '<i class="fas fa-network-wired"></i>',
      'C/C++': '<i class="fas fa-code"></i>',
      'Java': '<i class="fab fa-java"></i>',
      'C#': '<i class="fas fa-hashtag"></i>',
      'JavaScript/TypeScript': '<i class="fab fa-js"></i>',
      'SQL': '<i class="fas fa-database"></i>',
      'QGIS/ArcGIS': '<i class="fas fa-globe-americas"></i>',
      'Arduino': '<i class="fas fa-microchip"></i>',
      'LabVIEW': '<i class="fas fa-flask"></i>',
      'AutoCAD': '<i class="fas fa-pencil-ruler"></i>',
      'SolidWorks': '<i class="fas fa-cubes"></i>',
      'Proteus': '<i class="fas fa-bolt"></i>',
      'Linux': '<i class="fab fa-linux"></i>',
      'Git': '<i class="fab fa-git-alt"></i>',
      'Docker': '<i class="fab fa-docker"></i>',
      'AWS': '<i class="fab fa-aws"></i>'
    };
    const icon = badges[tool] || '<i class="fas fa-tools"></i>';
    return `<span class="tech-badge" title="${tool}">${icon} ${tool}</span>`;
  };

  return `
    <div class="project-card">
      <div class="project-header">
        <h3>${escapeHtml(project.title || project.topic)}</h3>
        ${score > 0 ? `<span class="evidence-badge" title="Evidence score">⭐ ${score}</span>` : ''}
      </div>

      <div class="project-meta">
        ${dateStart ? `<span><i class="far fa-calendar"></i> ${dateStart}${dateEnd ? ` - ${dateEnd}` : ''}</span>` : ''}
        ${files > 0 ? `<span><i class="far fa-file-alt"></i> ${formatNumber(files)} files</span>` : ''}
      </div>

      <div class="project-description">
        <p>${escapeHtml(narrativeSummary)}</p>
      </div>

      ${tools.length > 0 ? `
        <div class="project-tools">
          <h4><i class="fas fa-tools"></i> Tools &amp; Technologies</h4>
          <div class="tech-badges-container">
            ${tools.map(tool => getTechBadge(tool)).join('')}
          </div>
        </div>
      ` : ''}

      ${skills.length > 0 ? `
        <div class="project-skills">
          <h4><i class="fas fa-lightbulb"></i> Skills Developed</h4>
          <div class="skills-list">
            ${skills.map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${deliverables.length > 0 ? `
        <div class="project-deliverables">
          <h4><i class="fas fa-box-open"></i> Deliverables</h4>
          <div class="deliverables-icons">
            ${hasCode ? '<span class="deliverable-icon" title="Source code">💻 Code</span>' : ''}
            ${hasReports ? '<span class="deliverable-icon" title="Documentation">📄 Reports</span>' : ''}
            ${hasDiagrams ? '<span class="deliverable-icon" title="Diagrams">📊 Diagrams</span>' : ''}
            ${hasSimulations ? '<span class="deliverable-icon" title="Simulations">🔬 Simulations</span>' : ''}
          </div>
        </div>
      ` : ''}
    </div>
  `;
};

// View project details function
window.viewProjectDetails = (projectId) => {
  const project = data.projects.find(p => (p.id || p.topic) === projectId);
  if (!project) return;

  // For now, just log - can be expanded to show modal
  console.log('View details:', project);
  alert(`Full details for "${project.title || project.topic}" coming soon`);
};

// Load more projects function
window.loadMoreProjects = () => {
  const currentCount = state.visibleProjects[state.activeTheme] || 6;
  state.visibleProjects[state.activeTheme] = currentCount + 6;
  renderCategoryPanel();
};

// ============================================================================
// INITIALIZATION
// ============================================================================

console.log('📦 Portfolio app loaded');
