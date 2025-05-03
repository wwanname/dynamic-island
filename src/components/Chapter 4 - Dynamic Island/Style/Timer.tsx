import "../SASS/Timer.sass"
import { anim } from "../../../utils/animation"
import { AnimatePresence, motion } from "motion/react"
import NumberFlow, { continuous } from '@number-flow/react'
import { TimeButton, enterTrans } from "../Typscript/variants"
import { useStateContext } from "../Typscript/DynamicIslandContext"
const MotionNumberFlow = motion.create(NumberFlow)

// https://number-flow.barvian.me/
// https://buildui.com/recipes/animated-counter
// For counter animation
export default function Timer() {
    const { state, TimerPause, TimerReset } = useStateContext()
    return (
        <motion.div layoutId='container' className='parent' {...anim(enterTrans)}>
            <div className="timer">
                <button
                    type="button"
                    title="control"
                    onClick={TimerPause}>
                    <AnimatePresence mode="wait">
                        {!state.timer &&
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox='0 0 12 14'
                                stroke="currentColor"
                                key='pause'
                                {...anim(TimeButton)}
                                className="size-4 fill-current text-[#FDB000]"
                            >
                                <path d="M1.03906 12.7266H2.82031C3.5 12.7266 3.85938 12.3672 3.85938 11.6797V1.03906C3.85938 0.328125 3.5 0 2.82031 0H1.03906C0.359375 0 0 0.359375 0 1.03906V11.6797C0 12.3672 0.359375 12.7266 1.03906 12.7266ZM6.71875 12.7266H8.49219C9.17969 12.7266 9.53125 12.3672 9.53125 11.6797V1.03906C9.53125 0.328125 9.17969 0 8.49219 0H6.71875C6.03125 0 5.67188 0.359375 5.67188 1.03906V11.6797C5.67188 12.3672 6.03125 12.7266 6.71875 12.7266Z" />
                            </motion.svg>
                        }
                        {state.timer &&
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox='0 0 10 13'
                                stroke="currentColor"
                                key='play'
                                {...anim(TimeButton)}
                                className="size-4 fill-current text-[#FDB000]"
                            >
                                <path d="M0.9375 13.2422C1.25 13.2422 1.51562 13.1172 1.82812 12.9375L10.9375 7.67188C11.5859 7.28906 11.8125 7.03906 11.8125 6.625C11.8125 6.21094 11.5859 5.96094 10.9375 5.58594L1.82812 0.3125C1.51562 0.132812 1.25 0.015625 0.9375 0.015625C0.359375 0.015625 0 0.453125 0 1.13281V12.1172C0 12.7969 0.359375 13.2422 0.9375 13.2422Z" />
                            </motion.svg>}
                    </AnimatePresence>
                </button>
                <button
                    type="button"
                    title="reset"
                    onClick={TimerReset}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="counter">
                    <span>Timer</span>
                    <header>
                        0
                        <MotionNumberFlow trend={+1} plugins={[continuous]} willChange prefix=':' value={state.counter.ss} format={{ minimumIntegerDigits: 2 }} />
                    </header>
                </div>
            </div>
        </motion.div>
    )
}