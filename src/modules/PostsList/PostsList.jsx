import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from 'shared/api/posts';

const PostsList = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }))

      try {
        const data = await getPosts();
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

    fetchPosts();
  }, []);

  const { items, loading, error } = state;

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>Posts not found</p>}
      <ul>{elements}</ul>
    </>
  );
};

export default PostsList;
