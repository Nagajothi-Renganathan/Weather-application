import './App.css';
import axios from 'axios';
import {useState} from 'react'
const API_KEY="fbf5915b263de016586b47fad75dfe08";
function App() {
  const[city,setCity]=useState("")
  const[data,setData]=useState();
  const fetchdata=async()=>{
    try{
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setData(response.data)
    }
    catch(error){
      alert("please enter a correct City name")
    }

  }
  return (
    <div className='inputbox'>
      <h1>Weather App</h1>
      <input className="input" type="text" onChange={e=>setCity(e.target.value)} placeholder="enter the city name" /><br></br>
      <button className='button' onClick={fetchdata}>Search</button>   
      <div className='info'>
      {data && (
         <p>
            {data.name}, {data.sys.country}
            <div>Temparature : {Math.round(data.main.temp)} C</div>
            <div>Latitude : {data.coord.lat}</div>
            <div>Longtitude : {data.coord.lon}</div>
         </p>
      )}
      </div>
    </div>
  
  );
}

export default App;
