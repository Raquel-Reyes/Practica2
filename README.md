# API de Usuarios con Express

Este proyecto implementa una API sencilla para gestión de usuarios, inicio de sesión y recuperación de contraseña usando tokens temporales.

---

## Tecnologías usadas
- Node.js
- Express
- UUID

---

## Estructura básica
```
project/
│── Controllers/
│   └── userController.js
│── Database/
│   ├── database.js
│   └── databaseToken.js
│── router.js
│── server.js
│── package.json
```

- `database.js` → almacena usuarios en memoria.  
- `databaseToken.js` → almacena los tokens de recuperación.  
- `userController.js` → lógica de creación, login, recuperación y cambio de contraseña.  
- `router.js` → rutas principales de la API.  

---

## Instalación
1. Clonar el repositorio
   ```bash
   git clone https://github.com/Raquel-Reyes/Practica2.git
   ```

2. Instalar dependencias
   ```bash
   npm install express uuid
   ```

3. Ejecutar el servidor
   ```bash
   node app.js
   ```
   Por defecto corre en: `http://localhost:3001`

---

## Endpoints disponibles

### 1. Crear usuario
**POST** `/usuarios`  
Crea un nuevo usuario en memoria.

Request body:
```json
{
  "correo": "user@example.com",
  "contrasena": "12345"
}
```

Response:
```json
{
  "message": "Usuario creada correctamente",
  "nuevoUsuario": {
    "correo": "user@example.com",
    "contrasena": "12345"
  }
}
```

---

### 2. Login
**GET** `/usuarios`  

Request body:
```json
{
  "correo": "user@example.com",
  "contrasena": "12345"
}
```

Response:
```json
{
  "status": "¡Bienvenido(a) user@example.com, inicio de sesión exitoso!"
}
```

---

### 3. Recuperar contraseña (olvidada)
**GET** `/usuarios/:correo`

Ejemplo:
```
GET http://localhost:3001/usuarios/user@example.com
```

Response:
```json
{
  "message": "Enlace de recuperación: localhost:3001/usuarios/resetPassword?token=xxxxx-xxxx"
}
```

---

### 4. Cambiar contraseña
**POST** `/usuarios/resetPassword`  

Request body:
```json
{
  "token": "xxxxx-xxxx",
  "contrasena": "nueva123"
}
```

Response:
```json
{
  "message": "Contraseña actualizada correctamente"
}
```

---

## Notas importantes
- Actualmente los usuarios y tokens se guardan en memoria, por lo que se borran al reiniciar el servidor.
- Los tokens tienen 30 minutos de validez.
- El campo `estado` del token se marca como `"usado"` cuando ya fue consumido.

---