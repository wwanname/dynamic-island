import { Back, Reload, Print, Forward, Save, Inspect } from "../svg"

interface dataType {
    name: string;
    svg: () => JSX.Element
}

const data: dataType[] = [
    {
        name: 'Back',
        svg: Back
    },
    {
        name: 'Reload',
        svg: Reload
    },
    {
        name: 'Print',
        svg: Print
    },
    {
        name: 'Forward',
        svg: Forward
    },
    {
        name: 'Save',
        svg: Save
    },
    {
        name: 'Inspect',
        svg: Inspect
    },
]

const round = (number: number, items: number) => {
    const divide = 360 / items
    return Math.round(number / divide) * divide
}

export { data, round }