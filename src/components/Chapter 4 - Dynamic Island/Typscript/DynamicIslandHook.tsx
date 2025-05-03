import useCounter from "./useCounter";
import useRing from "./useRing";
import { type Wrapper } from "./DynamicIslandType";

export default function useDynamicIsland({ state, setState }: Wrapper) {
    const item = { state, setState }
    useCounter(item)
    useRing(item)

    const TimerPause = () => {
        setState(prevState => ({
            ...prevState,
            timer: !state.timer
        }))
    }
    const TimerReset = () => {
        setState(prevState => ({
            ...prevState,
            string: 'Idle'
        }))
    }
    const toogleRing = () => {
        setState(prevState => ({
            ...prevState,
            ring: !prevState.ring
        }))
    }
    return {TimerPause,TimerReset,toogleRing}
}