import { createContext } from 'react'
import { MotionValue } from 'motion/react'

type state = {
    click: boolean
    number: number
    hoverInside: boolean
}
type MotionNumber = MotionValue<number>
type MotionString = MotionValue<string>
type SetStateType = React.Dispatch<React.SetStateAction<state>>
type center = React.RefObject<HTMLDivElement>

type Mouse = {
    x: MotionNumber
    y: MotionNumber
}

interface useHook {
    state: state
    center: center
    setState: SetStateType
    rotationMotionValue: MotionNumber
}

interface Wrapper {
    mouse: Mouse
    state: state
    center: center
    onClick: () => void
    setState: SetStateType
    rotation: MotionString
    onMouseDown: (event: React.MouseEvent) => void
}

export { type useHook, type MotionNumber, type SetStateType }
export const StateContext = createContext<Wrapper | undefined>(undefined);