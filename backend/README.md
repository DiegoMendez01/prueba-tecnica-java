# Playlist API

API REST para el manejo de listas de reproducción de música, desarrollada con Spring Boot, H2 Database, y protegida con Basic Authentication. Además, incluye documentación automática con Swagger (OpenAPI).

---

## Tecnologías utilizadas

- Java 17
- Spring Boot 3
- Spring Security (Basic Auth)
- H2 Database (memoria)
- Springdoc OpenAPI (Swagger UI)
- Lombok
- Spring Data JPA
- Validation
- Spring Boot DevTools

---

## Configuración

### Base de datos

Se utiliza H2 en memoria para desarrollo, con consola habilitada en:  
`http://localhost:8080/h2-console`

Credenciales de la base de datos en `application.yml`:

```yaml
spring:
  datasource:
    url: jdbc:h2:mem:playlistsdb
    driver-class-name: org.h2.Driver
    username: diego
    password: diego123
  h2:
    console:
      enabled: true
      path: /h2-console
```

## Swagger UI

Puedes acceder a la documentación interactiva de la API en:

`http://localhost:8080/swagger-ui/index.html`

## Credenciales Basic Auth

Para acceder a los endpoints protegidos usa:

- **Usuario:** `admin`
- **Contraseña:** `admin123`

---

## API Endpoints

| Método  | Ruta                  | Descripción                              |
|---------|-----------------------|------------------------------------------|
| POST    | `/lists`              | Crear una nueva lista de reproducción    |
| GET     | `/lists`              | Obtener todas las listas de reproducción |
| GET     | `/lists/{listName}`   | Obtener una lista por nombre              |
| DELETE  | `/lists/{listName}`   | Borrar una lista por nombre               |