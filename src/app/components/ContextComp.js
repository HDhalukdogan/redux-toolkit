import React, { createContext, useState } from 'react'
import ContextChildComp from './ContextChildComp'

const BgContext = createContext()
function ContextComp() {
    const [bg, setBg] = useState("light")
  return (
    <BgContext.Provider value={{bg,setBg}}>
        <div className={`bg-${bg}`}>
            <ContextChildComp/>
        </div>
        
    </BgContext.Provider>
  )
}

export { ContextComp };
export default BgContext;