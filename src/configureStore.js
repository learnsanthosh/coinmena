import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import { connectRoutes } from 'redux-first-router'

import routesMap from './routesMap'
//import options from './options'
import * as reducers from '../src/reducers/'
import * as actionCreators from '../src/actions/actions'

export default history => {
  const { 
    reducer,
    middleware,
    enhancer
  } = connectRoutes(history, routesMap)

  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const middlewares = applyMiddleware(middleware)
  const enhancers = composeEnhancers(enhancer, middlewares)

  return createStore(rootReducer, enhancers)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
  : compose