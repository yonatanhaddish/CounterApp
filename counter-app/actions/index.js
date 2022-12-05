export const INCREMENT_OPERATION = 'INCREMENT';
export const DECREMENT_OPERATION = 'DECREMENT';
export const RESET_OPERATION = 'RESET';

export function increaseCounter() {
  return ({ type: INCREMENT_OPERATION});
}

export function decreaseCounter() {
  return ({ type: DECREMENT_OPERATION});
}

export function resetCounter() {
  return ({ type: RESET_OPERATION});
}