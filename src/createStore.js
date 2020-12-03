export function createStore(rootRducer, initialState) {
  let state = rootRducer(initialState, { type: "__INIT__" });
  const subscribers = [];

  return {
    //action === {type: 'INCREMENT'}
    dispatch(action) {
      state = rootRducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
