import { Grid } from '@mui/material'
import LeaqueItem from '../Components/LeaqueItem.js'

function LeaqueList({paginatedLeaquesList}){
  //console.log("данные в TeamsList", teamsList)

    return(
        <Grid container spacing={2} justifyContent="center">
          {/*берем массив paginatedTeamsList, принимает элемент team
          проходимся по массиву и преобразуем этот массив в jsx элемент*/}
          {paginatedLeaquesList.map((leaque) => (
            <LeaqueItem
                key={leaque.id} //особенность реакта
                idLeaque={leaque.id}
                name={leaque.area.name}
                nameLeaque={leaque.name}
                flagLeaque={leaque.area.ensignUrl}
            />
          ))}
        </Grid>
    )

}

export default LeaqueList;