import './After.sass'
import { data, props, type After } from './data'
import { AnimatePresence, motion } from "motion/react"
export default function After({ click }: After) {
    return (
    <ol>
        <AnimatePresence mode="popLayout">
            {data.map((data, index) => {
                if (click.active && click.number === index)
                    return (
                    <motion.li key={`item_${index}`} {...props("li", index)}>
                        <div className='transition'>
                            <motion.img {...props("img", index)} src={data.img} />
                            <motion.div {...props("info", index)}>
                                <motion.div {...props("group", index)}>
                                    <motion.h2 {...props("h2", index)}>
                                        {data.title}
                                    </motion.h2>
                                    <motion.span {...props("span", index)}>
                                        {data.description}
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                            <motion.button type="button" {...props("button", index)}>Get</motion.button>
                        </div>
                        <motion.p {...props("p", index)}>
                            {data.paragraph}
                        </motion.p>
                    </motion.li>
                    )
            })}
        </AnimatePresence>
    </ol>
    )
}