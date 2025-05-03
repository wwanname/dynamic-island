import { StateProvider } from "./Typscript/DynamicIslandProvider"
import "./SASS/Layout.sass"
import Info from "./Infomation"
import Button from "./Button"
import Animation from "./Animation"

export default function Main() {
    return (
        <StateProvider>
            <Inside />
        </StateProvider>
    )
}

function Inside() {
    return (
        <section>
            <Info />
            <div className="wrapper">
                <div className="content">
                    <div className="animation">
                        <Animation />
                    </div>
                    <Button />
                </div>
            </div>
        </section>
    )
}