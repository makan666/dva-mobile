import { getData } from '../services/api';

export default {

  namespace: 'home',

  state: {initialPage: 0},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({type: 'fetch'});
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getData, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    }
  },
  reducers: {
    save(state, action) {
      return Object.assign({}, state, action.payload);
    },
    initialPage(state, action) {
      return Object.assign({}, state, {initialPage: action.payload});
    }
  },

};
