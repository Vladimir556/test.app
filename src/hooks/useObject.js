import {useState} from 'react'

export default function useObject(initialValue) {
    const [value,setValue] = useState(initialValue)

    const changeValue = (newValue) => {
        setValue({...value,...newValue})
    }

    return {
        value,changeValue
    }
}
