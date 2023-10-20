import React, { useContext } from 'react'
import BgContext from './ContextComp'
import CheckBoxes from './CheckBoxes';

function ContextChildComp() {
    const { bg, setBg } = useContext(BgContext);
    return (
        <div style={{ height: 50 }}>
            <label className={`text-${bg === "dark" ? "light" : "dark"}`}>
                <input
                    type="checkbox"
                    checked={bg === 'dark'}
                    onChange={(e) => {
                        setBg(e.target.checked ? 'dark' : 'light')
                    }}
                />
                Use dark mode
            </label>
            <div>
                <CheckBoxes />
            </div>
        </div>
    )
}

export default ContextChildComp