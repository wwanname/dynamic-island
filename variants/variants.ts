import { Variants } from "motion/react"
export const openSpring = { type: "spring", stiffness: 1000, damping: 100, mass: 1 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 36 };
export const popUp = {
    initial: {scale: 0.95, opacity: 0},
    animate: {scale: 1, opacity: 1},
    exit: {scale: 0.85, opacity: 0},
}
export const anim = (variants: Variants) => {
    return {
        variants: variants,
        initial: "exit",
        animate: "animate",
        exit: "exit"
    }
}