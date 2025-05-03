import useRotaion from "./useRotation"
import { useHook } from "./RadialMenuType"
import { useEffect, useState } from "react"
import useLegendaryHook from "./useLegendaryHook"

export default function useAngle({ state, center, rotationMotionValue, setState }: useHook) {
  const [angle, setAngle] = useState(0)

    useEffect(() => {
      const onMouseMove = (event: MouseEvent) => {
          const target = center.current
          if (!target) return
          const fix = 125.43
          const rect = target.getBoundingClientRect()
          const centerX = rect.left + rect.width / 2
          const centerY = rect.top + rect.height / 2
          const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI) + fix

          setAngle(angle)
      }

      if (state.hoverInside) return
      window.addEventListener("mousemove", onMouseMove)
      return () => window.removeEventListener("mousemove", onMouseMove)
    }, [center, state.hoverInside])

    useRotaion({ angle, rotationMotionValue })
    useLegendaryHook({ angle, setState })
}