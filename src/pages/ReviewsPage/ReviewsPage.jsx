import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsWithId } from 'shared/api/posts';

const ReviewsPage = () => {
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
        const { data } = await fetchReviewsWithId(id);
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: data.results,
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

  const elements = items.map(({ id, author, content}) => {

    return (
      <li key={id}>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    );
  });

  const elmnts = items.length === 0 ? <p>reviews not found</p> : elements;

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>page not found</p>}
      {elmnts}
    </>
  );
};

ReviewsPage.defaultProps = {
  items: [],
};

export default ReviewsPage;
