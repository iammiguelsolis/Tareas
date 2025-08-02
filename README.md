# Lista de Tareas - React + Vite

Aplicación simple de lista de tareas (ToDo) construida con React, Vite y TailwindCSS. Permite agregar y eliminar tareas, conectándose a una API externa para almacenar los datos.

## Características

- Añadir nuevas tareas.
- Eliminar tareas existentes.
- Persistencia de tareas usando una API REST.
- Estilos modernos con TailwindCSS.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/iammiguelsolis/Tareas
   cd Tareas
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto

```
src/
  App.jsx
  main.jsx
  index.css
  components/
    ListaTareas.jsx
public/
  vite.svg
```

## Scripts

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la versión de producción.
- `npm run lint` — Ejecuta ESLint.

## Dependencias principales

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)

## API

La aplicación utiliza la API pública en:  
`https://backend-tan-three.vercel.app/api/notes`

## Licencia

MIT
