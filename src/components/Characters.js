import React, { useState, useEffect } from 'react';

import axios from 'axios';

import CharacterTables from './CharacterTables';
import Search from './Search';


// const hash='65dea527c78bcc3f5c6d00c378ea71dd'
const hash='65dea527c78bcc3f5c6d00c378ea71dd'

function Characters() {
  const [items, setItems] = useState([])
  
  const [query, setQuery] = useState('')

  
 
  useEffect(()=>{
    const fetch=async()=>{
      if(query===''){
        const result=await axios.get(`https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=e6d1499355872cf43ec216e18ee71830&hash=${hash}&limit=30`)
        // console.log(result.data.data.results);
        setItems(result.data.data.results);
        
      }else{
        const result=await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=72cc9b14584490fa249bc0efb7d5625e&hash=${hash}`)
      //  console.log(result.data.data.results);
       setItems(result.data.data.results);
      
      }
       
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



