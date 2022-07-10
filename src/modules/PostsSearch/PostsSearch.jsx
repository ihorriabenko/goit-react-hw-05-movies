import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PostList from 'shared/components/PostList';
import PostsSearchForm from './PostsSearchForm';
import { fetchPostsWithQuery } from 'shared/api/posts';

const PostsSearch = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    const fetchPosts = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));

      try {
        const {data} = await fetchPostsWithQuery(search);
        setState(prevState => ({
          ...prevState,
          items: data.results,
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };

    if (search) {
      fetchPosts();
    }
    console.log(search)
  }, [search, setState]);

  const changeSearch = ({ search }) => setSearchParams({query: search});

  const { items, loading, error } = state;

  return (
    <>
      <PostsSearchForm onSubmit={changeSearch} />
      {loading && <p>...Loading</p>}
      {error && <p>Posts not found</p>}
      {items && <PostList items={items} />}
    </>
  );
};

export default PostsSearch;
