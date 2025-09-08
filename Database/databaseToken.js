const tokens = [
  {
    correo: "usuario1@ejemplo.com",
    estado: "activo",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    creado: Date.now(),               // Hora de creación
    expiracion: Date.now() + 30*60*1000 // Expira en 30 minutos
  },
  {
    correo: "usuario2@ejemplo.com",
    estado: "activo",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    creado: Date.now(),
    expiracion: Date.now() + 30*60*1000
  },
  {
    correo: "usuario3@ejemplo.com",
    estado: "activo",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    creado: Date.now(),
    expiracion: Date.now() + 30*60*1000
  },
  {
    correo: "usuario4@ejemplo.com",
    estado: "activo",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    creado: Date.now(),
    expiracion: Date.now() + 30*60*1000
  },
  {
    correo: "usuario5@ejemplo.com",
    estado: "activo",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    creado: Date.now(),
    expiracion: Date.now() + 30*60*1000
  }
];

export default tokens;
