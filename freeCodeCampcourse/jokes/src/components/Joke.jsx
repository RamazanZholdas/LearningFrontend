import React from 'react'

function Joke({setup, punchline}) {
  return (
    <div className=' h-32 shadow-md flex flex-col justify-center m-10 items-center'>
        {setup && <h1 className='text-lg font-semibold text-black ml-3'>{setup}</h1>}
        <h1 className='text-lg font-medium text-black ml-3'>"{punchline}"</h1>
    </div>
  )
}

export default Joke