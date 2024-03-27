import { CustomHookCounter } from "./Hooks/CustomHookCounter"
import { UseEffectApp } from "./components/UseEffectApp";


export const HooksApp = () => {

const {counter, counterMas, counterMenos, counterReset} = CustomHookCounter();




  return (
        <>
            <h1> {counter} </h1>
            <p>  </p>
            <button onClick={() => counterMas (20)} className="btn btn-primary " > + </button>
            <button onClick={counterMenos} className="btn btn-primary"> - </button>
            <button onClick={counterReset}className="btn btn-secondary">Reset</button>

            
        </>
  )
}
