import { useState, useEffect } from 'react';
import { getFilms } from 'shared/api/films';
import PostList from 'shared/components/FilmList';

const Posts = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchFilms = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }))

      try {
        const data = await getFilms();
        setState(prevState => ({
          ...prevState,
          items: [...data.results],
          loading: false
        }))
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }))
      }
    }

    fetchFilms();
  }, []);

  const { items, loading, error } = state;

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>Films not found</p>}
      <PostList items={items}/>
    </>
  );
};

export default Posts;
