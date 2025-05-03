import { useEffect, useRef } from "react";
import { useToaster } from "./ToasterType";

export default function useResetTimeout({ state, setState }: useToaster) {
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null)
    useEffect(() => {
        if (state.hover) return
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
        }

        timeoutId.current = setTimeout(() => {
            setState((prevState) => ({
                ...prevState,
                number: [],
                title: {},
                description: {}
            }));
        }, 10000);

        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current)
            };
        };
    }, [setState, state.hover, state.number])
  }