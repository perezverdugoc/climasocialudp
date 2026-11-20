# climasocialudp

Sitio Encuesta Clima Social ICSOH-UDP · Observatorio de Desigualdades

- Sitio: https://perezverdugoc.github.io/climasocialudp/
- Se muestra dentro de https://observatoriodesigualdades.udp.cl/encuesta-icsoh/ (iframe).

## Cómo actualizar
Todo el contenido está en **`datos.js`**. Para agregar un capítulo:
1. Abre `datos.js` → lápiz (Edit).
2. Copia un bloque `{ ... },` de `serie2026`, pégalo arriba del primero y cambia los datos.
3. Si un documento no existe, deja `""`: el botón no aparece.
4. **Commit changes**. En 1–2 minutos se ve en el sitio y en el Observatorio.

`index.html` no se toca para actualizar contenido.
