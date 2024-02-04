import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function InfoPage() {
    const {id}=useParams();
    const [items, setItems] = useState()
    const fetch=async()=>{
       const response=await axios(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e6d1499355872cf43ec216e18ee71830&hash=65dea527c78bcc3f5c6d00c378ea71dd`)
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
                <h1>{items.name}</h1>
                <h3>{items.description}</h3>
                <h4>Comics</h4>
               <ul>
               {
                
               items.comics.items.map((comic,index)=>
               <li key={index}>
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
    )
  }
    </>
  )
}

export default InfoPage
