import React, { useContext, useState } from 'react'
import BgContext from './ContextComp'

const CheckBoxes = () => {
    const { bg } = useContext(BgContext);
    const checkBoxList = [
        { id: 1, isTrue: false },
        { id: 2, isTrue: false },
        { id: 3, isTrue: false },
        { id: 4, isTrue: true },
        { id: 5, isTrue: false },
        { id: 6, isTrue: false },
        { id: 7, isTrue: true },
        { id: 8, isTrue: false }
    ]
    const [arr, setArr] = useState(checkBoxList)
    return (
        <div>
            <label className={`text-${bg === "dark" ? "light" : "dark"}`} >
                <input
                    type="checkbox"
                    checked={!arr.some(b=>b.isTrue === false)}
                    onChange={(e) => {
                        setArr(arr.map(b => ({...b,isTrue : e.target.checked})))
                    }}
                />
                select all 
            </label>
            {arr.map(box => (
                <label className={`text-${bg === "dark" ? "light" : "dark"} ms-2`} key={box.id}>
                    <input
                        type="checkbox"
                        checked={box.isTrue}
                        onChange={(e) => {
                            setArr(arr.map(b => b.id === box.id ? { ...b, isTrue: e.target.checked } : b))
                        }}
                    />
                    {box.id}
                </label>
            ))}
        </div>
    )
}

export default CheckBoxes