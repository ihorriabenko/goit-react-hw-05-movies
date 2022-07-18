import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';
import SinglePost from 'modules/MovieDetails';
import { fetchPostsWithId } from 'shared/api/films';

const SinglePostPage = () => {
  const [state, setState] = useState({
    post: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
      }));

      try {
        const { data } = await fetchPostsWithId(id);
        setState(prevState => ({
          ...prevState,
          post: { ...data },
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          loading: false,
          error,
        }));
      }
    };

    fetchPost();
  }, []);

  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  const { post, loading, error } = state;
  const isPost = Object.keys(post).length > 0;

  return (
    <main>
      <div className="container">
        {loading && <p>...Loading</p>}
        {error && <p>Post not found</p>}
        {isPost && location.state && <button onClick={goBack}>Go back</button>}
        {isPost && <SinglePost {...post} />}
        {isPost && (
          <Link state={{ from }} to={'cast'}>
            Cast
          </Link>
        )}
        {isPost && (
          <Link state={{ from }} to={'reviews'}>
            Reviews
          </Link>
        )}
        <Outlet />
      </div>
    </main>
  );
};

export default SinglePostPage;
