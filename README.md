
# Jokes API

# Jokes API
API REST construida con Node.js, Express y TypeScript para realizar gestion de chistes. La API incluye documentación Swagger y manejo global de errores.

---

## Tecnologías

- Node.js
- Express.js
- TypeScript
- Jest (Testing)
- Swagger (Documentación)
- Sequelize
- PostgreSQL

---

## Estructura del proyecto

```
src/
 ├─ controllers/          # Controladores
 ├─ services/             # Lógica de negocio
 ├─ routes/               # Definición de endpoints
 ├─ middlewares/          # Manejo global de errores
 ├─ types/                # Tipos TypeScript personalizados
 ├─ app.ts                # Configuración principal de Express
 ├─ server.ts             # Servidor
doc/
 └─ swagger_jokes_api.yaml # Documentación Swagger
unitTest/
 └─ jokes.service.test.ts  # Tests unitarios
----

## Pasos
npm install
npm run dev
curl http://localhost:3000/jokes
