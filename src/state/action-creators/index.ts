import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action, SetTimeAction, SetSubtitleArrayAction } from "../actions";

export const setAudioBlob = (path: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_AUDIO_BLOB,
      payload: path,
    });
  };
};

export const setSubtitleText = (path: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_SUBTITLE_TEXT,
      payload: path,
    });
  };
};

type SrtParser = {
  id: string;
  startTime: Number;
  endTime: Number;
  text: string;
}[];

export const setSubtitleArray = (arr: SrtParser) => {
  return (dispatch: Dispatch<SetSubtitleArrayAction>) => {
    dispatch({
      type: ActionType.SET_SUBTITLE_ARRAY,
      payload: arr,
    });
  };
};

export const setCurrentTime = (time: number) => {
  return (dispatch: Dispatch<SetTimeAction>) => {
    dispatch({
      type: ActionType.SET_CURRENT_TIME,
      payload: time,
    });
  };
};

export const setNewTime = (time: number) => {
  return (dispatch: Dispatch<SetTimeAction>) => {
    dispatch({
      type: ActionType.SET_NEW_TIME,
      payload: time,
    });
  };
};
