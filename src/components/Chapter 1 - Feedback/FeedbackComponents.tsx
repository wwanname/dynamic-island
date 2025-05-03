import { motion } from "motion/react"
import { useStateContext } from "./Typescript/FeedbackContext";

export default function Feedback({ children }: {children: React.ReactNode}) {
    const { state, setState, container, borderRadius } = useStateContext()
    const toggleVisibility = () => {
        setState(prev => ({
            ...prev,
            visible: true,
        }));
    }

    return (
        <motion.div
            layout
            ref={container}
            onClick={toggleVisibility}
            className={`wrap ${state.visible ? 'open' : ''}`}
            style={{ borderRadius: borderRadius }}
        >
            {children}
        </motion.div>
    )
}

const Form = ({ children }: {children: React.ReactNode}) => {
    const { state } = useStateContext()
    return (
        <motion.form layout className={`${state.visible ? 'open' : ''}`}>
            {children}
        </motion.form>
    )
}

const Label = () => {
    const { state } = useStateContext()
    return (
        <motion.label
            layout
            htmlFor="feedback"
            className={`${state.visible ? 'absolute' : ''} ${state.string === '' ? 'opacity-100' : 'opacity-0'}`}
        >
            Feedback
        </motion.label>
    )
}

const Textarea = () => {
    const { state, textareaRef, setState } = useStateContext()
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState(prevState => ({
          ...prevState,
          string: event.target.value,
        }));
      };

    return (
        <motion.textarea
            id="feedback"
            ref={textareaRef}
            spellCheck={false}
            value={state.string}
            onChange={handleChange}
        />
    )
}

const Button = () => {
    return (
        <motion.button
            type="submit"
            layout="position"
            animate={{
                scale: 1,
                opacity: 1,
            }}
            initial={{
                scale: 0,
                opacity: 0
            }}
            exit={{
                scale: 0.1,
                opacity: 0
            }}
        >
            Send feedback
        </motion.button>
    )
}

Feedback.Textarea = Textarea;
Feedback.Button = Button;
Feedback.Form = Form;
Feedback.Label = Label;