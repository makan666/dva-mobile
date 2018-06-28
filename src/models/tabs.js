
export default {

  namespace: 'tabs',

  state: {
    selected: 'home',
    hidden: false,
    fullScreen: true,
    },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  reducers: {
    selected(state, action) {
      return Object.assign({}, state, {selected: action.payload});
    },
  },

};
