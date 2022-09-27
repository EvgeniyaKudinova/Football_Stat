import { Box, Breadcrumbs, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import DatePickerMatches from '../Components/DatePicker.js'
import getTeamsMatchesClik from '../Components/GetTeamsMatchesClik.js'
import DataGridMatches from '../Components/DataGridMatches.js'


function TeamsMatches({team}){ //приняли из роутинга

    const[dateFrom, setDateFrom] = useState(null) //дата с
    const [dateTo, setDateTo] = useState(null) //дата до
    const [dateFromString, setDateFromString] = useState("")
    const [dateToString, setDateToString] = useState("")
    const [teamMatches, setTeamMatches] = useState([])


    useEffect(() =>{
        const api = async () => {
            const jsonTeamMatches = await getTeamsMatchesClik(team.id, dateFromString, dateToString)
            if(!jsonTeamMatches) return
            setTeamMatches(jsonTeamMatches.matches) 
        }
        api()
    },[dateFromString, dateToString])


    /*----------вычисление числа даты---------*/
    const dateNumber = (number) => {
        if (Math.floor(number/10) === 0){
            return `0${number}`
        }else {
            return number
        }
    }

    const updateFrom = (newDate) => {
        setDateFrom(newDate) 
        if(newDate !== null){
            setDateFromString(`${newDate.$y}-${dateNumber(newDate.$M+1)}-${dateNumber(newDate.$D)}`)
        }
    }
   

    const updateTo = (newDate) => {
        setDateTo(newDate)
        if(newDate !== null){
            setDateToString(`${newDate.$y}-${dateNumber(newDate.$M+1)}-${dateNumber(newDate.$D)}`)
        }
    }

    const updateMatch = (newMatch) => {
        setTeamMatches(newMatch)
    }

    return(
        <Box>
            <Breadcrumbs margin={2}> {/*хлебные крошки.Навигация в одну линию*/}
                <Link to="/teams" underline="hover">
                    <Typography variant='subtitle1' letterSpacing={2} color="primary.main">Команды</Typography>
                </Link>
                <Typography variant='subtitle1' letterSpacing={2}>{team.name}</Typography>
            </Breadcrumbs>

            <Typography variant='h3' align="left" margin={2}>Матчи</Typography>
            
            <div align="left">
                <DatePickerMatches
                    label="с"
                    date={dateFrom}
                    update={updateFrom}
                    maxDate={dateTo}
                />
                <DatePickerMatches
                    label="по"
                    date={dateTo}
                    update={updateTo}
                    minDate={dateFrom}
                />
            </div>
            

            <DataGridMatches
                matches={teamMatches}
                updateMatches={updateMatch}
            />
            
        </Box>
    )
}
export default TeamsMatches;