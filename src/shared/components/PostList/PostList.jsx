import { Link, useLocation } from "react-router-dom";

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

export default PostList;
