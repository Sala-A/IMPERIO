const AboutUs = () => {
  return (
    <section className="about-us">
      <header className="about-us-header">
        <h1>¡Hola!</h1>
        <p>Todo sobre Imperio.com</p>
        <p>El propósito de la empresa es ofrecer una plataforma exclusiva para productos tecnológicos, conectando a marcas y clientes con soluciones innovadoras y de calidad, mientras se destaca en un entorno sin saturación publicitaria.</p>
      </header>

      <div className="about-us-content">
        <div className="about-item">
          <div className="about-icon">
            <img className="fas fa-gem" src="src/assets/joyas.png" width={50}/>
          </div>
          <h3>Misión</h3>
          <p>Conectar marcas tecnológicas con su audiencia, brindando soluciones innovadoras y espacios exclusivos.</p>
        </div>

        <div className="about-item">
          <div className="about-icon">
          <img className="fas fa-gem" src="src/assets/lanzadera.png" width={40}/>
          </div>
          <h3>Visión</h3>
          <p>Ser la plataforma líder en publicidad tecnológica, impulsando el crecimiento y la innovación global.</p>
        </div>

        <div className="about-item">
          <div className="about-icon">
          <img className="fas fa-gem" src="src/assets/objetivo.png" width={40}/>
          </div>
          <h3>Metas</h3>
          <p>
          Ofrecer un espacio exclusivo y efectivo para la promoción de productos tecnológicos de calidad.</p>
        </div>
      </div>

      <div className="our-team">
        <h2>Our team</h2>
        <div className="team-member">
          <img id="img-nosotros" src="https://acortar.link/xHObSt" />
          <h3>Loreum Ipsum</h3>
          <p>Loreum Ipsum is simply the filler text of printing presses and text files.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;