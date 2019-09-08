import { createReducer, on } from "@ngrx/store";
import * as actions from "./actions";

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(actions.increment, state => state + 1),
  on(actions.decrement, state => state - 1),
  on(actions.reset, state => 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
