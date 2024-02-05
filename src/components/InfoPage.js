import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function InfoPage() {
    const {id}=useParams();
    const [items, setItems] = useState()
    
    const fetch=async()=>{
       const response=await axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=72cc9b14584490fa249bc0efb7d5625e&hash=a67c0e577b747b73ec70eb5c6cf6600a`)
       setItems(response.data.data.results[0])
       
    }
    fetch();
  
  return (
    <>
  {
    (!items)?"":(
        <div className="box-content">
            <div className="right-box">
            <img src={`${items.thumbnail.path}.${items.thumbnail.extension}`} alt="" />
            </div>
            <div className="left-box">
              <div className='left'> 
              <h1>{items.name}</h1>
                <h3>{items.description}</h3>
                <h4>Comics</h4>
              
              <ul>
                    {
                     
                    items.comics.items.map((comic,index)=>
                    <li key={index} >
                   {comic.name}
                   </li>)
              }
     
                    </ul>
                    
               <h4>Series</h4>
               <ul>
                {
                    
                        items.comics.items.map((series,index)=>
                            <li key={index}>
                             {series.name}
                             </li>)
                    
                   
                }
               
               </ul>
               <h4>Events</h4>
               <ul>
               {
               
                    items.events.items.map((event,index)=>
                    <li key={index}>
                         {event.name}
                         </li>
                )
               
                   
                }
               </ul>
              
              </div>
                
            </div>
        </div>
    )
  }
    </>
  )
}

export default InfoPage
