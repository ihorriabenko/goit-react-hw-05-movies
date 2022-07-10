const SinglePost = ({poster_path, title, vote_average, overview, genres}) => {
  const imgSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const gnrs = genres.map(({name}) => name).join(', ');

  return (<div>
  <img src={imgSrc} alt={title}/>
     <h2>{title}</h2>
     <p>User Score: {vote_average}</p>
     <h3>Overview</h3>
     <p>{overview}</p>
     <h3>Genres</h3>
     <p>{gnrs}</p>
  </div>
  )
}

export default SinglePost;
