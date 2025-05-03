import { useEffect } from "react";
import { animate } from "motion/react";
import { type Wrapper } from "./FeedbackType";

export default function useFeedback({ state, borderRadius, textareaRef, setState, container }: Wrapper) {
    //border fix
    useEffect(() => {
        if (state.visible) {
            animate(borderRadius, 16, { type: "spring", stiffness: 1000, damping: 100, mass: 1 })
        } else {
            animate(borderRadius, 4, { type: "spring", stiffness: 1000, damping: 100, mass: 1 })
        }
    }, [borderRadius, state.visible])

    //toggle
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (container.current && !container.current.contains(event.target as Node)) {
          setState((prevState) => ({
            ...prevState,
            visible: false,
            string: ''
          }));
        }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setState((prevState) => ({
            ...prevState,
            visible: false,
            string: ''
          }));
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [container, setState]);

    useEffect(() => {
      if (state.visible && textareaRef.current) {
        textareaRef.current.focus();
      }
    }, [state.visible, state.string, textareaRef]);
}