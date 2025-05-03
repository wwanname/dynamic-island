import { data } from "./Typscript/data"
import { anim } from "../../utils/animation"
import { Fragment } from "react/jsx-runtime"
import { popUp } from "./Typscript/variants"
import { AnimatePresence, motion, MotionValue } from "motion/react"
import { useStateContext } from "./Typscript/RadialMenuContext"

export default function Wrapper({ children }: { children: React.ReactNode }) {
    const { onMouseDown, onClick } = useStateContext()
    return (
        <section onMouseDown={onMouseDown} onClick={onClick}>
            {children}
        </section>
    )
}

export function Description() {
    const { state } = useStateContext()
    return (
        <AnimatePresence mode="popLayout" initial={false}>
            {!state.click && <motion.p {...anim(popUp)}>Hold and rotate from anywhere</motion.p>}
        </AnimatePresence>
    )
}

export function Container({ children }: { children: React.ReactNode }) {
    const { state, mouse, rotation } = useStateContext()
    return (
        <AnimatePresence mode="popLayout">
            {
                state.click &&
                <motion.div
                    {...anim(popUp)}
                    style={{
                        ['--a' as string]: rotation,
                        x: mouse.x as unknown as MotionValue<number>,
                        y: mouse.y as unknown as MotionValue<number>
                    }}
                    className="container"
                >
                    {children}
                </motion.div>
            }
        </AnimatePresence>
    )
}

export function Display() {
    const { state, center, setState } = useStateContext()
    return (
        <div
            className="display"
            onMouseEnter={() => setState(prevState => ({
                ...prevState,
                hoverInside: true
            }))}
            onMouseLeave={() => setState(prevState => ({
                ...prevState,
                hoverInside: false
            }))}
        >
            <span ref={center}>
                {data.map((data, index) => {
                    if (state.number === index)
                    return (
                        <Fragment key={`display_${index}`}>
                            {data.name}
                        </Fragment>
                    )
                })}
            </span>
        </div>
    )
}

export function Items() {
    const { state } = useStateContext()
    return (
        <ul className="items">
            {data.map((data, index) => {
                return (
                    <li
                        key={`item_${index}`}
                        aria-label={data.name}
                        data-active={state.number === index ? true : false}
                    >
                        <data.svg />
                    </li>
                )
            })}
        </ul>
    )
}