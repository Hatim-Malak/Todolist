import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

const App = () => {
  const [a, seta] = useState("")
  const [c, setc] = useState([])
  const [ed, seted] = useState(true)
  const [editIndex, setEditIndex] = useState(null)

  const abc = (e) => {
    seta(e.target.value)
  }

  const abc1 = () => {
    if (a.trim() === "") return;

    if (!ed && editIndex !== null) {
      const updated = [...c]
      updated[editIndex] = a
      setc(updated)
      seted(true)
      setEditIndex(null)
    } else {
      setc([...c, a])
    }

    seta("")
  }

  const edit = ({ text, index }) => {
    seta(text)
    seted(false)
    setEditIndex(index)
  }

  const deleteTodo = (index) => {
    const updated = [...c]
    setc(updated)
    if (editIndex === index) {
      seted(true)
      setEditIndex(null)
      seta("")
    }
  }

  const parrot = (elem, index) => {
    return (
      <Todos
        key={index}
        b={elem}
        index={index}
        sendData={edit}
        f={ed}
        onDelete={deleteTodo}
      />
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10 rounded-xl bg-violet-100 p-5 w-2/5 h-4/5 ">
        <div className='p-5'>
          <div className="addtodo">
            <h1 className=' text-xl font-bold'>Add a Todo</h1>
            <div className='flex justify-between items-center'>
              <input
                type="text"
                placeholder='Enter your todo'
                className=' w-4/5 rounded-2xl p-2 my-3'
                onChange={abc}
                value={a}
              />
              <button
                className=' text-white bg-violet-700 rounded-2xl w-20 p-0 h-10 border border-2 hover:border-black'
                onClick={abc1}
              >
                {ed ? "Save" : "Update"}
              </button>
            </div>
            <div className='flex space-x-3'>
              <input type="checkbox" name="show" id="show" />
              <label htmlFor="show">show todo</label>
            </div>
          </div>
          <div className='w-4/5 border border-gray-400 my-3'></div>
          <h1 className='text-xl font-bold my-4'>Your Todos</h1>
          <div className='flex flex-col overflow-auto h-[244px]'>
            {c.map(parrot)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App