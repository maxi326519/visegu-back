# Project Scripts Documentation

Este documento proporciona una descripción detallada de los scripts disponibles en el archivo `package.json`. Estos scripts ayudan a automatizar tareas comunes durante el desarrollo, la construcción, la prueba y la ejecución del proyecto.

## Scripts

### `npm run dev`

- **Descripción**: Inicia el servidor en modo de desarrollo utilizando `ts-node-dev`, lo cual reinicia automáticamente el servidor cada vez que se detectan cambios en el código fuente.
- **Comando**: `ts-node-dev ./src/index.ts`
- **Uso recomendado**: Utilizar durante el desarrollo para obtener una experiencia de desarrollo iterativa rápida.

### `npm run backup`

- **Descripción**: Ejecuta la aplicación en modo de desarrollo con la opción adicional `--load-backup`, que se puede utilizar para cargar datos de backup al iniciar la aplicación.
- **Comando**: `ts-node-dev ./src/index.ts --load-backup`
- **Uso recomendado**: Utilizar cuando necesites cargar o restaurar un backup de datos durante el desarrollo.

### `npm start`

- **Descripción**: Ejecuta la aplicación compilada desde el directorio `build`.
- **Comando**: `node ./build/index.js`
- **Uso recomendado**: Utilizar en entornos de producción donde el código fuente ya ha sido compilado a JavaScript.

### `npm run start:server`

- **Descripción**: Compila la aplicación usando TypeScript Compiler y luego inicia la aplicación con `pm2`, que gestiona el proceso de la aplicación.
- **Comando**: `npm run build && pm2 start ./build/index.js`
- **Uso recomendado**: Se utiliza para iniciar el servidor en el entorno de produccion en la nube

### `npm run build`

- **Descripción**: Compila los archivos TypeScript del proyecto a JavaScript utilizando el compilador TypeScript (`tsc`).
- **Comando**: `tsc`
- **Uso recomendado**: Ejecutar antes de desplegar en producción para asegurarse de que todos los archivos TypeScript sean compilados correctamente.

### `npm run test`

- **Descripción**: Ejecuta los tests del proyecto utilizando `jest`, un marco de pruebas para JavaScript.
- **Comando**: `npx jest`
- **Uso recomendado**: Utilizar para ejecutar las pruebas del proyecto y verificar que las nuevas características o cambios no rompan funcionalidades existentes.

## Notas Adicionales

- Asegúrate de tener todas las dependencias instaladas antes de ejecutar estos comandos, incluidos `ts-node-dev`, `tsc`, `pm2`, y `jest`.
- Algunos comandos como `npm run start:server` pueden requerir configuraciones adicionales o variables de entorno para funcionar correctamente.

Este documento debe mantenerse actualizado con cualquier cambio en los scripts para garantizar que toda la información sea relevante y útil para el equipo.
