import { Variants } from "motion/react"
export const openSpring = { type: "spring", stiffness: 1000, damping: 100, mass: 1 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 36 };

export const anim = (variants: Variants) => {
    return {
        variants: variants,
        initial: "exit",
        animate: "animate",
        exit: "exit"
    }
}