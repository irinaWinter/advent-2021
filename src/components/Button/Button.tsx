import { ButtonProps } from './Button.props';
import { SettingsIcon, DoneIcon } from './Icons';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance = 'default', isConfigured, children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.default]: appearance === 'default',
            [styles.settings]: appearance === 'settings',
        })}
            {...props}>
            {children}
            {appearance === 'settings' && (isConfigured ? <DoneIcon data-testid="done-icon" /> : <SettingsIcon data-testid="settings-icon" />)}
        </button >
    )
};