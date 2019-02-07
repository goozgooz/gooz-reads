import * as ProfileActions from '../action-types/profile';

const initialState = {
  profile: {},
}

export default function Profile(state = initialState, action) {
  switch(action.type) {
    case ProfileActions.FETCH_PROFILE:
      console.log('reducer: ', action)
      return {...state, ...action.payload}
      
    default: 
      return state;
  }
  
}