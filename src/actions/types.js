const ACTION_TYPES = {
  CREATE_TODO_REQUEST: 'todo/createRequest',
  CREATE_TODO_SUCCESS: 'todo/createSuccess',
  CREATE_TODO_ERROR: 'todo/createError',

  GET_TODO_REQUEST: 'todo/getRequest',
  GET_TODO_SUCCESS: 'todo/getSuccess',
  GET_TODO_ERROR: 'todo/getError',

  UPDATE_TODO_REQUEST: 'todo/updateRequest',
  UPDATE_TODO_SUCCESS: 'todo/updateSuccess',
  UPDATE_TODO_ERROR: 'todo/updateError',

  DELETE_TODO_REQUEST: 'todo/deleteRequest',
  DELETE_TODO_SUCCESS: 'todo/deleteSuccess',
  DELETE_TODO_ERROR: 'todo/deleteError',

  CLEAR_TODO_ERROR: 'todo/clearError',
};

export default ACTION_TYPES;