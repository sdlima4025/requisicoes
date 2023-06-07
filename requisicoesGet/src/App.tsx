import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // load filmes com useEfect Function
  useEffect(() => {
    loadMovies();
  });
  /*
  const loadMovies = () => {
    fetch("https://api.b7web.com.br/cinema/")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      });
  };
  */


  const loadMovies = async () => {
    const response = await fetch("https://api.b7web.com.br/cinema/");
    const json = await response.json();
    setMovies(json);

    
  };
  
  return (
    // load filmes com onClick function loadMovies.
    <div>
      {/* <button className="block bg-blue-400 p-2" onClick={loadMovies}>
        Carregar Filmes
      </button> */}
      Total de Filmes: {movies.length}
      <div className="grid grid-cols-4 gap-3">
        {movies.map((item, index) => (
          <div key={index}>
            <img src={item.avatar} className="w-32 block" />
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
