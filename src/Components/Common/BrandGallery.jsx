const BrandGallery = () => {
  const brands = [
    { id: 1, name: "Apple", imageUrl: "https://acortar.link/9mYdp3" },
    { id: 2, name: "Samsung", imageUrl: "https://acortar.link/GYSaiN" },
    { id: 3, name: "Huawei", imageUrl: "https://acortar.link/1NrOrc" },
    { id: 4, name: "Dell", imageUrl: "https://acortar.link/oQ07pl" },
    { id: 5, name: "Play station", imageUrl: "https://acortar.link/X8C5Sc" },
    { id: 6, name: "Asus", imageUrl: "https://acortar.link/FFxU9r" },
  ];

  return (
    <div className="containerGallery">
      <hr />
      <h1 className="title-brandGallery">Marcas aliadas</h1>
      <div className="brand-gallery">
        {brands.map((brand) => (
          <a key={brand.id} href="#" className="brand-item">
            <img
              id="img-brand-gallery"
              src={brand.imageUrl}
              alt={brand.name}
              title={brand.name}
            />
          </a>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default BrandGallery;
