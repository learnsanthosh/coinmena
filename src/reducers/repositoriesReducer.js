
import initialState from './initialState';
import _ from 'lodash';

const SET_REPO = 'SET_REPO';

export default function repositories (state = initialState, action) {
  switch (action.type) {
    case SET_REPO:
      return  Object.assign({}, state, {repositories: action.data});
    default:
      return state;
  }
}