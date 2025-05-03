import "./Before.sass"
import { motion } from "motion/react"
import { data, props, type Before } from "./data"
export default function Before({ setClick }: Before) {
    const clicked = ({ number }: { number: number }) => {
        setClick(() => {
            return {
                active: true,
                number: number
            }
        })
    }
    return (
        <ol>
            {data.map((data, index) => {
                return (
                    <motion.li key={`item_${index}`} {...props("li", index)} onClick={() => clicked({ number: index })}>
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
                    </motion.li>
                )
            })}
        </ol>
    )
}