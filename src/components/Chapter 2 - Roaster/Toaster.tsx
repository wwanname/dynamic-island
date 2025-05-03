import "./Toaster.sass"
import Toaster from "./ToasterComponents"
import { StateProvider } from "./Typescript/ToasterProvider"

export default function Main() {
    return (
        <StateProvider>
            <Inside />
        </StateProvider>
    )
}

function Inside() {
    return (
        <Toaster>
            <Toaster.Toast />
            <Toaster.Button top right />
            <Toaster.Button bottom right title="Framer" description="Anime.js" />
        </Toaster>
    )
}