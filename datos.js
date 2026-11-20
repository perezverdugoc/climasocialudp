/* ============================================================
   DATOS DEL SITIO · Clima Social Encuesta ICSOH-UDP
   ------------------------------------------------------------
   Para agregar un capítulo nuevo: copia un bloque { ... },
   pégalo ARRIBA de todo en la lista "serie2026" y cambia los datos.
   Si un documento no existe, deja "" (comillas vacías): el botón no aparece.
   No borres comas ni llaves.
   ============================================================ */

const B = "https://icsoh.udp.cl/cms/wp-content/uploads/";

const SITIO = {
  spotify: "https://open.spotify.com/show/033pnrFlCGefunJtLCGJ5L",
  youtube: "https://www.youtube.com/@climasocialudp",
  instagram: "https://www.instagram.com/climasocialudp/",
  repositorio: "https://icso.udp.cl/encuesta"
};

/* ---------- SERIE 2026 (el más reciente primero) ---------- */
const serie2026 = [
  {
    cap: 3,
    fecha: "Octubre 2026",
    titulo: "Convivencia en Chile",
    subtitulo: "Convivir sin manual",
    color: "#D36473",
    comunicado: B + "2026/10/Comunicado-Encuesta-ICSOH-UDP-Octubre-.pdf",
    podcast: "",
    informe: B + "2026/10/Clima-Social-Capitulo-3-Octubre-2026.pdf",
    infocus: B + "2026/10/Infocus-Capítulo-3-Octubre-2026-.pdf",
    cuestionario: B + "2026/10/Cuestionario-3.-Encuesta-Octubre.pdf",
    ficha: "",
    tablas: "",
    base: ""
  },
  {
    cap: 2,
    fecha: "Agosto 2026",
    titulo: "Tecnología e inteligencia artificial",
    subtitulo: "Adopción masiva, desconfianza persistente y demanda de resguardos",
    color: "#3D6F8E",
    comunicado: B + "2026/08/Comunicado-Clima-Social-Agosto-2026-.pdf",
    podcast: "",
    informe: B + "2026/08/Clima-Social-Capítulo-2-Agosto-2026.pdf",
    infocus: B + "2026/08/Infocus-Capítulo-2-Agosto-2026.pdf",
    cuestionario: B + "2026/08/Cuestionario-encuesta-Agosto.pdf",
    ficha: "",
    tablas: B + "2026/08/ICSO-UDP-Agosto-2026-Tablas.xlsx",
    base: B + "2026/11/ICSO-UDP-2026-Datos-VF.zip"
  },
  {
    cap: 1,
    fecha: "Junio 2026",
    titulo: "Garantías sociales en tiempos de incertidumbre",
    subtitulo: "Estado y mercado",
    color: "#4E9A78",
    comunicado: B + "2026/06/Comunicado-Clima-Social-Junio-2026.pdf",
    podcast: "",
    informe: B + "2026/06/Clima-Social-Capitulo-1-Junio-2026.pdf",
    infocus: B + "2026/07/Infocus-Capitulo-1-Junio-2026.pdf",
    cuestionario: B + "2026/06/Cuestionario-1.-Junio-2026.pdf",
    ficha: B + "2026/06/Ficha-Tecnica-Medicion-1.pdf",
    tablas: "",
    base: B + "2026/09/UDP-Junio-2026-Datos.zip"
  }
];

