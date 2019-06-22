import { Dispatch } from "redux";
import store from "../store";

let raf: number;

export enum Actions {
  "START" = "START",
  "STOP" = "STOP",
  "CALCULATE" = "CALCULATE"
}

const tick = () => {
  store.dispatch({ type: Actions.CALCULATE });
  raf = requestAnimationFrame(tick);
};

export const start = () => (dispatch: Dispatch) => {
  dispatch({ type: "START" });

  raf = requestAnimationFrame(tick);
};

export const stop = () => (dispatch: Dispatch) => {
  dispatch({ type: "STOP" });

  cancelAnimationFrame(raf);
};
