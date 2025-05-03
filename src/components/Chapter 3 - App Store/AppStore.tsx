import '../../App.css'
import './AppStore.sass'
import Fade from './Fade'
import After from './After'
import Before from './Before'
import { useState } from 'react'
import { MotionConfig } from 'motion/react'
import { closeSpring, openSpring } from '../../utils/animation'

export default function AppStore() {
    const [click, setClick] = useState({ active: false, number: 0 });

    return (
        <MotionConfig transition={click.active ? openSpring : closeSpring}>
            <Fade click={click} setClick={setClick} />
            <section>
                <After click={click} />
                <Before setClick={setClick} />
            </section>
        </MotionConfig>
    )
}