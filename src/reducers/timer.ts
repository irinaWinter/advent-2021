import Timer from '../constants/timer';
import { ActionModel } from '../interfaces/actionModel';
import { TimerStateModel } from '../interfaces/TimerStateModel';

const initialState: TimerStateModel = {
  started: false,
  isConfigured: false,
  isFinished: false,
};

const timerReducer = (state = initialState, action: ActionModel) => {
  switch (action.type) {
    case Timer.STARTED:
      return {
        started: true,
        isConfigured: false,
        isFinished: false,
      };
    case Timer.PAUSED:
      return {
        started: false,
        isConfigured: false,
        isFinished: false,
      };
    case Timer.CHANGED:
      return {
        started: false,
        isConfigured: true,
        isFinished: false,
      };
    case Timer.SETED:
      return {
        started: false,
        isConfigured: false,
        isFinished: false,
      };
    case Timer.FINISHED:
      return {
        started: false,
        isConfigured: false,
        isFinished: true,
      };
    default:
      return state;
  }
};

export default timerReducer;
