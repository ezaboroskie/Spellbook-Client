import IncrementDecrementCounter from "./IncrementDecrementCounter"
import AddSubtractCounter from "./AddSubtractCounter"
import DisplayCounter from "./DisplayCounter"
import '../styles/Counter.css'
import {useState, useEffect} from 'react'


function Counter(){

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width:720px)").matches
  )

  useEffect(()=>{
    window
    .matchMedia("(max-width:720px)")
    .addEventListener('change', e => setMatches(e.matches));
  }, []) 

return(
  <>
    {matches &&(
    <div className="counter-container">
    <IncrementDecrementCounter/>
    <DisplayCounter/>
    <AddSubtractCounter/>
    </div>
    )}

    {!matches &&(
    <div className="counter-container-large">
    <IncrementDecrementCounter/>
    <DisplayCounter/>
    <AddSubtractCounter/>
    </div>
    )}
    

  </>
)

}

export default Counter