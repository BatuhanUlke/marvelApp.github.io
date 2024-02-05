import React, { useState, useEffect } from 'react';



import CharacterTables from './CharacterTables';
import Search from './Search';
import { getCharacter } from '../services/CharacterService';





function Characters() {
  const [items, setItems] = useState([])
  
  const [query, setQuery] = useState('')

  
 
  useEffect(()=>{
    const fetch=async()=>{
      const response= await getCharacter(query);
      
      setItems(response.data.data.results)
       
    }
    fetch();
  },[query])

  
  return ( 
  <div className='container'>
   <div className='center'>
   
     </div>
    
    <Search search={(q)=>setQuery(q)}/>
    <div className='content'>
    {
      (!items)? <h1>Loading...</h1>:
      <CharacterTables items={items} />
      

    }
    </div>
    
    
  </div> 
  );
 }
 
 export default Characters;



