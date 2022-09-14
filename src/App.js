import './App.css';
import { useEffect, useState } from "react"


import Navbar from '../src/Components/Navbar.js'
import { getLeaguesData, getTeamsData } from "./API/Fetch.js"


function App() {

  const [leagues, setleagues] = useState([])
  const [teams, setteams] = useState([])

  //получаем элементы
  useEffect(() =>{
    /*Асинхронный(одновременный) запрос на получение данных*/
    const dataLeagues = async () =>{
    /*fetch - метод, позволяющий полностью прочитать url адрес и получить данные*/
    const apiLeagues = await getLeaguesData();

    if (!apiLeagues) return 
        console.log("Данные о лигах в формате json", apiLeagues);
        setleagues(apiLeagues.competitions)
      
    }
    dataLeagues()
  }, [])

  useEffect(() =>{
    const dataTeams = async () =>{
    const apiTeams = await getTeamsData();

    if (!apiTeams) return
        console.log("Данные о командах в формате json", apiTeams);
        setteams(apiTeams.teams)
    }
    dataTeams()
  }, [])

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
