import { Link } from "react-router-dom";

const PostList = ({items}) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return <ul>{elements}</ul>
}

PostList.defaultProps = {
  items: [],
}

export default PostList;
