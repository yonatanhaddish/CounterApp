// import {INCREMENT_OPERATION, DECREMENT_OPERATION, RESET_OPERATION} from '../../actions/index'
import { INCREMENT_OPERATION, DECREMENT_OPERATION } from "../../actions/index";

const INITIAL_STATE_VALUE = {
  count: 0
}

function handleCounterChange(state, change) {
  const {count} = state;
  return ({
    count: count + change
  })
}

export default function counter(state = INITIAL_STATE_VALUE, action) {
  const {count} = state;
  switch(action.type) {
    case INCREMENT_OPERATION:
      return handleCounterChange(state, 1);
    case DECREMENT_OPERATION:
      return handleCounterChange(state, -1);
    case RESET_OPERATION:
      return (INITIAL_STATE_VALUE)
    default:
      return state;
  }
}