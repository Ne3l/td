import { Action } from "redux";

type Handlers<State, Types extends string> = {
  readonly [Type in Types]?: (state: State, action: Action<Types>) => State
};
export const createReducer = <State, Types extends string>(
  initialState: State,
  handlers: Handlers<State, Types>
) => (state = initialState, action: Action<Types>) => {
  if (handlers[action.type]) {
    return handlers[action.type]!(state, action);
  }
  return state;
};
