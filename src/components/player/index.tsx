import React from "react";
import { connect } from "react-redux";
import { Player as PlayerType, State } from "../../redux/types";
import Styles from "./index.module.css";

interface Props {
  id: number;
  gold?: number;
}

const Player: React.FC<Props> = ({ gold, id }) => {
  return (
    <div className={Styles.playerWidget}>
      <span>gold {gold} </span>
      <span>id: {id}</span>
    </div>
  );
};

const mapStateToProps = (state: State, props: { id: number }): PlayerType => {
  return state.players.find(player => player.id === props.id)!;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
