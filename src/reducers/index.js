import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import categories from './categoryReducer'
import comments from './commentReducer'
import navigation from './navigationReducer'
import posts from './postReducer'
import sortKey from './sortKeyReducer'

export default combineReducers({
  categories,
  comments,
  navigation,
  posts,
  sortKey,
  form: formReducer
})
