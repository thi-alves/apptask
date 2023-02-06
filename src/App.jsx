import React from 'react'
import { useState } from 'react';
import { Route, Routes } from "react-router-dom"

import { Home, WorkProjects, AddTask } from './components';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div className="absolute top-0 w-full h-screen flex items-center justify-center bg-slate-50 p-8">
        <div className="w-[320px] max-w-[320px] h-[620px] bg-white rounded-3xl shadow-box overflow-hidden p-2 relative">
          <Routes>
            <Route path='/' element={<Home data={data} />} />
            <Route path='/workprojects' element={<WorkProjects data={data} setData={setData} />} />
            <Route path='/addtask' element={<AddTask data={data} setData={setData} />} />
          </Routes>
        </div>
      </div>


    </div>
  )
}

export default App
