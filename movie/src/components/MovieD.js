function Movie({coverImg, title, summary, genres, year, rating, runtime}) {
  return <div >
  <img src={coverImg} alt={title}/>
  <h2>
    {title}
  </h2>
  <h1>{year}</h1>
  <h1>{rating}</h1>
  <h1>{runtime}</h1>
  <p>{summary}</p>
  <ul>
    {genres.map(g => <li key={g}>{g}</li>)} 
  </ul>
  </div>
}
export default Movie;
