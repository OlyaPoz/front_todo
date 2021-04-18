import { useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';

const Todo = props => {
  const { body, deadline, isDone, id } = props;
  const dispatch = useDispatch();
  const isDoneHandler = ({ target: { checked } }) => {
    
  };
  const deleteHandler = () =>
    dispatch(ActionCreators.deleteTodoRequest({ id }));

  return (
    <article>
      <hr />
      {id}
      <p>{body}</p>
      <input type='checkbox' checked={isDone} onChange={isDoneHandler} />
      <div>{deadline}</div>
      <button disabled={!isDone} onClick={deleteHandler}>DELETE TASK</button>
      <hr />
    </article>
  );
};

export default Todo;