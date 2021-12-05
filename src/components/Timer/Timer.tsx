import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Input, Button } from '..';
import { timerPaused, timerStarted, timerChanged, timerSeted, timerFinished, modalOpened } from '../../actions';
import { useState } from 'react';
import { useInterval } from '../../hooks';
import { InputEvtProps } from '../../interfaces/inputEvtProps';
import styles from './Timer.module.css'
import cn from 'classnames'
import { ProgressBar, Modal } from '..';
import { formatTime } from '../../utils';

const Timer = (): JSX.Element => {
    const INITIAL_MINUTES: string = '0'
    const INITIAL_SECONDS: string = '3'
    const INTERVAL: number = 1000;

    const [initialTime, setInitialTime] = useState({
        minutes: INITIAL_MINUTES,
        seconds: INITIAL_SECONDS
    })

    const [minutes, setMinutes] = useState(formatTime(initialTime.minutes))
    const [seconds, setSeconds] = useState(formatTime(initialTime.seconds))

    let { started, isConfigured, isFinished } = useSelector((state: RootState) => state.timer)
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);

    const dispatch = useDispatch();

    let startOrPause = started ? 'Stop' : 'Start';

    const reduceSeconds = () => setSeconds(seconds => +seconds - 1 + '');
    const reduceMinutes = () => setMinutes(minutes => +minutes - 1 + '');

    const formatTimer = () => {
        setMinutes(minutes => formatTime(minutes))
        setSeconds(seconds => formatTime(seconds))
    }

    // Вынести в хелпер
    const getPropgess = () => {
        const initialTimeInSeconds = +initialTime.minutes * 60 + +initialTime.seconds
        const currentTimeInSeconds = +minutes * 60 + +seconds;
        const percents = 100 / initialTimeInSeconds * currentTimeInSeconds;
        return 100 - Math.floor(percents);
    }
    // Вынести в хелпер конец

    const done = getPropgess();

    const setTime = (minutes: string, seconds: string) => {
        setMinutes(minutes)
        setSeconds(seconds)
    }

    const onModalClose = () => {
        setTime(initialTime.minutes, initialTime.seconds)
        formatTimer();
        dispatch(timerPaused())
    }

    const processTimer = () => {
        if (started) {
            if (+seconds === 0 && +minutes !== 0) {
                setSeconds('59');
                reduceMinutes();
                setMinutes(minutes => formatTime(minutes))
            } else if (+seconds === 0 && +minutes === 0) {
                dispatch(timerFinished())
                dispatch(modalOpened())
            } else {
                reduceSeconds();
                setSeconds(seconds => formatTime(seconds))
            }
        }
    }

    useInterval(processTimer, INTERVAL)

    const changeTimer = () => {
        if (isConfigured) {
            dispatch(timerSeted())
            formatTimer();
        } else {
            dispatch(timerChanged())
        }
    }

    const switchTimer = () => {
        if (started) {
            dispatch(timerPaused())
        } else {
            dispatch(timerStarted())
            formatTimer();
        }
    }

    const changeHandler = (evt: InputEvtProps) => {
        if (evt.target.max === "60") {
            setSeconds('')
            setSeconds(evt.target.value)
            setInitialTime({
                minutes: minutes,
                seconds: evt.target.value
            })
        } else if (evt.target.max === "99") {
            setMinutes('')
            setMinutes(evt.target.value)
            setInitialTime({
                minutes: evt.target.value,
                seconds: seconds
            })
        }
    }

    // const validateValue = (evt: InputEvtProps) => {
    //     if (evt.target.value.length > 3) {
    //         const arr = evt.target.value.split('')
    //         arr[0] = arr[1]
    //         arr[1] = arr[2]
    //         arr.pop()
    //         evt.target.value = arr.join()
    //     }
    // }

    return (
        <>
            <div className={cn(styles.wrapper)}>
                <ProgressBar done={done} isFinished={isFinished} isConfigured={isConfigured} />

                <div className={cn(styles.container)}>
                    <div className={cn(styles.timer)}>
                        <Input type="minutes" value={minutes} onChange={changeHandler} isConfigured={isConfigured} />
                        :
                        <Input type="seconds" value={seconds} onChange={changeHandler} isConfigured={isConfigured} />
                    </div>
                    {!isConfigured &&
                        < Button onClick={switchTimer} data-testid="button-start-toggle">{startOrPause}</Button>
                    }
                    <Button appearance="settings" onClick={changeTimer} isConfigured={isConfigured} data-testid="settings-button">Settings</Button>
                </div>

                {isOpen && <Modal onClose={onModalClose} />}
            </div>
        </>
    );
};

export default Timer;