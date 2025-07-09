import  { useReducer ,useState } from 'react'
  const initialstate=[{id:1,product:"reading"},{id:2,product:"writting"}];
  const reducer=(state,action)=>{
    switch(action.type){
      case "Addcart":
        return [...state,{id:Date.now(),product:action.payload}]
      case "Removecart":
        return state.filter((s)=>s.id!==action.payload)
      case "Clearall":
        return [];
    }
  }
const App = () => {

  const [text,setText]=useState("")
  const [todos,dispatch]=useReducer(reducer,initialstate)
  console.log(text);
  console.log(todos);
  
  
  return (
    <section className='h-screen w-full px-3 flex justify-center items-center bg-gray-500 '>
      <div className='   md:w-1/2 md:px-10 shadow-2xl rounded-md p-3 bg-white'>   
        <h1 className='text-3xl text-center'>Todo App </h1>
        <div className='w-full flex gap-3 mt-2 py-1 px-2 border border-gray-500 rounded'>
          <input type="text" onChange={(e)=>setText
            (e.target.value)} className=' w-full focus:outline-none' />
          <button onClick={()=>{dispatch({type:"Addcart",payload:text})
              }} onKeyDown={()=>{}} className='border px-2 py-1 rounded-md border-green-400 hover:bg-green-300 hover:text-white'>Add</button>
          </div>
        <ul className='flex flex-col gap-5 py-3'>
          {todos.map((todo)=>(<li key={todo.id} className='flex justify-between px-5 border mx-5 py-2 rounded'>
            <p>{todo.product}</p>
            <button onClick={()=>{dispatch({type:"Removecart",payload:todo.id})}} className='border border-red-500 px-2  rounded-md hover:bg-red-500 hover:text-white'>X</button>
          </li>))}
        </ul>
        <button className='py-2  w-full px-2 text-white bg-violet-600 hover:bg-violet-800 rounded' onClick={()=>{
          dispatch({type:"Clearall"})
        }}>Clear All</button>
      </div>

    </section>
  )
}

export default App
