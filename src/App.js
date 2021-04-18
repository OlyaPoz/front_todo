import { useDispatch } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import * as ActionCreators from './actions';

function App (props) {
  const dispatch = useDispatch();

  const createTodoAction = todo =>
    dispatch(ActionCreators.createTodoRequest({ todo }));

  return (
    <div>
      <TodoForm submitHandler={createTodoAction} />
      <TodoList />
    </div>
  );
}

export default App;
