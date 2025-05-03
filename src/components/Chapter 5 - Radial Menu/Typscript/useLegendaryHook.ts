import { round } from "./data"
import { useEffect } from "react"
import { SetStateType } from "./RadialMenuType"

export default function useIfElseToDie({ angle, setState }: { angle: number, setState: SetStateType }) {
    useEffect(() => {
        const items = 6
        const roundAngle = round(angle, items)
        switch (roundAngle) {
            case 0:
                setState(prevState => ({
                    ...prevState,
                    number: 1
                }))
            break
            case 60:
                setState(prevState => ({
                    ...prevState,
                    number: 2
                }))
            break
            case 120:
                setState(prevState => ({
                    ...prevState,
                    number: 3
                }))
            break
            case 180:
                setState(prevState => ({
                    ...prevState,
                    number: 4
                }))
            break
            case 240:
                setState(prevState => ({
                    ...prevState,
                    number: 5
                }))
            break
            case 300:
                setState(prevState => ({
                    ...prevState,
                    number: 0
                }))
            break
            case -60:
                setState(prevState => ({
                    ...prevState,
                    number: 0
                }))
            break
            default:
                break
        }
    }, [angle, setState])
}