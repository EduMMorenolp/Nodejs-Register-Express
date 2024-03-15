# User Management System

Este es un sistema de gestión de usuarios simple desarrollado con Node.js, Express, EJS y Prisma. Permite crear nuevos usuarios y ver una lista de usuarios existentes.

## Funcionalidades

- Crear nuevos usuarios proporcionando un nombre de usuario y correo electrónico.
- Ver una lista de todos los usuarios registrados.

## Requisitos

- Node.js instalado en tu sistema.

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/user-management-system.git
    ```

2. Entra al directorio del proyecto:

    ```bash
    cd user-management-system
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en el directorio raíz del proyecto y configura las variables de entorno necesarias (como la URL de la base de datos).

5. Inicia la aplicación:

    ```bash
    npm start
    ```

6. La aplicación estará disponible en `http://localhost:3000`.

## Uso

- Visita `http://localhost:3000/users` para ver la lista de usuarios.
- Visita `http://localhost:3000/createUser` para crear un nuevo usuario.

## Tecnologías Utilizadas

- Node.js
- Express
- EJS (Embedded JavaScript)
- Prisma (ORM para la base de datos)

## Contribuciones

Si encuentras algún error o deseas mejorar el proyecto, ¡no dudes en hacer una solicitud de extracción!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
