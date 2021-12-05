import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProgressBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    done: number,
    isFinished: boolean,
    isConfigured?: boolean,
};
