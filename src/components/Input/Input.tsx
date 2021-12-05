import { useSelector } from 'react-redux';
import { InputProps } from './Input.props';
import { RootState } from '../../reducers';
import styles from './Input.module.css'
import cn from 'classnames'

const Input = ({ type, value, isConfigured, ...props }: InputProps): JSX.Element => {
    let edited = useSelector((state: RootState) => state.timer.isConfigured)

    let max = type === 'minutes' ? 99 : 60;

    return (
        <input className={cn(styles.input, {
            [styles.edit]: isConfigured,
        })} type="number" min={0} max={max} readOnly={!edited} value={value} {...props} maxLength={2} />
    )
}

export default Input;