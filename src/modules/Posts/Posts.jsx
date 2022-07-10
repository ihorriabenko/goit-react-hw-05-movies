import { useState, useEffect } from 'react';
import { getPosts } from 'shared/api/posts';
import PostList from 'shared/components/PostList';

const Posts = () => {
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

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>Posts not found</p>}
      <PostList items={items}/>
    </>
  );
};

export default Posts;
