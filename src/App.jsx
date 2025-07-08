import React from 'react'
import Home from './Components/Home'
import {Routes, Route, Link, useLocation} from "react-router-dom"
import Create from './Components/Create'
import Deatils from './Components/Deatils'
import Edit from './Components/Edit'

const App = () => {
  const {search,pathname} = useLocation();
  console.log(search,pathname)
  return (
    <div className='h-screen w-screen  flex'>

      
       {(pathname != "/" || search.length > 0) && (
            <Link to="/" className="text-red-300 absolute left-[45%] border-zinc-900 border rounded font-medium text-2xl py-1 px-4 mt-[2%]">Home   </Link>
          
            )}
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
         <Route path="/details/:id" element={<Deatils/>}/>
         <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App
