import * as ProfileAction from '../action-types/profile';

export const fetchProfile = () => (store) => {
  console.log('inside profile action...');
  return store.dispatch(fetch({name: 'ashkaan'}));
};

const fetch = (profile) => ({
  type: ProfileAction.FETCH_PROFILE,
  payload: profile,
});