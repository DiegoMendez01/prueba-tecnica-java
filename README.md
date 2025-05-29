# 🎵 Playlist App

Aplicación completa para gestionar listas de reproducción musicales.  
Incluye un **backend** desarrollado en Spring Boot con autenticación básica y una **interfaz web frontend** en Angular para interactuar con la API REST de forma sencilla y visual.

## 🧩 Estructura del Proyecto

- `backend/`: API REST con Spring Boot y base de datos H2 en memoria.
- `frontend/`: Aplicación Angular para consumir y visualizar la API.
- Autenticación mediante Basic Auth (`admin/admin123`)
- Documentación de API generada automáticamente con Swagger UI.

---

## 📦 Tecnologías utilizadas

### Backend:
- Java 17 + Spring Boot 3
- Spring Security (Basic Auth)
- Spring Data JPA + H2 Database (memoria)
- Springdoc OpenAPI (Swagger)
- Lombok
- Validación (javax.validation)
- DevTools para hot reload

### Frontend:
- Angular CLI 19.2.14
- TypeScript
- Bootstrap/Tailwind (si aplica)
- HTTP Client integrado
- Formularios reactivos

### Repo Github:
`https://github.com/DiegoMendez01/prueba-tecnica-java.git`

---

## 🔧 Instalación general

### 1. Clonar el repositorio

```bash
git clone https://github.com/DiegoMendez01/prueba-tecnica-java.git
```

Luego accede a la carpeta del proyecto:

```bash
cd prueba-tecnica-java
```

## 🚀 Iniciar el Backend

Ingresa a la carpeta del backend:

```bash
cd backend
```

Ejecuta el proyecto con Maven Wrapper:

```bash
./mvnw spring-boot:run
```

También, directamente abriendo el proyecto Backend y ejecutarlo con el IDE para su uso.

Una vez iniciado, tendrás acceso a:

### Consola H2 (base de datos en memoria):

- **http://localhost:8080/h2-console**

Usa las credenciales configuradas en application.yml (usuario: diego, contraseña: diego123)

### Documentación Swagger UI:

- **http://localhost:8080/swagger-ui/index.html**

Para usar la API protegida, usa la autenticación básica:

- **Usuario:** `admin`
- **Contraseña:** `admin123`

## 🚀 Iniciar el Frontend

En una nueva terminal, vuelve a la carpeta raíz del proyecto y luego ingresa a la carpeta del frontend:

```bash
cd frontend
```

Instala las dependencias necesarias con npm:

```bash
npm install
```

Finalmente, levanta el servidor de desarrollo Angular:

```bash
ng serve
```

Abre en tu navegador:

`http://localhost:4200/`

La aplicación se recargará automáticamente cuando hagas cambios en el código.

# 🔐 Inicio de Sesión obligatorio

✅ IMPORTANTE:
Para poder acceder a las funcionalidades del frontend (listar, crear o eliminar playlists), debes iniciar sesión con las credenciales válidas:

- **Usuario:** `admin`
- **Contraseña:** `admin123`

Si no has iniciado sesión, la interfaz no mostrará las opciones ni realizará llamadas a la API.

## 📖 Uso

Desde la interfaz frontend podrás listar, crear y eliminar listas de reproducción.

Las llamadas se realizarán a la API REST protegida, por lo que se solicita autenticación básica.

Puedes consultar la documentación Swagger para explorar todos los endpoints disponibles.