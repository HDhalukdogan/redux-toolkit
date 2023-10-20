import React, { useContext } from 'react'
import BgContext from './ContextComp'

function ContextChildComp() {
    const { bg, setBg } = useContext(BgContext);
    return (
        <div style={{ height: 50 }}>
            <label className={`text-${bg==="dark" ? "light" : "dark"}`}>
                <input
                    type="checkbox"
                    checked={bg === 'dark'}
                    onChange={(e) => {
                        setBg(e.target.checked ? 'dark' : 'light')
                    }}
                />
                Use dark mode
            </label>
        </div>
    )
}

export default ContextChildComp