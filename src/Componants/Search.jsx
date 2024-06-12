import React from 'react'

export default function Search({setSearch}) {
  return (
    <div className="flex justify-center">
      <input type="text" name="search" id="" placeholder="   Search..." className="w-[90%] h-9 my-3 mb-10 border-2 bg-slate-100" 
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
    </div>
  )
}
