import { useState } from "react";


export const useSimpleForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);


    const inputChange = ({target}) => {

       const {name, value} = target;
       setFormState ({
        ...formState,
        [name]: value,


       });

       
    }


    const onResetForm = () => {

        setFormState (initialForm);

    }


  return {
        
        formState,
        inputChange,
        onResetForm
        
        
}

}
