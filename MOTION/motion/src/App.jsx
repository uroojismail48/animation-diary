import {motion, AnimatePresence} from 'motion/react'
import { useState } from 'react'
function App() {
    const box ={
        hidden : {
            opacity : 0 ,y:50,
 filter:"none"
        }
    }
    const [open, setOpen] = useState(false)
  return (
    <div className="h-screen w-full border-3 border-white">
        <AnimatePresence>
<motion.div 
variant={box}
initail="hidden"
animate={{opacity:1, x:200, height: open ? 200 : 0
, filter:"blur(2px)"


}}
transition={{duration:0.7}}
className='w-100 h-100 bg-blue-500 border'
></motion.div>
        </AnimatePresence>

<button onClick={() => setOpen(!open)}>
    toggle
</button>
    </div>
  )
}

export default App