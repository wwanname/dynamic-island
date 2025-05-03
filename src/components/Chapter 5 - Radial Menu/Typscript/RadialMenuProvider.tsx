import useAngle from './useAngle'
import useMouseClick from './useMouseClick'
import React, { useRef, useState } from 'react'
import { StateContext } from './RadialMenuType'
import { openSpring } from '../../../utils/animation'
import { useMotionValue, useSpring, useTransform } from 'motion/react';

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const center = useRef<HTMLDivElement>(null)
    const [state, setState] = useState({
        hoverInside: false,
        click: false,
        number: 0,
    })
    const rotationMotionValue = useMotionValue(0)
    const rotationSpring = useSpring(rotationMotionValue, openSpring)
    const rotation = useTransform(rotationSpring, value => `${value}deg`)
    const hookItem = { setState, state, center, rotationMotionValue }
    const {mouse, onMouseDown, onClick} = useMouseClick(hookItem)
    useAngle(hookItem)

    return (
        <StateContext.Provider value={{ mouse,state,center,rotation,onMouseDown,onClick,setState }}>
            {children}
        </StateContext.Provider>
    );
};