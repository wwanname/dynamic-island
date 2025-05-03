import { round } from "./data"
import { useEffect, useRef } from "react"
import { MotionNumber } from "./RadialMenuType"

export default function useRotaion({ angle, rotationMotionValue }: { angle: number, rotationMotionValue: MotionNumber }) {
  const items = 6
  const prevAngle = useRef(0)
  const totalRotation = useRef(0)

    useEffect(() => {
          let delta = angle - prevAngle.current
          prevAngle.current = angle
          if (delta > 180) delta -= 360
          if (delta < -180) delta += 360

          totalRotation.current += delta
          const roundRotationInfinite = round(totalRotation.current, items)
          rotationMotionValue.set(roundRotationInfinite)

    }, [angle, rotationMotionValue])
}