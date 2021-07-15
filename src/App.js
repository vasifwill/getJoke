import React, {useState} from 'react'
import axios from 'axios'


//https://official-joke-api.appspot.com/random_joke


function App() {

  const [joke, setJoke] = useState(false)
  const getJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke').then((res) =>{
      setJoke(res.data.setup + ' = '+ res.data.punchline )
      

    })
  }
  
  return(
    <div>
      Get joke<button onClick={getJoke}> Press for joke</button>
      <h1>{joke} </h1>
      
      
    </div>

  )

  


   
}

export default App;
