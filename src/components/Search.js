import React, { useState } from 'react'


const Search = ({search}) => {
    const [text,setText]=useState('')

    const onSearch=(q)=>{
     setText(q)
     search(q)
    }
  return (
    <div>
      <section className='search'>
        <form >
            <input type="text"
            className='form-control'
            placeholder='Search on marvel...' 
            autoFocus
            onChange={(e)=>onSearch(e.target.value)}
            value={text}/>
        </form>
      </section>
    </div>
  )
}

export default Search
