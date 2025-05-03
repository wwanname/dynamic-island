import { useEffect } from "react"
import { type Wrapper } from "./DynamicIslandType"

export default function useRing({ state, setState }: Wrapper) {
    useEffect(() => {
        if (state.string !== "Ring") return
        const intervalId = setInterval(() => {
            setState(prevState => ({
                ...prevState,
                ring: !prevState.ring
            }))
        }, 4000)

        return () => clearInterval(intervalId)
    }, [setState, state.ring, state.string])
}