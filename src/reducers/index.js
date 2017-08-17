import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import categories from './categoryReducer'
import posts from './postReducer'

export default combineReducers({
  categories,
  posts,
  form: formReducer
})
