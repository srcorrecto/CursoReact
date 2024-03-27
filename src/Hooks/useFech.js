import { useEffect, useState } from "react"

export const useFech = (url) => {


    const [state, setState] = useState({

        data: null,
        isLoading: true,
        hasError: false,
        error: null


    })


   useEffect(() => {

    getFecht()

   }, [url]);

   const setLoadingState = () => {
    setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })
    
   }
   
   const getFecht = async() => {
    
    setLoadingState();

    const resp = await fetch(url);

    if(!resp.ok) {

        setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                code:resp.status,
                message: resp.statusText
            } 

        })
        return;
    }


    
    const data = await resp.json();
    setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null

    })


   }

    return {

        data: state.data,
        isLoading : state.isLoading,
        hasError :state.hasError
    }
  
}
