import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

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
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string}))
}

export default PostList;
