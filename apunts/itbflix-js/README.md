# 📝 Hoja de Apuntes: Diseño de Interfaces

---

## 1. Usabilidad Web (AEA6.1)

**Definición:**  
Medida en que un usuario puede interactuar con un sitio de forma **efectiva** (cumplir tareas), **eficiente** (mínimo esfuerzo) y **satisfactoria**.

### 🔑 Conceptos Clave

**UI (Interfaz de Usuario):**  
  Lo que el usuario ve (colores, botones, tipografías, disposición).

**UX (Experiencia de Usuario):**  
  Lo que el usuario siente (facilidad de uso, sensaciones, flujo de navegación).

**Carga Cognitiva:**  
  Cantidad de información que el cerebro debe procesar.  
  👉 Menos información y menús claros reducen el abandono.

---

### 📌 Las 10 Heurísticas de Nielsen (Principios Prácticos)

**Visibilidad del estado del sistema (P9):**  
  El usuario debe recibir feedback (cambios de color, iconos de carga, breadcrumbs).

**Coincidencia con el mundo real (P10):**  
  Hablar el idioma del usuario. Usar símbolos conocidos (lupa para buscar, menú hamburguesa).

**Control y libertad (P11):**  
  Capacidad de deshacer/cancelar acciones (ej. cancelar envío de correo).

**Consistencia y estándares (P12):**  
  No cambies de sitio cosas que ya funcionan (ej. el carrito siempre arriba a la derecha).

**Prevención de errores (P13):**  
  Diseño pulido para que el usuario no se equivoque (ej. aviso de "olvido de adjunto").

**Reconocer antes que recordar (P14):**  
  Autocompletado, sugerencias de búsqueda o mostrar productos ya visitados.

**Flexibilidad y eficiencia (P15):**  
  Atajos y personalización para usuarios avanzados y novatos.

**Ayuda con los errores (P16):**  
  Ayudar a reconocer y corregir el error mediante chats, FAQs o soporte.

---

## 2. Diseño Responsive (AEA6.2)

**Concepto:**  
El diseño se adapta fluida o estáticamente a diferentes tamaños de pantalla.

### 📱 Estrategias y Tecnologías

**Responsive (RWD):**  
  Diseño fluido (usa %), se adapta milímetro a milímetro.

**Adaptativo (AWD):**  
  Diseño por saltos (snaps), usa plantillas fijas para medidas concretas.

**Mobile First:**  
  Diseñar primero para móvil y añadir complejidad para pantallas grandes (min-width).  
  👉 Es la tendencia actual.

### 📏 Breakpoints comunes

576px → Móvil  
768px → Tablet  
992px → Portátil  
1200px → PC  

### 🧱 Sistemas de Maquetación

**Flexbox:**  
  Para una dimensión (filas o columnas).

**CSS Grid:**  
  Para dos dimensiones (filas y columnas simultáneamente).

---

## 3. Accesibilidad Web (AEA5.1)

**Definición:**  
Garantizar que personas con discapacidades (visuales, auditivas, motoras, etc.) puedan percibir, entender y navegar la web.

### ♿ Estándares WCAG y Principios POUR

**P – Perceptible:**  
  Información disponible para los sentidos (ej. texto alternativo en imágenes).

**O – Operable:**  
  La interfaz debe ser manejable (ej. navegación solo con teclado).

**U – Comprensible:**  
  Texto legible y comportamiento predecible.

**R – Robusto:**  
  Compatible con tecnologías de asistencia (ej. lectores de pantalla).

### 📊 Niveles de Conformidad

**Nivel A:**  
  Mínimo indispensable.

**Nivel AA:**  
  Estándar legal más común (incluye contraste suficiente).

**Nivel AAA:**  
  Máxima excelencia, difícil de alcanzar.

---

## 4. SEO – Posicionamiento Orgánico (AEA5.2)

**Objetivo:**  
Aparecer en los primeros resultados de la **SERP** (Search Engine Results Page) sin pagar (resultados orgánicos).

### 🔎 Conceptos Técnicos

**Crawling (Rastreo):**  
  Los robots (spiders) saltan de enlace en enlace descubriendo páginas.

**Indexación:**  
  Proceso de guardar y organizar el contenido en la base de datos de Google.

**Sitemap XML:**  
  Archivo que lista todas las URLs de la web para ayudar a los bots a indexarlas mejor.

---

# 🛠️ Guía Práctica (Para ejercicios del examen)

## 🌐 Compatibilidad entre Navegadores

Usa **Vendor Prefixes** (ej. -webkit-, -moz-) para propiedades CSS nuevas.
Consulta **Can I Use** para verificar compatibilidad en navegadores específicos.

## 🎨 Uso de Preprocesadores (Sass / SCSS)

**SCSS:**  
  Sintaxis similar a CSS con llaves {} y ; (Recomendado).

**Sass:**  
  Sintaxis basada en indentación, sin llaves.

## 🔍 Herramientas de Auditoría

**Google Lighthouse:**  
  Mide rendimiento, accesibilidad y SEO.

**WAVE:**  
  Extensión visual para detectar errores de accesibilidad.

**Hotjar (mapas de calor):**  
  Permite ver dónde hacen clic los usuarios.

  # 📘 Diseño de Interfaces – Guía Completa (P5 y P6)

Apuntes resumidos para examen sobre:

Usabilidad
Diseño Responsive
Accesibilidad (WCAG)
SEO
Herramientas de auditoría
Sass / SCSS
Métricas de rendimiento
Test A/B

---

