import { useEffect, useState } from "react"

const App = () => {
  const[users,setUsers] = useState([])
  const[search,setSearch]=useState('')

  const filtedUser = users.filter(user=>user.name.toLowerCase().includes(search.toLocaleLowerCase()))
 async function fetchUser(){
const responsive =await fetch("https://jsonplaceholder.typicode.com/users")
const data =await responsive.json()
console.log(data)
setUsers(data)

  }
  useEffect(()=>{
    fetchUser()
  },[])
 
  return (
    <div>
      <h1>erneste</h1>
      <div>
    <input className="border rounded-md m-3 outline-none" type="text" value={search} placeholder="search users"
    onChange={(e)=>setSearch(e.target.value)} />
    {filtedUser.map(user =>(
     <div className="grid grid-cols-3 bg-gray-300 underline">
    <p className="text-xl font-bold text-sky-600 m-4">{user.name}</p>
    <p className="text-base">{user.email}</p>
    <p className="text-base">{user.phone}</p>
     </div>
    ))}
      </div>
      
    </div>
  )
}

export default App


