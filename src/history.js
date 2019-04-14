import { createBrowserHistory } from 'history'
import { browserHistory } from 'react-router-dom'

export default function createHistory(store) {
  return createBrowserHistory(browserHistory, store)
}
