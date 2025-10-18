
# App Veterinaria

API REST desarrollada en **Node.js** y Express para la gestión de **clientes** y **mascotas** de una veterinaria, con conexión a **MongoDB Atlas**.
El proyecto permite realizar operaciones **CRUD completas (crear, leer, actualizar y eliminar registros)** a través de endpoints seguros y organizados.

---

##  Características principal
-Arquitectura basada en Express.js.

-Conexión a base de datos MongoDB Atlas mediante Mongoose.

-Rutas separadas por entidad (clientes y mascotas).

-Controladores modularizados para una mejor organización del código.

-Variables de entorno gestionadas con Dotenv.

-Compatible con Postman para pruebas de API.

---

##  Tecnologías utilizadas
-**Node.js**
-**Express.js**
-**MongoDB Atlas**
-**Mongoose**
-**Dotenv**
-**Nodemon**
-**Postman**
---

##  Instalación

Clonar el repositorio:
```bash
git clone https://github.com/valentinapugliesedegaetano/api-veterinaria.git
cd api-veterinaria

Instalar dependencias
```bash

npm install
```
---

## Ejecucion del servidor
Modo desarrollo (con nodemon):
```bash
npm run dev
```
Modo producción:
```bash
npm start
```

---


---
## Estructura del proyecto

```plaintext
api-veterinaria/
│
├── app.js
├── package.json
├── .env
├── .gitignore
├── README.md
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── clientesController.js
│   └── mascotasController.js
│
├── models/
│   ├── Cliente.js
│   └── Mascota.js
│
└── routes/
    ├── clientes.js
    └── mascotas.js
```
---




## Licencia
Este proyecto está bajo la licencia **MIT**.  
