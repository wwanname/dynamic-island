import useToaster from './ToasterHook';
import React, { useRef, useState } from 'react';
import { StateContext, type State } from './ToasterType';

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const item = useRef<{ [key: number] : HTMLLIElement | null }>({})
    const [state, setState] = useState<State>({
        number: [],
        heights: {},
        prevHeight: {},
        description: {},
        title: {},
        hover: false
    })
    useToaster({ item, state, setState })

    return (
        <StateContext.Provider value={{ state, setState, item }}>
            {children}
        </StateContext.Provider>
    );
};