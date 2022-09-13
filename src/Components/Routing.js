import { Routes, Route } from "react-router-dom"

import {Leagues} from '../Pages/Leagues.js'
import {Teams} from '../Pages/Teams.js'
import {Notfoundpage} from '../Pages/Notfoundpage.js'

function Routing({ leagues, teams }) {
    return (
      <Routes>
        {/*Есть роут на опред.адрес*/}
        <Route path="/Football_Stat" element={<Leagues/>} />
        <Route path="/teams" element={<Teams/>} />
        {/*если ничего не найдено*/}
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    )
  }
  
  export default Routing