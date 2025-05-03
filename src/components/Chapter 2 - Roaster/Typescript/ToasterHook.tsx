import useGetHeight from "./useGetHeight"
import useResetTimeout from "./useResetTimeout"
import { type useToaster } from "./ToasterType"
import useGetHeightBefore from "./useGetHeightBefore"

export default function useToaster({ item, state, setState }: useToaster) {
    const items = { item, state, setState }

    useGetHeight(items)
    useResetTimeout(items)
    useGetHeightBefore(items)
}