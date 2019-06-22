export type Player = {
  id: number;
  gold: number;
};

export type State = {
  players: Array<Player>;
  playing: boolean;
};

// export type Actions = "START";
