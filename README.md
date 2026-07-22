# Portafolio · Wilmer Guevara

Landing personal de una página hecha con **React + Vite + Tailwind CSS**.
Incluye modo claro/oscuro, secciones de servicios, proyectos, skills, contacto
y botón para **descargar el CV en PDF**.

## Probar en tu computadora

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o superior).

```bash
npm install      # instala las dependencias (solo la primera vez)
npm run dev      # abre http://localhost:5173
```

Para generar la versión de producción:

```bash
npm run build    # genera la carpeta dist/
npm run preview  # prueba la build localmente
```

## Publicar gratis en Vercel

### Opción A — Con GitHub (recomendada)

1. Crea un repositorio nuevo en tu cuenta de GitHub (`github.com/wagg10`),
   por ejemplo `portafolio`.
2. Sube esta carpeta al repo:

   ```bash
   git init
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/wagg10/portafolio.git
   git push -u origin main
   ```

3. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
4. Clic en **Add New → Project**, elige tu repo `portafolio` e **Import**.
5. Vercel detecta Vite automáticamente. Deja todo por defecto y clic en **Deploy**.
6. En 1–2 minutos tendrás tu web en una URL tipo
   `https://portafolio-wagg10.vercel.app`. Cada `git push` la actualiza sola.

### Opción B — Sin GitHub (Vercel CLI)

```bash
npm install -g vercel
vercel           # sigue las instrucciones; la primera vez pide login
vercel --prod    # publica la versión final
```

## Personalizar

- **Tu foto:** coloca una imagen llamada `foto.jpg` dentro de la carpeta
  `public/` (idealmente cuadrada, ej. 500×500 px). Aparecerá en el círculo del
  inicio. Mientras no exista, se muestran tus iniciales "WG".
- **Imágenes de los proyectos:** en `public/` están las miniaturas
  `proyecto-quimica.svg`, `proyecto-plantas.svg` y `proyecto-inversiones.svg`.
  Reemplázalas por capturas reales (mismo nombre, o cambia la ruta `image` en
  `src/App.jsx`). Recomendado: formato horizontal 16:9 (ej. 1280×720 px).
- **Enlaces "Ver Proyecto":** cambia el campo `link` de cada proyecto en
  `src/App.jsx` por la URL de su repo o demo.
- **Textos, servicios, proyectos y skills:** edita los arreglos al inicio de
  `src/App.jsx` (`servicios`, `proyectos`, `skills`).
- **CV en PDF:** reemplaza `public/CV_Wilmer_Guevara.pdf` por tu versión más
  reciente (mantén el mismo nombre o actualiza el enlace en `App.jsx`).
- **Color principal:** busca `amber` en `src/App.jsx` y cámbialo por otro color
  de Tailwind (ej. `emerald`, `sky`, `violet`).

---
© Wilmer Alexander Guevara Guevara · Quito, Ecuador
