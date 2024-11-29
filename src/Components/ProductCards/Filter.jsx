import { useState } from 'react';
import Cards from '../ProductCards/Cards';
import { Data } from '../ProductCards/Data';

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredProducts = Data.filter((product) => {
    return selectedCategory ? product.category === selectedCategory : true;
  });
  const handleCategoryToggle = (category) => {
    setSelectedCategory(selectedCategory === category ? "" : category);
  };
  const resetFilters = () => {
    setSelectedCategory("");
  };

  return (
    <div className="product-list-page">
      <h1>Filtros</h1>

      {/* Barra de Filtros */}
      <div className="filters">
        {/* Filtro por Categoría */}
        <div className="filter-category">
          <h3>Categorías</h3>
          <div className="category-buttons">
            <button onClick={() => handleCategoryToggle("Computadores")}>
              Computadores {selectedCategory === "Computadores" && "+"}
            </button>
            <button onClick={() => handleCategoryToggle("Asesorios")}>
              Asesorios {selectedCategory === "Asesorios" && "+"}
            </button>
            <button onClick={() => handleCategoryToggle("Celulares")}>
              Celulares {selectedCategory === "Celulares" && "+"}
            </button>
            <button onClick={() => handleCategoryToggle("Relojes")}>
              Relojes {selectedCategory === "Relojes" && "+"}
            </button>
            <button onClick={() => handleCategoryToggle("Tablets")}>
              Tablets {selectedCategory === "Tablets" && "+"}
            </button>
          </div>
        </div>
        <div className="reset-button">
          <button onClick={resetFilters} className="reset-btn">Mostrar Todos</button>
        </div>
      </div>
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Cards
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
            />
          ))
        ) : (
          <p>No se encontraron productos que coincidan con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
