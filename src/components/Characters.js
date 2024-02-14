import React, { useState, useEffect } from 'react';



import CharacterTables from './CharacterTables';
import Search from './Search';
import { getCharacter } from '../services/CharacterService';
import Pagination from './Pagination';
// import ErrorBoundary from '../services/ErrorBoundary';



function Characters() {
  const [items, setItems] = useState([])
  
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(30)
 

  
 
  useEffect(()=>{
    const fetch=async()=>{
      try{
        let allCharacters = [];
        let offset = 0;
        const limit = 100; 
        let totalCharacters = 0;
        do{
          const response= await getCharacter(query,limit,offset);
          const data=response.data.data;
          totalCharacters=data.total;
          allCharacters=allCharacters.concat(data.results);
          offset +=limit;
        }while(offset<totalCharacters);
        
        setItems(allCharacters)
       setLoading(false);
      }catch(error){
        console.error('Error fetching characters:',error)
      }
      
      
      
       
    }
    fetch();
  },[query])
 const indexOfLastPost=currentPage*postPerPage;
 const indexOfFirstPost=indexOfLastPost-postPerPage;
 const currentPosts=items.slice(indexOfFirstPost,indexOfLastPost)
const nPages=Math.ceil(items.length/postPerPage)


  return ( 
    // <ErrorBoundary>
  <div className='container'>
   <div className='center'>
   
     </div>
    
    <Search search={(q)=>setQuery(q)}/>
    
    <div className='content'>
    
      
      <CharacterTables items={currentPosts} loading={loading} />
      

    
   
    
    </div>
    <div className='container-pagination'>
    <Pagination
    nPages={nPages}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}/>
    </div>
    
    
  </div> 
  // </ErrorBoundary>
  );
 }
 
 export default Characters;



