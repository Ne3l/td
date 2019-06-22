import React from "react";
import { connect } from "react-redux";
import { start, stop } from "../../redux";
import Player from "../player";
import { State } from "../../redux/types";

type Props = {
  start: Function;
  stop: Function;
  players: State["players"];
  playing: boolean;
};

const Game: React.FC<Props> = ({ start, players, playing, stop }) => {
  return (
    <>
      <button onClick={e => (playing ? stop() : start())}>
        {playing ? "Stop" : "Play"}
      </button>
      {players.map(player => (
        <Player id={player.id} />
      ))}
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    players: state.players,
    playing: state.playing
  };
};

const mapDispatchToProps = {
  start,
  stop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
