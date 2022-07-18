import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastWithId } from 'shared/api/films';

const CastPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));

      try {
        const { data } = await fetchCastWithId(id);
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: data.cast,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };

    fetchCast();
  }, [id]);

  const { items, loading, error } = state;

  const elements = items.map(({ id, profile_path, name, character }) => {
    const imgSrc = `https://image.tmdb.org/t/p/w200${profile_path}`;
    const imgPlug = 'https://ca.slack-edge.com/T02KJ42DHFD-U03L88JEG07-146f590d3ef9-512'
    const src = profile_path ? imgSrc : imgPlug;

    return (
      <li key={id}>
        <img src={src} alt={name} width='200'/>
        <p>{name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>page not found</p>}
      {elements}
    </>
  );
};

CastPage.defaultProps = {
  items: [],
};

export default CastPage;
