import { useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'

export default function Home  () {

    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSearch = () =>{
        if (!name) return;
        navigate(`/details/${name.toLowerCase()}`);
    };

  return (
    <div>
        <h1>Search PokEmon </h1>

        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Pokemon Name"
        />

        <button onClick={handleSearch}>Search</button>
    </div>
  )
}


