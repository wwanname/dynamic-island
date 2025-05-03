import { createContext } from 'react';

type counter = {
    mm: number
    ss: number
}

export type State = {
    string: 'Idle' | 'Ring' | 'Timer'
    ring: boolean
    timer: boolean
    counter: counter
}

export interface Wrapper {
    state: State
    setState: React.Dispatch<React.SetStateAction<State>>
    TimerPause?: () => void
    TimerReset?: () => void
    toogleRing?: () => void
}

export const StateContext = createContext<Wrapper | undefined>(undefined);