import { ProgressBarProps } from './ProgressBar.props';
import styles from './ProgressBar.module.css'
import cn from 'classnames'

const ProgressBar = ({ done, isFinished, isConfigured }: ProgressBarProps): JSX.Element => {
    let point1 = {
        x: 0,
        y: 100
    }

    if (done > 0 && done < 25) {
        point1.x = done * 4
        point1.y = 100
    } else if (done >= 25 && done <= 50) {
        point1.x = 100
        point1.y = 100 - (done - 25) * 4
    } else if (done > 50 && done < 75) {
        point1.x = 100 - (done - 50) * 4
        point1.y = 0
    } else if (done >= 75 && done <= 100) {
        point1.x = 0
        point1.y = (done - 75) * 4
    } else {
        point1.x = 0
        point1.y = 100
    }

    let point2 = {
        x: 100,
        y: 100,
    }

    if (done >= 50 && done <= 100) {
        point2.x = 0
        point2.y = 0
    } else {
        point2.x = 100
        point2.y = 100
    }

    if (isConfigured) {
        point1.x = 0
        point1.y = 100
        point2.x = 0
        point2.y = 0
    }

    const style = {
        clipPath: `polygon(100% 0, 100% 100%, 0 100%, 50% 50%, ${point1.x}% ${point1.y}%, ${point2.x}% ${point2.y}%)`
    }

    return (
        <div className={cn(styles.wrapper)}>
            <div className={cn(styles.progressBar)} >
                <div style={style} className={cn(styles.indicator, {
                    [styles.inProcess]: !isFinished,
                    [styles.finished]: isFinished || isConfigured
                })} >
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;