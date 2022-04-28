import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ListaUsuarios } from './components/ListaUsuarios'


function App() {
  const [count, setCount] = useState(0)

  const users = [  
      {  
        'id': 1,   
        'name': 'Jack',   
        'email': 'jack@gmail.com'  
      },  
      {  
        'id': 2,   
        'name': 'Mary',   
        'email': 'mary@gmail.com'  
      },  
      {  
        'id': 3,   
        'name': 'John',   
        'email': 'john@gmail.com'  
      }, 
      {  
        'id': 4,   
        'name': 'Alex',   
        'email': 'alex@gmail.com'  
      },  
  ];  

  return (
    <div className="App">
      <ListaUsuarios users={users} ></ListaUsuarios>
    </div>
  )
}

export default App
