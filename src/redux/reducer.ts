import { createReducer } from "../utils";
import { State } from "./types";
import { Actions } from "./actions";

const start = (state: State): State => {
  return {
    ...state,
    playing: true
  };
};

const stop = (state: State): State => {
  return {
    ...state,
    playing: false
  };
};

const calculate = (state: State): State => {
  return {
    ...state,
    players: state.players.map(player => ({
      ...player,
      gold: player.gold + 1
    }))
  };
};

export const reducer = createReducer<State, Actions>(
  {
    players: [
      {
        id: 1,
        gold: 0
      },
      {
        id: 2,
        gold: 0
      }
    ],
    playing: false
  },
  {
    [Actions.START]: start,
    [Actions.STOP]: stop,
    [Actions.CALCULATE]: calculate
  }
);
