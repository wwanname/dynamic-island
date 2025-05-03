import { motion, AnimatePresence } from "motion/react"
import { SObject, type Position } from "./Typescript/ToasterType"
import { useStateContext } from "./Typescript/ToasterContext"
import { closeSpring, openSpring } from "../../utils/animation"

export default function Toaster({ children }: { children: React.ReactNode }) {
    return (
        <section className="toaster">
            {children}
        </section>
    )
}

function Container({ bottom, top, right, left, children }: Position & { children: React.ReactNode }) {
    const { setState } = useStateContext()

    return (
        <ol
            onMouseOver={() => setState(prevState => ({ ...prevState, hover: true }))}
            onMouseLeave={() => setState(prevState => ({ ...prevState, hover: false }))}
            style={{
                bottom: bottom ? 0 : '',
                right: right ? 0 : '',
                left: left ? 0 : '',
                top: top ? 0 : ''
            }}
        >
            {children}
        </ol>
    )
}

function Button({ bottom, top, right, left, title = 'Event has been created', description = 'Monday, January 3rd at 6:00pm' }: Position & { title?: string, description?: string }) {
    const { setState } = useStateContext()

    const Increment = () => {
        setState((prevState) => {
            return {
                ...prevState,
                title: {
                    ...prevState.title,
                    [Object.keys(prevState.title).length]: title,
                },
                description: {
                    ...prevState.description,
                    [Object.keys(prevState.description).length]: description,
                },
                number: [
                    ...prevState.number,
                    { update: prevState.number.length + 1, original: prevState.number.length + 1 }
                ]
            }
        })
    }
    return (
        <button
        type="button"
        onClick={Increment}
        style={{
            bottom: bottom ? 0 : '',
            right: right ? 0 : '',
            left: left ? 0 : '',
            top: top ? 0 : ''
        }}
        >
            Trigger
        </button>
    )
}


//https://emilkowal.ski/ui/building-a-toast-component
// I can't write CSS animation normally because I use framer motion overwritting 'transform'. So, he/she uses CSS only that make better performances~
function Toast() {
    const { state, item, setState } = useStateContext()

    const Decrement = (id: number) => {
        setState((prevState) => {
            const filteredNumbers = prevState.number.filter((num) => num.update !== id)
            const filteredDescription = Object.keys(prevState.description)
            .filter((key) => parseInt(key) !== id)
            .reduce((result, key) => {
                result[key as unknown as number - 1] = prevState.description[key as unknown as number - 1]
                return result;
            }, {} as SObject);
            const filteredTitle = Object.keys(prevState.title)
            .filter((key) => parseInt(key) !== id)
            .reduce((result, key) => {
                result[key as unknown as number - 1] = prevState.title[key as unknown as number - 1]
                return result;
            }, {} as SObject);
            const updatedNumbers = filteredNumbers.map((num, index) => ({
                ...num,
                update: index + 1,
            }))
            return {
                ...prevState,
                title: filteredTitle,
                number: updatedNumbers,
                description: filteredDescription,
            }
            })
            console.log(state.prevHeight)
      }

    return (
        <Container>
            <AnimatePresence>
                {state.number.map((val) => {
                    const gap = 16
                    const lift = -1
                    const liftAmount = lift * gap
                    const scale = val.update * 0.004 + 1
                    const index = state.number.length - val.update
                    const offset = state.prevHeight[index]!
                    const isFronted = (state.number.length - val.update === 0 || state.hover) ? 1 : 0
                    return (
                        <motion.li
                            layout="position"
                            key={`notication_${val.original}`}
                            ref={el => item.current[val.original] = el}
                            // onClick={() => {
                            //     Decrement(val.update)
                            // }}
                            initial={{
                                y: state.heights[index]! | 80,
                                scale: 0.85,
                                opacity: 0,
                            }}
                            exit={{
                                y: 0,
                                scale: 0.85,
                                opacity: 0,
                            }}
                            animate={{
                                ["--fix" as string]: 'fix',
                                scale: state.hover ? 1 : scale,
                                y: state.hover ? -offset : liftAmount * index,
                                zIndex: val.update,
                                opacity: 1
                            }}
                            transition={openSpring}
                        >
                            <motion.h2
                                animate={{ opacity: isFronted }}
                                transition={closeSpring}
                            >
                                {state.title[val.original - 1]}
                            </motion.h2>
                            <motion.h3
                                animate={{ opacity: isFronted }}
                                transition={closeSpring}
                            >
                                {state.description[val.original - 1]}
                            </motion.h3>
                        </motion.li>
                    )
                })}
            </AnimatePresence>
        </Container>
    )
}

Toaster.Button = Button
Toaster.Toast = Toast