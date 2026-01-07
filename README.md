
# Jojes API
Api destinada a gestionar chistes.

## Instalación

1. Levantar la base de datos:
   docker compose up -d

2. Instalar dependencias:
   npm install

3. Crear archivo .env (Nunca es recomendable subir a repo estos archivos de configuracion, por tema de practicidad se sube en estos ejemplos)

# Configuraciones Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jokesdb
DB_USER=jokes
DB_PASSWORD=jokes

# App
PORT=3000
NODE_ENV=development

4. Iniciar API:
   npm run dev

Nota: La base de datos y las tablas se crean automáticamente mediante Sequelize al correr y levantar el docker compose.

