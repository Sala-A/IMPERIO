import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from './Cards';
import Data from './Data';

// Configuración del carrusel para diferentes tamaños de pantalla
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductCarousel = () => {
  // Limitar a 6 productos
  const limitedData = Data.slice(0, 6);
  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Productos Destacados</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        swipeable={true}
        containerClass="carousel-container-class"
        itemClass="carousel-item-class"
      >
        {limitedData.map((product) => (
          <div className="carousel-item" key={product.id}>
            <Cards
              title={product.title}
              price={product.price}
              img={product.img}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
