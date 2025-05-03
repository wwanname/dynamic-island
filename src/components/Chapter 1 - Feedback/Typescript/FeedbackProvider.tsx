import useFeedback from './FeedbackHook';
import { useMotionValue } from 'motion/react';
import React, { useRef, useState } from 'react';
import { type State, StateContext } from './FeedbackType';

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const borderRadius = useMotionValue(4)
    const container = useRef<HTMLDivElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [state, setState] = useState<State>({ string: '', visible: false });
    useFeedback({ container, state, setState, borderRadius, textareaRef })

    return (
        <StateContext.Provider value={{ container, state, setState, borderRadius, textareaRef }}>
            {children}
        </StateContext.Provider>
    );
};