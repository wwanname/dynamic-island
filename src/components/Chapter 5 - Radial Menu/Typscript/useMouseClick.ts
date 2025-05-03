import { useHook } from "./RadialMenuType"
import { useMotionValue } from "motion/react"

export default function useMouseClick({ setState }: useHook) {
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const onMouseDown = (event: React.MouseEvent) => {
        const { clientX, clientY } = event
        setState(prevState => ({
            ...prevState,
            click: true
        }))
        mouse.x.set(clientX - 250 * 1/2)
        mouse.y.set(clientY - 250 * 1/2)
    }
    const onClick = () => {
        setState(prevState => ({
            ...prevState,
            click: !prevState.click
        }))
    }

    return {mouse,onMouseDown,onClick}
}