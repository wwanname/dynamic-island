import { useLayoutEffect } from "react"
import { type useToaster } from "./ToasterType"

export default function useGetHeight({ item, state, setState }: useToaster) {
    useLayoutEffect(() => {
      const updateHeights = () => {
        const heights: { [key: number]: number | null } = {}
        state.number.forEach((num) => {
          if (item.current[num.original]) {
            heights[num.original] = item.current[num.original]!.offsetHeight
          }
        })
        setState((prevState) => ({
          ...prevState,
          heights: heights,
        }));
      }

      updateHeights()

      const resizeObserver = new ResizeObserver(updateHeights)
      state.number.forEach((num) => {
        resizeObserver.observe(item.current[num.original]!)
      })

      return () => {
        resizeObserver.disconnect()
      }
    }, [item, setState, state.number])
  }