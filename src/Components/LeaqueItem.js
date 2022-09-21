import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import NoImage from '../Image/NoImage.jpg'
import { Link } from "react-router-dom"


function LeaqueItem({idLeaque, nameLeaque, name, flagLeaque}){

    const leaqueLink = `/leaque/${idLeaque}/matches`

    if(!flagLeaque){
        flagLeaque=NoImage
    }

    return(
        <Grid item xs={2} margin={3} my={5}> {/*сетка макетов item - дочерний элемент grid в teamsList | xs-ширина одного эл-та | my - отступ сверху */}
            <Card> {/*карточки объектов с содержимым*/}
                <CardActionArea component={Link} to={leaqueLink}>
                    <CardMedia //картинка во всю ширину
                        component="img"
                        alt="Картинка лиги"
                        src={flagLeaque}
                        sx={{ height: 170, pb: "10px" }}
                    />

<                   Typography sx={{ fontWeight: "bold" }} variant="h6">
                        {nameLeaque}
                    </Typography>
                        
                    <Typography variant="overline" color="gray">
                        {name}
                    </Typography> 

                </CardActionArea>
            </Card>
        </Grid>
    )

}

export default LeaqueItem;