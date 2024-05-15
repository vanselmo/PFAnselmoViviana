# Proyecto E-Commerce de comidas saludables

## Descripción

Este proyecto es un E-Commerce que permite a los usuarios comprar una variedad de comidas saludables. Proporciona una plataforma donde los usuarios pueden navegar por diferentes categorías de alimentos, ver detalles de los productos, agregar productos al carrito de compras y realizar pedidos generando órdenes de compra.

## Características

- Catálogo de productos con imágenes, descripciones y precios.
- Navegación por categorías de alimentos.
- Detalle de productos con información detallada y opción para agregar al carrito.
- Carrito de compras que muestra los productos agregados, permite modificar cantidades y eliminar productos.
- Proceso de pago seguro con formulario de checkout.
- Generación de órdenes con detalles de productos y precios.
- Interfaz de administración para gestionar productos y pedidos.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y copia el contenido del archivo `.env.template`. Luego, completa los valores de las variables de entorno con la configuración de tu base de datos Firebase.

## Uso

1. Inicia el servidor local ejecutando `npm run dev`.
2. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación.

## Estructura de Datos

Para que la aplicación funcione correctamente, es fundamental contar con la información de los productos almacenada en Firebase. A continuación, se describe la estructura de las colecciones necesarias para ello.

### Colección "items"

Cada documento en la colección "items" representa un producto disponible para la venta en el E-Commerce. La estructura del documento incluye los siguientes campos:

- **id**: Identificador único del producto (número entero).
- **name**: Nombre del producto.
- **description**: Descripción detallada del producto.
- **category**: Categoría del producto (p. ej., "vegan", "glutenfree").
- **photo**: URL de la imagen del producto.
- **thumbnail**: URL de la imagen en miniatura del producto.
- **price**: Precio del producto (número decimal).

### Colección "orders"

Cada documento en la colección "orders" representa un pedido realizado por un usuario. La estructura del documento incluye los siguientes campos:

- **orderId**: Identificador único del pedido (cadena de texto).
- **items**: Array de objetos que contiene los detalles de los productos incluidos en el pedido.
- **totalPrice**: Precio total del pedido (número decimal).
- **date**: Fecha y hora de la compra (marca de tiempo).
- **userData**: Información del usuario que realizó la compra, incluyendo su nombre, apellido, correo electrónico y número de teléfono.

## GIFS

A continuación encontrarás GIFs que muestran la usabilidad y funcionalidades clave de este sitio, diseñado para proporcionar una experiencia fluida y agradable a nuestros usuarios.

### Categorías de productos

![Categorías de productos](GIF-Category.gif)

En este GIF, demostramos la navegación por las diferentes categorías de productos disponibles en nuestro sitio. Los usuarios pueden explorar fácilmente las opciones disponibles y encontrar rápidamente lo que están buscando.

### Detalle de los ítems y proceso de compra

![Detalle de los ítems y proceso de compra](GIF-Detail&OrderGeneration.gif)

En este GIF, mostramos el proceso de visualización de los detalles de una comida, así como el flujo de compra. Los usuarios pueden ver información detallada sobre cada producto y realizar pedidos de manera rápida y sencilla.
