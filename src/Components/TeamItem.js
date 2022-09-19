import { Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"
import noImage from '../Image/noImage.png'

function TeamItem({idTeam, nameTeam, flagTeam}){

    const teamLink = `/teams/${idTeam}/matches`

    if(!flagTeam){
        flagTeam=noImage
    }

    return(
        <Grid item xs={2} margin={4} my={6}> {/*сетка макетов item - дочерний элемент grid в teamsList | xs-ширина одного эл-та | my - отступ сверху */}
            <Card> {/*карточки объектов с содержимым*/}
                <CardActionArea component={Link} to={teamLink}>
                    <CardContent>
                        
                        <Typography sx={{ fontWeight: "bold" }}>
                            {nameTeam}
                        </Typography>
                        
                    </CardContent>
                        <Container
                            component="img"
                            src={flagTeam}
                            sx={{ height: 200, width: 230, pb: "20px" }}
                        /> 
                </CardActionArea>
            </Card>
        </Grid>
    )

}

export default TeamItem;