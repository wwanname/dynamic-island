import { type State, type setState } from "./data";
import { AnimatePresence, motion } from "motion/react";

interface Fade {
    click: State
    setClick: setState
}

export default function Fade({ click, setClick }: Fade) {
    const undo = () => {
        setClick(() => {
            return {
                active: false,
                number: 0,
            };
        });
    }

    return (
        <AnimatePresence mode="popLayout">
            {click.active && <motion.div
                onClick={undo}
                className='fade'
                animate={{
                    opacity: 0.6,
                    pointerEvents: 'auto'
                }}
                initial={{
                    opacity: 0,
                    pointerEvents: 'none'
                }}
                exit={{
                    opacity: 0,
                    pointerEvents: 'none'
                }}
            />}
        </AnimatePresence>
    )
}