/* ---------- SERIE 2025 (8 capítulos, mayo 2025 – enero 2026) ---------- */
const serie2025 = [
  {
    cap: 8, fecha: "Enero 2026", titulo: "El clima que viene: expectativas y realidad",
    nota: "https://icso.udp.cl/encuesta-icso-udp-enero-2026-serie-clima-social-expectativas-frente-al-nuevo-gobierno/",
    podcast: "",
    informe: B + "2026/01/Encuesta-ICSO-UDP-Enero-2026-VF-1.pdf",
    infocus: B + "2026/01/Infocus-Informe-enero-26.-VF-1.pdf",
    cuestionario: B + "2026/01/Cuestionario-encuesta-enero-VF.docx.pdf",
    manual: B + "2026/01/Manual-de-uso-Cap-8-Expectativas-y-realidad.pdf",
    tablas: B + "2026/01/Encuesta-UDP-Enero-2026-Tablas.xlsx",
    base: B + "2026/01/Encuesta-UDP-Enero-2026.zip"
  },
  {
    cap: 7, fecha: "Noviembre 2025", titulo: "Clima social antes del cierre",
    nota: "https://icso.udp.cl/encuesta-icso-udp-noviembre-2025-serie-clima-social-el-clima-antes-del-cierre/",
    podcast: "",
    informe: B + "2025/12/Encuesta-Nov-ICSO-UDP.pdf",
    infocus: "",
    cuestionario: B + "2025/12/Cuestionario-encuesta-Nov-.docx.pdf",
    manual: B + "2025/12/Manual-de-usuario-Nov.pdf",
    tablas: B + "2025/12/Encuesta-UDP-Noviembre.xlsx",
    base: B + "2025/12/Encuesta-UDP-Noviembre.zip"
  },
  {
    cap: 6, fecha: "Octubre 2025", titulo: "¿Da lo mismo quién gobierne?",
    nota: "https://icso.udp.cl/encuesta-icso-udp-octubre-2025-serie-clima-social-da-lo-mismo-quien-gobierne/",
    podcast: "",
    informe: B + "2025/11/Encuesta-ICSO-UDP-Octubre-1.pdf",
    infocus: B + "2025/11/Infocus-Informe-OCT.pptx-1.pdf",
    cuestionario: B + "2025/11/Cuestionario-encuesta-octubre.docx.pdf",
    manual: B + "2025/11/Manual-de-uso-Cap-6-¿Da-lo-mismo-quien-gobierne.pdf",
    tablas: B + "2025/11/Encuesta-UDP-Octubre.xlsx",
    base: B + "2025/11/Encuesta-UDP-Octubre-Datos.zip"
  },
  {
    cap: 5, fecha: "Septiembre 2025", titulo: "Privilegios e impunidad",
    nota: "https://icso.udp.cl/encuesta-icso-udp-septiembre-2025-serie-clima-social-boleta-o-factura-el-privilegio-y-el-pituto-le-ganan-al-merito/",
    podcast: "",
    informe: B + "2025/10/Encuesta-ICSO-UDP-Privilegio-e-Impunidad-1.pdf",
    infocus: "",
    cuestionario: B + "2025/10/Cuestionario-_Privilegio.docx.pdf",
    manual: B + "2025/10/Manual-de-uso-Cap-3-Masculinidad.pdf", /* REVISAR: el nombre dice Cap 3 */
    tablas: B + "2025/10/Encuesta-UDP-Septiembre-Tablas.xlsx",
    base: B + "2025/10/Encuesta-UDP-Septiembre.zip"
  },
  {
    cap: 4, fecha: "Agosto 2025", titulo: "La convivencia social",
    nota: "https://icso.udp.cl/encuesta-icso-udp-julio-2025-serie-clima-social-convivencia-social-desconfianza-y-emociones-negativas-marcan-interacciones-en-chile/",
    podcast: "",
    informe: B + "2025/08/Encuesta-ICSO-UDP-Cap-4-Convivencia-3.pdf",
    infocus: B + "2025/08/Infocus-Informe-2-Convivencia.pdf",
    cuestionario: B + "2025/08/Cuestionario-convivencia.docx.pdf",
    manual: B + "2025/08/Manual-de-uso-Cap-4-Convivencia.pdf",
    tablas: B + "2025/08/Encuesta-UDP-Agosto-Tablas.xlsx",
    base: B + "2025/08/Encuesta-ICSO-UDP-Agosto.zip"
  },
  {
    cap: 3, fecha: "Julio 2025", titulo: "Masculinidad e intimidad",
    nota: "https://icso.udp.cl/encuesta-icso-udp-julio-2025-serie-clima-social-ser-hombre-hoy-en-chile-encuesta-muestra-incomodidad-masculina-frente-a-cambios-sociales/",
    podcast: "",
    informe: B + "2025/08/Informe-encuesta-cap3-2025.pdf",
    infocus: "",
    cuestionario: B + "2025/08/Cuestionario-cap3-2025.pdf",
    manual: B + "2025/08/Manual-de-usuario-cap3-2025.pdf",
    tablas: B + "2025/08/Tablas-cap3-2025.xlsx",
    base: B + "2025/08/Base-de-datos-cap3-2025.zip"
  },
  {
    cap: 2, fecha: "Junio 2025", titulo: "Los cuidados. Ternuras y cansancio",
    nota: "https://icso.udp.cl/encuesta-icso-udp-junio-2025-serie-clima-social-zoom-a-los-cuidados-emociones-tensiones-y-contradicciones/",
    podcast: "",
    informe: B + "2025/06/Informe-Encuesta.pdf",
    infocus: B + "2025/06/ICSO-UDP_Informe-Panel-Cuidados-1.pdf",
    cuestionario: B + "2025/06/Cuestionario-Cuidados-final.docx.pdf",
    manual: B + "2025/06/Manual-de-uso-encuesta.pdf",
    tablas: B + "2025/06/Tablas-en-excel.xlsx",
    base: B + "2025/06/Base-de-datos.zip"
  },
  {
    cap: 1, fecha: "Mayo 2025", titulo: "Rabias y temores",
    nota: "https://icso.udp.cl/encuesta-icso-udp-seguridad-salud-y-situacion-economica-marcan-los-temores-de-la-ciudadania/",
    podcast: "",
    informe: B + "2025/05/Mayo2025princiapalesresultados.pdf",
    infocus: "",
    cuestionario: B + "2025/05/Mayo2025Cuestionario.pdf",
    manual: B + "2025/05/Mayo2025manualdeusuario.pdf",
    tablas: B + "2025/05/Mayo2025tablas.pdf",
    base: B + "2025/05/Mayo2025basededatos.zip"
  }
];

/* ---------- EQUIPO ---------- */
const equipo = [
  { nombre: "Claudio Fuentes", cargo: "Cientista político, académico de la Escuela de Ciencia Política UDP. Director del ICSOH UDP. Encargado del proyecto." },
  { nombre: "Gabriel Otero", cargo: "Sociólogo, académico de la Escuela de Sociología UDP. Director del Observatorio de Desigualdades UDP. Coordinador del proyecto." },
  { nombre: "Lidia Casas", cargo: "Abogada, académica de la Facultad de Derecho UDP. Directora del Centro de Derechos Humanos UDP." },
  { nombre: "Macarena Orchard", cargo: "Socióloga, académica de la Escuela de Sociología UDP. Directora del Magíster en Métodos para la Investigación Social UDP." },
  { nombre: "Pedro Valenzuela", cargo: "Sociólogo, analista de investigación del proyecto." },
  { nombre: "Constanza Pérez", cargo: "Periodista, encargada de las comunicaciones del proyecto." }
];
