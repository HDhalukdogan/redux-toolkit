import React, { useReducer, useState } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "changeFirstName":
            return { ...state, firstName: action.payload }
        case "changeFamilyName":
            return { ...state, familyName: action.payload }
        default:
            return state;
    }
}

function ReducerComp() {
    const [state, dispatch] = useReducer(reducer, { firstName: '', familyName: '' })
    const { firstName, familyName } = state;
    const [info, setInfo] = useState({ age: '', country: '' })
    const {age, country} = info;
    return (
        <div className="row m-5" style={{ height: 100 }}>
            <div className='d-flex justify-content-center align-items-center'>
                <input value={firstName} onChange={(e) => dispatch({ type: "changeFirstName", payload: e.target.value })} className='mx-5' placeholder='enter your first name' />
                <input value={familyName} onChange={(e) => dispatch({ type: "changeFamilyName", payload: e.target.value })} placeholder='enter your family name' />
                <input value={age} onChange={(e) => setInfo({ ...info, age: e.target.value })} className='mx-5' placeholder='enter your age' />
                <input value={country} onChange={(e) => setInfo({ ...info, country: e.target.value })} placeholder='enter your country' />
            </div>
            <div className='mt-3'>
                <div>
                    <h4 className='ms-5'>Your first name is: {firstName} and your family name is: {familyName}</h4>
                </div>
                <div>
                    <h4 className='ms-5'>Your age is: {age} and your country is: {country}</h4>
                </div>
            </div>
        </div>
    )
}

export default ReducerComp