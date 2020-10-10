export default function reducer(state, action) {
  switch (action.type) {
    case "remove":
      return state - 1;
    case "add":
      return state + 1;
    default:
      throw new Error();
  }
}
