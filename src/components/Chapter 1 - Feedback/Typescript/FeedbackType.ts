import { MotionValue } from "motion/react"
import { createContext, CSSProperties } from 'react';

export interface State {
    string: string;
    visible: boolean;
}

export interface Wrapper {
    state: State
    container: React.RefObject<HTMLDivElement>
    setState: React.Dispatch<React.SetStateAction<State>>
    textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>
    borderRadius: MotionValue | CSSProperties['borderRadius'] | undefined;
}

export const StateContext = createContext<Wrapper | undefined>(undefined);