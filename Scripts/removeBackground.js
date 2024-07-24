import { removeBackgroundFromImageUrl } from 'remove.bg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//node scripts/removeBackground.js  = codigo para subir las imagenes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de imágenes a procesar para quitar fondo
const images = [
  {
    id: 1,
    url: 'https://acortar.link/wwvwo2',
    filename: 'image1'
  },
  {
    id: 2,
    url: 'https://th.bing.com/th/id/OIP.c0ZUfEdkEQmeCrpQe3sxPwAAAA?rs=1&pid=ImgDetMain',
    filename: 'image2'
  },
  {
    id: 3,
    url: 'https://playstation20aniversario.com/wp-content/uploads/2020/09/ordenador-gaming-de-sobremesa.jpg',
    filename: 'image3'
  },
  {
    id: 4,
    url: 'https://th.bing.com/th/id/OIP.9k6nOjCMIYtDVG8_VkSuqQAAAA?rs=1&pid=ImgDetMain',
    filename: 'image4'
  },
  {
    id: 5,
    url: 'https://m.media-amazon.com/images/I/51gzsmMgUKL._AC_SS450_.jpg',
    filename: 'image5'
  },
  {
    id: 6,
    url: 'https://resources.claroshop.com/medios-plazavip/s2/10487/1309058/5e319fe911643-2624cfbc-b5c2-42c9-a146-01f74a9d7dd2-1600x1600.jpg',
    filename: 'image6'
  },
  {
    id: 7,
    url: 'https://th.bing.com/th/id/OIP.1PQ_bOIwufs8Gnmf5M2ABgHaHa?w=600&h=600&rs=1&pid=ImgDetMain',
    filename: 'image7'
  },
  {
    id: 8,
    url: 'https://m.media-amazon.com/images/I/61z4q24qZeL._AC_SL1280_.jpg',
    filename: 'image8'
  },

  {
    id: 9,
    url: 'https://m.media-amazon.com/images/I/61DExvGIZ9L.jpg',
    filename: 'image9'
  },
  {
    id: 10,
    url: 'https://cdn.mos.cms.futurecdn.net/UaZuKi5KxvntBqwTPzUerG-320-80.jpg',
    filename: 'image10'
  },
  {
    id: 11,
    url: 'https://acortar.link/wFJsic',
    filename: 'image11'
  },
  {
    id: 12,
    url: 'https://acortar.link/h6NKsY',
    filename: 'image12'
  },
];

// Función principal para procesar las imágenes
const processImages = async () => {
  for (const image of images) {
    try {
      console.log(`Processing image ${image.filename}...`);

      // Llamada a la API de remove.bg
      const result = await removeBackgroundFromImageUrl({
        url: image.url,
        apiKey: 'psSSoXm2C74cCUXhXYvDs7ma',
        size: 'regular',
        type: 'auto',
      });

      // Ruta para guardar la imagen procesada
      const outputPath = path.join(__dirname, 'processed_images', `${image.filename}_transparent.png`);
      
      // Crear directorio si no existe
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      }
      
      // Guardar la imagen en disco
      fs.writeFileSync(outputPath, result.base64img, 'base64');
      console.log(`Background removed and saved to ${outputPath}`);

    } catch (error) {
      console.error(`Failed to process image ${image.url}:`, error);
    }
  }
};

// Ejecutar la función de procesamiento
processImages();
