# Respuestas a la prueba técnica de Java

## Pregunta 1

¿Cuáles de los siguientes es verdadero? (Seleccione todos los que apliquen)

Respuestas correctas:

* ✅ A. Bunny es una clase.
* ✅ D. Bunny es una referencia a un object. *(cuando se instancia)*
* ✅ E. bun es una referencia a un object.

---

## Pregunta 2

Respuesta correcta:

* ✅ D. 03

---

## Pregunta 3

Respuesta correcta:

* ✅ B. 10

---

## Pregunta 4

Respuesta correcta:

* ✅ E. Error de compilación línea 6

---

## Pregunta 5

¿Cuál de las siguientes afirmaciones es correcta?

* ✅ C. "X extends Y" es correcto si X y Y son ambas clases o ambas interfaces.

---

## Pregunta 6

Respuesta correcta:

* ✅ D. 9

---

## Pregunta 7

Respuesta correcta:

* ✅ A. 0

---

## Pregunta 8

Respuesta correcta:

* ✅ B. B
* ✅ C. C
* ✅ D. D
* ✅ E. E

---

## Pregunta 9

### 9.1 Nombre, email, ciudad y país de todas las personas

```sql
SELECT 
    p.nombre AS nombre_persona,
    p.email,
    c.nombre_ciudad,
    pa.nombre_pais
FROM PERSONA p
JOIN CIUDAD c ON p.id_ciudad = c.id_ciudad
JOIN PAIS pa ON c.id_pais = pa.id_pais;
```

### 9.2 Países que no tienen personas asociadas

```sql
SELECT 
    pa.nombre_pais
FROM PAIS pa
LEFT JOIN CIUDAD c ON pa.id_pais = c.id_pais
LEFT JOIN PERSONA p ON c.id_ciudad = p.id_ciudad
WHERE p.id_persona IS NULL;
```

### 9.3 Personas con email terminado en ".com" y que viven en ciudades distintas de Medellín y Bogotá

```sql
SELECT 
    p.nombre AS nombre_persona,
    p.email,
    c.nombre_ciudad,
    pa.nombre_pais
FROM PERSONA p
JOIN CIUDAD c ON p.id_ciudad = c.id_ciudad
JOIN PAIS pa ON c.id_pais = pa.id_pais
WHERE c.nombre_ciudad NOT IN ('Medellín', 'Bogotá')
  AND p.email LIKE '%.com';
```