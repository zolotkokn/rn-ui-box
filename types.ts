import { ReactNode } from 'react';

export interface IProps {
    children: ReactNode;
    style?: TStyle;
}

interface TStyle {
    [key: string]: string | number;
}
