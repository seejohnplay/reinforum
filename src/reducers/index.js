import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import categories from './categoryReducer'
import posts from './postReducer'
import sortKey from './sortKeyReducer'

export default combineReducers({
  categories,
  posts,
  sortKey,
  form: formReducer
})
