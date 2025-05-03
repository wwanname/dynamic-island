import React, { useState } from 'react'
import useDynamicIsland from './DynamicIslandHook'
import { type State, StateContext } from './DynamicIslandType'

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<State>({
        string: 'Idle',
        ring: false,
        timer: false,
        counter: {
            mm: 0,
            ss: 0
        }
    });
    const { TimerPause, TimerReset, toogleRing } = useDynamicIsland({ state, setState })

    return (
        <StateContext.Provider value={{ state, setState, TimerPause, TimerReset, toogleRing }}>
            {children}
        </StateContext.Provider>
    );
};