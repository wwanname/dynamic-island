import { HTMLProps } from "react"
import { MotionProps } from "motion/react"
type ExtendedMotionProps = MotionProps & HTMLProps<HTMLLIElement> & HTMLProps<HTMLButtonElement> & HTMLProps<HTMLImageElement>
export const data = [
    {
        img: 'https://animations.dev/how-i-use-framer-motion/how-i-code-animations/space.png',
        title: 'The Oddysey',
        description: 'Explore unknown galaxies.',
        paragraph: 'Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.',
    },
    {
        img: 'https://animations.dev/how-i-use-framer-motion/how-i-code-animations/rabbit.png',
        title: 'Angry Rabbits',
        description: 'They are coming for you.',
        paragraph: 'The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.',
    },
    {
        img: 'https://animations.dev/how-i-use-framer-motion/how-i-code-animations/ghost.webp',
        title: 'Ghost town',
        description: 'Scarry ghosts.',
        paragraph: 'In this game, players explore a deserted town, uncovering its eerie past and the mysteries behind its sudden abandonment. The gameplay combines puzzle-solving, exploration, and narrative elements and something else.',
    },
    {
        img: 'https://animations.dev/how-i-use-framer-motion/how-i-code-animations/pirate.png',
        title: 'Pirates in the jungle',
        description: 'Find the treasure.',
        paragraph: 'You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals. Some filler text to make it longer. Maybe even longer, because it looks better.',
    },
]

interface State {
    active: boolean
    number: number
}

type setState = React.Dispatch<React.SetStateAction<{
    active: boolean
    number: number
}>>

interface After {
    click: State
}

interface Before {
    setClick: setState
}

const props = (key: string, index: number) => {
    const props: ExtendedMotionProps  = {layout: true, layoutId: `${key}_${index}`,}
    switch (key) {
        case 'li':
            props.initial={ opacity: 0.4 }
            props.animate={ opacity: 1 }
            props.exit={ opacity: 0 }
            break
        case 'img':
            props.alt = 'game'
            props.style = { borderRadius: '12px' }
            props.width = 56;
            props.height = 56;
            break;
        case 'info':
            props.className = 'info';
            break;
        case 'group':
            props.className = 'group';
            break;
        case 'p':
            props.initial={ opacity: 0.4, filter: `blur(0px)` }
            props.animate={ opacity: 1, filter: `blur(0px)` }
            props.exit={ opacity: 0, filter: `blur(4px)`, transition: { duration: 0.2 } }
            break
        default:
            break;
    }
    return props;
}

export { props, type Before, type After, type setState, type State }