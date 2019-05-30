import { createStore } from 'redux'
import throttle from 'lodash/throttle'

import rootReducer from './reducers'
import { saveState, loadState } from './utils'

const store = createStore(
  rootReducer,
  loadState(),
)

export default store;

store.subscribe(throttle(() => saveState(store.getState()), 1000))
