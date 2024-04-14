import { useState, useEffect } from 'react';
import Movie from '../components/MovieC';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false); 
  }
  useEffect(() => {
    getMovies();
  }, [])
  // useEffect(() => {
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //   )
  //   .then(response => response.json())
  //   .then(json => {
  //     setMovies(json.data.movies) // api 무비들 가져옴
  //     setLoading(false); // api불러오면 loading창 끄는 구문
  //   });
  // }, [])
  console.log(movies);
  return <div>
    {loading ? (<h1>Loading...</h1>) : 
    <div>
      {movies.map(movie => 
      <Movie 
      key={movie.id}
      id={movie.id}
      coverImg={movie.medium_cover_image} 
      title={movie.title} 
      summary={movie.summary} 
      genres={movie.genres}/>)}
        </div>}
    </div>; // Movie({id:movie})이렇게 넘겨주는 것과 같다.
}// Link 컴포넌트에 id값을 넘겨줘서 url에서 id값이 함께 뜨는 것을 할 수 있다. 매우 유용하다.
//이제 이 url에 요청을 보낼 수 있더ㅏ.
export default Home;