import { createContext } from "react";

type Object = { [key: number] : number | null }
type SObject = { [key: number] : string | null }
type Number = { update: number; original: number }[]
type StateSetter = React.Dispatch<React.SetStateAction<State>>;
type item = React.MutableRefObject<{ [key: number] : HTMLLIElement | null }>;

type State = {
    number: Number
    heights: Object
    prevHeight: Object
    hover: boolean
    description: SObject
    title: SObject
}

type useToaster = {
    item: item;
    state: State;
    setState: StateSetter
}

type Position = {
    bottom?: boolean, top?: boolean, right?: boolean, left?: boolean
}

export const StateContext = createContext<useToaster | undefined>(undefined);

export { type Number, type Object, type State, type useToaster, type Position, type SObject }