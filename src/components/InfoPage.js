import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import noName from '../images/noName.png'
function InfoPage() {
    const {id}=useParams();
    const [items, setItems] = useState()
    
    const fetch=async()=>{
       const response=await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e6d1499355872cf43ec216e18ee71830&hash=65dea527c78bcc3f5c6d00c378ea71dd`)
       setItems(response.data.data.results[0])
       
    }
    fetch();
  
  return (
    <>
  {
    (!items)?"":(
        <div className="box-content">
            <div className="right-box">
              
            <img src={items.thumbnail && items.thumbnail.path ===  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? noName : `${items.thumbnail.path}.${items.thumbnail.extension}`} alt="" />

              
            </div>
            <div className="left-box">
              <div className='left'> 
              <h1>{items.name || 'No name'}</h1>
                <h3>{items.description || 'No description'}</h3>
                <h4>Comics</h4>
                
              
              <ul>
                    {
                      items.comics.items.length===0&&('No comics data returned from the API.')
                    }
                    {items.comics.items.length>0&&(
                       items.comics.items.map((comic)=>
                       <li key={comic} >{comic.name} </li>
                       )

                    )
                    
                    }
     
                    </ul>
                    
               <h4>Series</h4>
               <ul>
               {
                      items.series.items.length===0&&('No series data returned from the API.')
                    }
                {
                  items.series.items.length>0&&(
                    
                        items.series.items.map((series,index)=>
                            <li key={index}>
                             {series.name}
                             </li>) )
                    
                   
                }
               
               </ul>
               <h4>Events</h4>
               <ul>
               {
                      items.events.items.length===0&&('No events data returned from the API.')
                    }
               {
                 items.series.items.length>0&&(
               
                    items.events.items.map((event,index)=>
                    <li key={index}>
                         {event.name}
                         </li>
                ))
               
                   
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
