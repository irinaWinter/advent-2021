import Timer from '../constants/timer';

export const timerStarted = () => {
    return {
        type: Timer.STARTED,
    };
};

export const timerPaused = () => {
    return {
        type: Timer.PAUSED,
    };
};

export const timerChanged = () => {
    return {
        type: Timer.CHANGED,
    };
};

export const timerSeted = () => {
    return {
        type: Timer.SETED,
    };
};

export const timerFinished = () => {
    return {
        type: Timer.FINISHED,
    };
};