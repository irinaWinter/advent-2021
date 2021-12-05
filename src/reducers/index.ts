import { combineReducers } from 'redux';
import { TimerStateModel } from '../interfaces/TimerStateModel';
import { ModalStateModel } from '../interfaces/ModalStateModel';
import timerReducer from './timer';
import modalReducer from './modal';

export const rootReducer = combineReducers({ timer: timerReducer, modal: modalReducer });

export interface RootState {
    timer: TimerStateModel
    modal: ModalStateModel
}
