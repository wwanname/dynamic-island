import "../SASS/Ring.sass"
import { motion } from "motion/react"
import { anim } from "../../../utils/animation"
import { enterTrans } from "../Typscript/variants"
import { useStateContext } from "../Typscript/DynamicIslandContext"

export default function Ring() {
    const { state, toogleRing } = useStateContext()
    return (
        <motion.div layoutId='container' className='parent' {...anim(enterTrans)}>
            <motion.div className="rin" initial={false} animate={{ width: state.ring ? 148 : 128 }}>
                <motion.div
                    className="background"
                    initial={false}
                    animate={{
                        width: state.ring ? 40 : 0,
                        filter: state.ring ? `blur(0px)` : `blur(4px)`
                    }}
                />
                <motion.button
                    type="button"
                    title="toogle"
                    initial={false}
                    onClick={toogleRing}
                    animate={{
                        translateX: state.ring ? 8.5 : 0
                    }}
                >
                    <svg width="11.25" height="12.75" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.17969 13.3125H13.5625C14.2969 13.3125 14.7422 12.9375 14.7422 12.3672C14.7422 11.5859 13.9453 10.8828 13.2734 10.1875C12.7578 9.64844 12.6172 8.53906 12.5547 7.64062C12.5 4.64062 11.7031 2.57812 9.625 1.82812C9.32812 0.804688 8.52344 0 7.36719 0C6.21875 0 5.40625 0.804688 5.11719 1.82812C3.03906 2.57812 2.24219 4.64062 2.1875 7.64062C2.125 8.53906 1.98438 9.64844 1.46875 10.1875C0.789062 10.8828 0 11.5859 0 12.3672C0 12.9375 0.4375 13.3125 1.17969 13.3125ZM7.36719 16.4453C8.69531 16.4453 9.66406 15.4766 9.76562 14.3828H4.97656C5.07812 15.4766 6.04688 16.4453 7.36719 16.4453Z"
                            fill="white"
                        />
                    </svg>
                    <div className="stroke">
                        <motion.div className="height" initial={false} animate={{ height: state.ring ? 16 : 0 }}>
                            <div className="red">
                                <div className="white" />
                            </div>
                        </motion.div>
                    </div>
                </motion.button>
                <div className="info">
                    <motion.span
                        initial={false}
                        animate={{
                            opacity: state.ring ? 1 : 0,
                            scale: state.ring ? 1 : 0.25,
                            filter: state.ring ? `blur(0px)` : `blur(4px)`
                        }}
                    >
                        Silent
                    </motion.span>
                    <motion.span
                        initial={false}
                        animate={{
                            opacity: !state.ring ? 1 : 0,
                            scale: !state.ring ? 1 : 0.25,
                            filter: !state.ring ? `blur(0px)` : `blur(4px)`
                        }}
                    >
                        Ring
                    </motion.span>
                </div>
            </motion.div>
        </motion.div>
    )
}