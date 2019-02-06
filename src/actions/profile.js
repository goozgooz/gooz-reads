import * as ProfileAction from '../action-types/profile';

export const FETCH_PROFILE = () => (store) => {
  console.log('inside profile action...');
  return store.dispatch(fetchProfile({name: 'ashkaan'}));
};

const fetchProfile = (profile) => ({
  type: ProfileAction.FETCH_PROFILE,
  payload: profile,
});