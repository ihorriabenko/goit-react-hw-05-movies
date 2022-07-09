const SinglePost = ({poster_path, title, vote_average, overview, genre_ids}) => {
  return (<div>
    <img href={poster_path}></img>
    <h2>{title}</h2>
    <p>{vote_average}</p>
    <h3>Overview</h3>
    <p>{overview}</p>
    <h3>Genres</h3>
    <p>{genre_ids}</p>
  </div>
  )
}

// https://image.tmdb.org/t/p/w500${poster_path}

export default SinglePost;
