import { Link, useLocation } from "react-router-dom";
import PropTypes, { array, arrayOf } from 'prop-types';

const PostList = ({items}) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
    </li>
  ));

  return <ul>{elements}</ul>
}

PostList.defaultProps = {
  items: [],
}

PostList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default PostList;
