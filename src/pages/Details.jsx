import React from 'react'
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function Details()  {
    
    const { name } = useParams();
    const [ pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try{
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await res.json();
                setPokemon(data);

            } catch (error){
                console.log("Error fetching Mon");
            }
        };
        
        fetchPokemon();
    }, [name]);
    
    console.log (pokemon)
  return (
    <div>
        
        {pokemon ?(
            <>
                <h1> {pokemon.name} </h1>
                <img src={pokemon.sprites.front_default} />
                <p> Type: {pokemon.types[0].type.name}</p>
            
            </>
        
        ) : (
            <p> Loading...</p>
        ) }

    </div>
  )
}
