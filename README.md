# 🔐 Cifrador y Descifrador César

Herramienta web interactiva para cifrar y descifrar textos mediante el cifrado César, con soporte completo para el alfabeto español.

<img width="1280" height="896" alt="image" src="https://github.com/user-attachments/assets/3a79aa48-0f42-4b6d-887d-07cf4cee5b1f" />


## ✨ Características

- **Alfabeto español completo** – Incluye Ñ y vocales acentuadas (á, é, í, ó, ú)
- **Desplazamiento flexible** – Rango de 1 a 31 posiciones
- **Doble panel** – Cifrado y descifrado en tiempo real
- **Mantener puntuación** – Opción para conservar espacios, signos y números
- **Sliders interactivos** – Controles visuales con feedback dinámico
- **Copiado rápido** – Botones para copiar resultados al portapapeles
- **Diseño responsive** – Adaptado para móviles y escritorio
- **Tema oscuro moderno** – Interfaz visual atractiva

## 🚀 Demo en vivo

Puedes probar la herramienta en: [Enlace a tu demo]

## 🛠️ Tecnologías utilizadas

- **HTML5** – Estructura semántica
- **CSS3** – Diseño responsive, variables CSS, sliders personalizados
- **JavaScript** – Lógica de cifrado/descifrado en tiempo real

## 📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/cifrador-cesar.git
2. Navega al directorio del proyecto:
cd cifrador-cesar
3. Abre el archivo index.html en tu navegador favorito.

## 📖 Cómo usar

1. Cifrar texto:

	* Escribe tu texto en el panel izquierdo

	* Ajusta el desplazamiento con el slider

	* El texto cifrado aparece automáticamente

2. Descifrar texto:

	* Pega el texto cifrado en el panel derecho

	* Usa el mismo desplazamiento que se usó para cifrar

	* El texto original se mostrará automáticamente

3. Opciones:

	* Marca "Mantener espacios y signos de puntuación" para conservar caracteres no alfabéticos

	* Usa los botones "Copiar" para guardar los resultados

## 🔢 Algoritmo
El cifrado César desplaza cada letra un número fijo de posiciones en el alfabeto. Este proyecto utiliza un alfabeto de 32 caracteres:

abcdefghijklmnñopqrstuvwxyzáéíóú
ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ

	+ Las letras minúsculas se mantienen en minúsculas

	+ Las letras mayúsculas se mantienen en mayúsculas

	+ Los caracteres no alfabéticos se conservan o eliminan según la opción seleccionada
	
## 📁 Estructura del proyecto

+ cifrador-cesar/
+ ├── index.html          # Estructura principal
+ ├── styles.css          # Estilos y diseño responsive
+ ├── script.js           # Lógica de cifrado e interactividad
+ └── README.md           # Documentación del proyecto

## 🎨 Personalización
Puedes modificar los colores y estilos en el archivo styles.css editando las variables CSS en :root:

:root {
  --bg: #5b4b8a;           /* Color de fondo principal */
  --accent: #26a69a;       /* Color de acento */
  --card: #3a2d5f;         /* Color de las tarjetas */
  /* ... más variables */
}

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Si tienes sugerencias o mejoras:

- Haz un fork del proyecto

- Crea una rama para tu función (git checkout -b feature/nueva-funcionalidad)

- Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad')

## 📊 Diagrama de Flujo

<img width="5167" height="8826" alt="Diagrama de flujo - Upgrade" src="https://github.com/user-attachments/assets/0eb62992-cab2-468d-a28c-a8b9a545053d" />

