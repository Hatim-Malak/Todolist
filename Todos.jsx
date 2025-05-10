import React from 'react'

const Todos = (props) => {
  const cde = () => {
    props.onDelete(props.index)
  }

  const tip = () => {
    props.sendData({ text: props.b, index: props.index })
  }

  return (
    <>
      {props.f && (
        <div className='flex items-center justify-around h-10 px-2'>
          <input type="checkbox" name="nafisa" id={`nafisa-${props.index}`} />
          <label className='px-4 green h-[25px] w-[284px] block overflow-auto' htmlFor={`nafisa-${props.index}`}>
            {props.b}
          </label>
          <div className='flex space-x-3 '>
            <button onClick={tip} className=' bg-violet-800 text-white text-lg rounded-xl px-2 hover:border-black border-2'>
              Edit
            </button>
            <button onClick={cde} className=' bg-violet-800 text-white text-lg rounded-xl px-2 hover:border-black border-2'>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Todos