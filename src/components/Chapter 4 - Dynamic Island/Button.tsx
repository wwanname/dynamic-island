import { useStateContext } from "./Typscript/DynamicIslandContext"

export default function Button() {
    const { setState } = useStateContext()
    const buttonLabels: ('Idle' | 'Ring' | 'Timer')[] = ['Idle', 'Ring', 'Timer']
    return (
        <div className="button">
            {buttonLabels.map((data, index)  => {
                return (
                    <button
                        onClick={() => setState(prevState => ({...prevState, string: data }))}
                        key={`button_${index}`}
                        type="button"
                    >
                        {data}
                    </button>
                )
            })}
        </div>
    )
}