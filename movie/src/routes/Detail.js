import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import Movie from '../components/MovieD';
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams();// 이렇게하면 해당 id값 받을 수 있다.
  const getMovie = async() => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie)
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>
    {loading ? (<h1>Loading...</h1>) : 
    <div>
      <Movie 
      year={movie.year}
      rating={movie.rating}
      runtime={movie.runtime}
      coverImg={movie.medium_cover_image} 
      title={movie.title} 
      summary={movie.summary} 
      genres={movie.genres}/>
        </div>}
  </div>
}
//useParams함수를 사용하면 react Router는 바로 :id값을 넘겨준다. x에 넘겨줌
//이제 제목 클릭하면 해당페이지마다 id값을 받을 수 있게된다. 
export default Detail;
//숙제
//로딩 구현, detail에 구현 , 그리고 json을 state에 넣어줘라? 그리고
// 그 영화의 상세 정보들을 보여주어라