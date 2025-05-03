import "./RadialMenu.sass"
import { MotionConfig } from "motion/react"
import { StateProvider } from "./Typscript/RadialMenuProvider"
import { closeSpring, openSpring } from "../../utils/animation"
import { useStateContext } from "./Typscript/RadialMenuContext"
import Wrapper, { Description, Container, Display, Items } from "./RadialMenuComponents"

export default function Main() {
    return (
        <StateProvider>
            <Inside />
        </StateProvider>
    )
}

function Inside() {
    const { state } = useStateContext()
    return (
        <MotionConfig transition={state.click ? openSpring : closeSpring}>
            <Wrapper>
                <Description />
                <Container>
                    <div className="detect" />
                    <Display />
                    <Items />
                </Container>
            </Wrapper>
        </MotionConfig>
    )
}