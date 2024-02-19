import React from 'react'
// import CharacterItem from './CharacterItem'
import { useNavigate } from 'react-router-dom'
import noName from '../images/noName.png';
const CharacterTables = ({items,loading}) => {
let navigate=useNavigate();
if(loading){
  return <h2 style={{marginTop:"200px",color:"blue"}}>Loading...</h2>
}
  return(
    <>
     {
        (items) ? (
            items.map(item=>{
                return(
                    <div className='card' key={item.id} onClick={()=>navigate(`/${item.id}`)}>
                        <img src={item.thumbnail && item.thumbnail.path ===  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? noName : `${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                    <div className="title">
                      <h3>{item.name}</h3>
                    </div>
                    
                  </div>
                )
            })
            
        ):""
    }
    </>
  )
 
}

export default CharacterTables


// return loading ? <h1>Loading...</h1> :
// <section className='contents'>
//     {
//       items.map(item=>(
//           <CharacterItem key={item.id} item={item}/>
//       ))
//     }
// </section>