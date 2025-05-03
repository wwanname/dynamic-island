import { useEffect } from "react"
import { type Wrapper } from "./DynamicIslandType"

export default function useCounter({ state, setState }: Wrapper) {
    useEffect(() => {
        if (state.string !== 'Timer') return
        const intervalId = setInterval(() => {
            if (state.timer) {
                clearInterval(intervalId)
                return;
            }

            setState(prevState => ({
                ...prevState,
                counter: {
                    ...prevState.counter,
                    ss: prevState.counter.ss === 60 ? 0 : prevState.counter.ss + 1
                }
            }));
        }, 1000);

        return () => clearInterval(intervalId)
    }, [setState, state.string, state.timer])
}