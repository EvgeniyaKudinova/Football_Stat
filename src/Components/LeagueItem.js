import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import NoImage from '../Image/NoImage.jpg'
import { Link } from "react-router-dom"


function LeagueItem({idLeague, nameLeague, name, flagLeague}){

    const leagueLink = `/leagues/${idLeague}/matches` ///competitions/${idLeague}/matches

    if(!flagLeague){
        flagLeague=NoImage
    }

    return(
        <Grid item xs={2} margin={3} my={5}> {/*сетка макетов item - дочерний элемент grid в teamsList | xs-ширина одного эл-та | my - отступ сверху */}
            <Card> {/*карточки объектов с содержимым*/}
                <CardActionArea component={Link} to={leagueLink}>
                    <CardMedia //картинка во всю ширину
                        component="img"
                        alt="Картинка лиги"
                        src={flagLeague}
                        sx={{ height: 170, pb: "10px" }}
                    />

<                   Typography sx={{ fontWeight: "bold" }} variant="h6">
                        {nameLeague}
                    </Typography>
                        
                    <Typography variant="overline" color="gray">
                        {name}
                    </Typography> 

                </CardActionArea>
            </Card>
        </Grid>
    )

}

export default LeagueItem;