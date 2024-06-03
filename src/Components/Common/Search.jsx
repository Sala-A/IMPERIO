const Search = () => {
    return (
      <div className="search-box">
      <button className="btn-search"><img src="./src/assets/lupa.png" alt="Search" width={'30px'}/></button>
      <input type="text" className="input-search" placeholder="Buscar..."/>
      </div>
    );
  };
  
  export default Search;