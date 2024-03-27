import { useEffect, useState } from "react";
import { useSimpleForm } from "./Hooks/useSimpleForm";






export const SimpleForms = () => {

    
const {formState, inputChange, onResetForm } = useSimpleForm({
    username: '',
    email: '',
    password:'',

});


const {username, email, password } = formState;



  return (
    <>
    
        <h1>Formulario simple</h1>

        <hr />

       <input 
       type="text" 
       className="form-control"
       placeholder="Usuario"
       name="username"
       value={username}
       onChange={inputChange}
       />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="email"
            name="email"
            value={email}
            onChange={inputChange}
        />

<input 
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={inputChange}
        />

        <button  onClick={onResetForm} className="btn btn-primary mt-2"> Reset </button>

        {
            
            (username === 'illescas') && <UseEffectApp /> 
            
        }
    </>
  )
}
