import { useState } from "react"
import PropTypes from 'prop-types';

const PostsSearchForm = ({onSubmit}) => {
  const [state, setState] = useState({
    search: '',
  })

  const handleChange = ({target}) => {
    const {name, value} = target;

    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({...state});
    setState({search: ''})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='search' value={state.search}type='text' onChange={handleChange} placeholder="Search posts"></input>
      <button>Search</button>
    </form>
  )
}

PostsSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default PostsSearchForm;