# 1️⃣ Usabilidad Web (AEA6.1)

## 📌 Definición

Medida en que un usuario puede interactuar con un sitio de forma:

**Efectiva** → Cumple tareas
**Eficiente** → Con mínimo esfuerzo
**Satisfactoria** → Buena experiencia

---

## 🔑 Conceptos Clave

### UI (Interfaz de Usuario)
Lo que el usuario **ve**:
Colores
Botones
Tipografías
Layout

### UX (Experiencia de Usuario)
Lo que el usuario **siente**:
Facilidad de uso
Fluidez
Sensaciones

### Carga Cognitiva
Cantidad de información que el cerebro debe procesar.

👉 Menos elementos y menús claros = menos abandono.

---

## 🧠 Heurísticas de Nielsen (P6)

**Visibilidad del estado** → Feedback (mensaje de éxito, loaders)
**Mundo real** → Lenguaje claro y validación correcta
**Control y libertad** → Botón deshacer / confirmar borrado
**Consistencia** → Elementos en el mismo lugar
**Prevención de errores** → Avisos antes de fallar
**Reconocer antes que recordar** → Autocompletado
**Flexibilidad** → Atajos para usuarios avanzados
**Ayuda con errores** → FAQs, soporte, mensajes claros

---

# 2️⃣ Diseño Responsive (AEA6.2)

## 📱 Concepto

El diseño se adapta a distintos tamaños de pantalla.

---

## Estrategias

### Responsive (RWD)
Fluido
Usa %
Se adapta continuamente

### Adaptativo (AWD)
Por saltos
Plantillas fijas

### Mobile First (TENDENCIA ACTUAL)
Se diseña primero móvil
Luego se amplía con min-width

---

## 📏 Breakpoints comunes

| Dispositivo | Ancho  |
| ----------- | ------ |
| Móvil       | 576px  |
| Tablet      | 768px  |
| Portátil    | 992px  |
| PC          | 1200px |

---

## 🧱 Sistemas de maquetación

**Flexbox** → 1 dimensión
**CSS Grid** → 2 dimensiones

---

# 3️⃣ Accesibilidad Web (AEA5.1)

## 🎯 Objetivo

Permitir que personas con discapacidad puedan:

Percibir
Entender
Navegar
Interactuar

---

## WCAG – Principios POUR

**P – Perceptible**
**O – Operable**
**U – Comprensible**
**R – Robusto**

---

## 📊 Niveles

**A** → Mínimo
**AA** → Estándar legal
**AAA** → Excelencia

---

## 🎨 Ratio de Contraste (AA)

Texto normal (<18px) → **4.5:1**
Texto grande → **3:1**

---

## 💻 Código Accesible

### Imágenes

html
<img src="foto.jpg" alt="Descripción clara">

Decorativa:

<img src="decoracion.png" alt="">

Botón con icono (sin texto)

<button aria-label="Cerrar menú">
  <i class="icon-x"></i>
</button>

🏗️ Semántica HTML5

Sustituir <div> por:

<main> → Solo 1 por página
<nav>
<section>
<article>
<header>
<footer>

4️⃣ SEO – Posicionamiento Orgánico (AEA5.2)

🎯 Objetivo
Aparecer en la SERP sin pagar.

🔎 Conceptos

Crawling
Bots recorren enlaces.

Indexación
Google guarda el contenido.

📄 Robots.txt

Ubicación: /public

User-agent: *
Disallow: /admin
Allow: /
Sitemap: https://tu-web.com/sitemap.xml

🗺️ Sitemap.xml

Home → 1.0
Resto → 0.8

5️⃣ Herramientas de Auditoría (P5)

WAVE
Analiza DOM renderizado
Detecta:
  - Missing alt
  - Missing labels
  - Problemas de contraste

Google Lighthouse
Evalúa:
Rendimiento
Accesibilidad
Best Practices
SEO
Nota del 0 al 100.

Chrome CSS Overview
Detecta:
Colores repetidos
Fuentes pequeñas
CSS inútil

Can I Use
Verifica compatibilidad de:
gap
subgrid
backdrop-filter

6️⃣ Sass / SCSS (P6)

Mobile First

.grid-productes {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .grid-productes {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

Nesting

nav {
  ul { margin: 0; }
  li { display: inline; }
}

Conceptos clave
Mixins
Condicionales
Bucles
Reutilización de código

7️⃣ Métricas de Rendimiento (Lighthouse)

FCP
Primer contenido visible
Ideal: < 1.8s

LCP
Elemento más grande cargado.

CLS
Elementos que "saltan".

Solución:

<img src="foto.jpg" width="600" height="400">

8️⃣ Test A/B y Hotjar

Test A/B
Comparar dos versiones:
Botón verde vs azul
CTA grande vs pequeño

Hotjar
Heatmaps → Dónde hacen clic
Recordings → Vídeos reales de usuarios

🎓 CONSEJO FINAL DE EXAMEN

Si te dan HTML lleno de <div> y te piden mejorar SEO y accesibilidad:

✔ Semántica HTML5
✔ Atributos alt
✔ aria-label
✔ Meta description
✔ Contraste AA
✔ Mobile First
✔ Buen feedback al usuario

🚀 Checklist rápida antes de entregar práctica

[ ] Tiene <main> correctamente
[ ] Todas las imágenes tienen alt
[ ] Botones con icono tienen aria-label
[ ] Contraste AA correcto
[ ] Responsive con min-width
[ ] Robots.txt correcto
[ ] Sitemap.xml generado
[ ] Lighthouse > 80 en todo