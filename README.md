# 🏥 Sistema de Gestión Veterinaria

Sistema completo de gestión para clínicas veterinarias desarrollado con Astro y Tailwind CSS.

## ✨ Características

- 🔐 **Sistema de Autenticación**: Login y registro de usuarios
- 👥 **Gestión de Clientes**: Crear, editar, eliminar y buscar clientes
- 🐾 **Gestión de Mascotas**: Administración completa de mascotas
- 🔍 **Búsqueda Avanzada**: Buscar clientes por nombre o teléfono
- 👨‍⚕️ **Múltiples Veterinarios**: Soporte para varios veterinarios por clínica
- 📊 **Dashboard**: Vista general con estadísticas

## 🚀 Inicio Rápido

### Instalación

```sh
npm install
```

### Desarrollo

```sh
npm run dev
```

El sistema estará disponible en `http://localhost:4321`

### Producción

```sh
npm run build
npm run preview
```

## 👤 Usuarios de Prueba

El sistema incluye usuarios de prueba:

**Administrador:**
- Usuario: `admin`
- Contraseña: `admin123`

**Veterinario:**
- Usuario: `vet1`
- Contraseña: `vet123`

## 📋 Estructura del Sistema

### Módulos Principales

1. **Autenticación** (`/login`, `/registro`)
   - Login con usuario y contraseña
   - Registro de nuevos usuarios
   - Gestión de sesiones

2. **Dashboard** (`/dashboard`)
   - Vista general del sistema
   - Estadísticas de clientes y mascotas
   - Acceso rápido a módulos

3. **Clientes** (`/clientes`)
   - Crear nuevos clientes
   - Editar información de clientes
   - Eliminar clientes
   - Buscar por nombre o teléfono
   - Ver lista completa de clientes

4. **Mascotas** (`/mascotas`)
   - Registrar nuevas mascotas
   - Editar información de mascotas
   - Eliminar mascotas
   - Filtrar por especie
   - Buscar por nombre o dueño
   - Relación con clientes

### Relaciones del Sistema

- **1 Veterinaria** → Muchos Veterinarios
- **1 Veterinaria** → Muchos Clientes
- **1 Veterinaria** → Muchas Mascotas
- **1 Cliente** → Muchas Mascotas

## 🗄️ Almacenamiento

El sistema utiliza **LocalStorage** del navegador para almacenar datos. Los datos persisten entre sesiones pero son específicos del navegador.

### Datos Iniciales

El sistema incluye datos de ejemplo:
- 1 Veterinaria
- 2 Usuarios (1 admin, 1 veterinario)
- 2 Clientes
- 2 Mascotas

## 🎨 Tecnologías

- **Astro** - Framework web
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Estilos
- **LocalStorage** - Almacenamiento de datos

## 📁 Estructura de Archivos

```text
src/
├── layouts/
│   ├── Layout.astro              # Layout base
│   └── DashboardLayout.astro     # Layout con navegación
├── pages/
│   ├── index.astro              # Página principal
│   ├── login.astro              # Inicio de sesión
│   ├── registro.astro           # Registro de usuarios
│   ├── dashboard.astro          # Dashboard principal
│   ├── clientes.astro           # Gestión de clientes
│   └── mascotas.astro           # Gestión de mascotas
└── lib/
    ├── types.ts                 # Tipos TypeScript
    ├── storage.ts               # Sistema de almacenamiento
    └── auth.ts                  # Sistema de autenticación
```

## 🔧 Funcionalidades por Módulo

### Clientes
- ✅ Crear cliente con nombre, teléfono, email y dirección
- ✅ Editar información del cliente
- ✅ Eliminar cliente
- ✅ Buscar por nombre o teléfono (búsqueda en tiempo real)
- ✅ Ver lista completa
- ✅ Fecha de registro automática

### Mascotas
- ✅ Registrar mascota con nombre, especie, raza, edad
- ✅ Asignar mascota a un cliente
- ✅ Editar información de la mascota
- ✅ Eliminar mascota
- ✅ Observaciones médicas (vacunas, alergias, etc.)
- ✅ Filtrar por especie
- ✅ Buscar por nombre de mascota o dueño
- ✅ Iconos visuales por especie

## 🔒 Seguridad

- Validación de sesión en todas las páginas protegidas
- Redirección automática si no hay sesión activa
- Datos aislados por veterinaria

## 📝 Notas

- El sistema es una aplicación frontend completa
- Los datos se almacenan localmente en el navegador
- Para un entorno de producción, se recomienda implementar un backend con base de datos real
- Las contraseñas se almacenan en texto plano (solo para desarrollo)

## 🎯 Próximas Mejoras Sugeridas

- [ ] Backend con API REST
- [ ] Base de datos (PostgreSQL/MySQL)
- [ ] Historial médico de mascotas
- [ ] Citas y calendario
- [ ] Facturación
- [ ] Reportes y estadísticas avanzadas
- [ ] Impresión de recetas
- [ ] Notificaciones
- [ ] Exportar/Importar datos

---

Desarrollado con ❤️ usando Astro
