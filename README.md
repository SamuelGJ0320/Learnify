# Plataforma de Venta de Cursos

## Descripción
Este proyecto es una plataforma de venta de cursos en línea similar a Udemy, donde los instructores pueden crear, administrar y vender sus cursos, mientras que los estudiantes pueden explorar, comprar y acceder a los cursos adquiridos.

## Funcionalidades Principales
### Usuarios
- Registro e inicio de sesión con gestión de roles (estudiante/instructor).
- Edición de perfil con foto, nombre y descripción.

### Gestión de Cursos
- Creación y administración de cursos por parte de los instructores.
- Carga de contenido multimedia (videos, PDFs y otros recursos).
- Organización de módulos y lecciones.

### Compra y Acceso a Cursos
- Exploración de cursos con filtros y búsqueda avanzada.
- Sistema de carrito de compras.
- Procesamiento de pagos con tarjeta de crédito y PayPal.
- Acceso a los cursos comprados con seguimiento de progreso.

### Interacción y Evaluación
- Valoraciones y reseñas de cursos.
- Preguntas y respuestas entre estudiantes e instructores.
- Seguimiento del avance en el curso.

### Administración
- Dashboard para instructores con estadísticas de ventas y estudiantes.
- Dashboard para administradores con gestión de usuarios, cursos y ventas.

## Tecnologías a Utilizar
- **Backend**: Django con base de datos PostgreSQL.
- **Frontend**: React para la interfaz de usuario.
- **Autenticación**: OAuth2, JWT o similar.
- **Pagos**: Integración con Stripe o PayPal.

## Estructura del Proyecto
Este proyecto está organizado como un monorepositorio con las siguientes carpetas:
- `backend/` - Contiene la API desarrollada en Django.
- `frontend/` - Contiene la aplicación frontend en React.

## Instalación y Configuración
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tuusuario/plataforma-cursos.git
   cd plataforma-cursos
   ```
2. Configurar variables de entorno (.env) para la base de datos y servicios de pago.

### Backend
3. Instalar dependencias y ejecutar el servidor backend.
   ```sh
   cd Backend
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend
4. Instalar dependencias y ejecutar el frontend.
   ```sh
   cd Frontend
   npm install
   npm run dev
   ```