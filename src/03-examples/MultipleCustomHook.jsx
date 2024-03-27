import React from 'react'
import { useFech } from '../Hooks/useFech';
import { PokemonCard } from '../Component/PokemonCard';
import { CustomHookCounter } from '../Hooks/CustomHookCounter';
import { LoadingMessage } from '../Component/LoadingMessage';





export const MultipleCustomHook = () => {

    const {counter, counterMas, counterMenos} = CustomHookCounter(1);

   const {data, hasError, isLoading} = useFech(`https://pokeapi.co/api/v2/pokemon/${counter}`);


  return (
    <>

        <h1>Infoemación del pokemo</h1>
        <hr />

        {
        
        isLoading
        
        ? <LoadingMessage/> 
        : <PokemonCard 

            id={counter} 
            name= {data.name} 
            sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ]}
            
            />    
        
        }
        
       
      
    <button 
      className='btn btn-primary mt-2'
      onClick={ ()=> counter > 1 ? counterMenos(): null}>

      Anterior  
    </button>

    <button 
      className='btn btn-primary mt-2'
      onClick={()=>counterMas()}>  
      Siguiente 
    </button>
    
   

        
        
        
        
    </>
    
  )
}
