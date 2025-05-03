import { useEffect } from "react"
import { useToaster } from "./ToasterType";

export default function useGetHeightBefore({ state, setState }: useToaster) {
    useEffect(() => {
        const heights: { [key: number]: number | null } = {}
        Object.entries(state.heights).reduce((acc, [, value], index) => {
            heights[index] = acc
            return acc + (value ?? 0);
        }, 0);

        setState((prevState) => ({
            ...prevState,
            prevHeight: heights,
        }));
    }, [setState, state.heights, state.number.length]);
  }