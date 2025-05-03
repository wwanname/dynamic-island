import '../../App.css'
import "./Feedback.sass"
import Feedback from "./FeedbackComponents"
import { AnimatePresence, MotionConfig } from "motion/react"
import { StateProvider } from "./Typescript/FeedbackProvider"
import { closeSpring, openSpring } from "../../utils/animation"
import { useStateContext } from "./Typescript/FeedbackContext"

export default function Main() {
    return (
        <StateProvider>
            <Inside />
        </StateProvider>
    )
}

function Inside() {
    const { state } = useStateContext()

    return (
        <MotionConfig transition={state.visible ? openSpring : closeSpring}>
            <Feedback>
                <Feedback.Form>
                    <Feedback.Label />
                    {state.visible && <Feedback.Textarea />}
                    {/* <AnimatePresence mode='popLayout'>
                        {state.visible && <Feedback.Button key="button" />}
                    </AnimatePresence> */}
                </Feedback.Form>
            </Feedback>
        </MotionConfig>
    )
}