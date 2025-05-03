import Idle from "./Style/Idle"
import Ring from "./Style/Ring"
import Timer from "./Style/Timer"
import { AnimatePresence, LayoutGroup, MotionConfig } from "motion/react"
import { openSpring, closeSpring } from "../../utils/animation"
import { useStateContext } from "./Typscript/DynamicIslandContext"

export default function Animation() {
    const { state } = useStateContext()

    return (
        <MotionConfig transition={state.ring ? openSpring : closeSpring}>
            <LayoutGroup>
                <AnimatePresence mode='popLayout'>
                    {state.string === 'Idle' && <Idle key='idle' />}
                    {state.string === 'Ring' && <Ring key='ring' />}
                    {state.string === 'Timer' && <Timer key='Timer' />}
                </AnimatePresence>
            </LayoutGroup>
        </MotionConfig>
    )
}