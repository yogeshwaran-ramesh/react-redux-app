import { INCREMENT, DECREMENT } from "../actions/counter";

const INITIAL_STATE = {
  count: 0,
};

export default function counter(state = INITIAL_STATE, action) {
  const { count } = state;
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: count - 1,
      };
    default:
      return state;
  }
}
