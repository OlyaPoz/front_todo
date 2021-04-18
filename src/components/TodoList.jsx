import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from '../actions';
import Todo from './Todo';

const TodoList = props => {
  const { todos, isFetching, error } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionCreators.getTodosRequest());
  }, [dispatch]);

  return (
    <div>
      <span style={{ color: 'red' }}>
        {error && (
          <>
            {error.message}
            <button onClick={() => dispatch(ActionCreators.clearTodoError())}>
              X
            </button>
          </>
        )}
      </span>
      {todos.map(t => (
        <Todo {...t} key={t.id} />
      ))}
    </div>
  );
};

export default TodoList;


