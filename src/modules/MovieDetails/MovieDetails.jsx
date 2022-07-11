import PropTypes from 'prop-types';

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

SinglePost.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
}

export default SinglePost;
