import { motion } from "motion/react";
import { anim } from "../../../utils/animation";
import { enterTrans } from "../Typscript/variants";

export default function Idle() {
    return (
        <motion.div layoutId='container' className='parent' {...anim(enterTrans)}>
            <div className="h-[28px]"></div>
        </motion.div>
    )
}