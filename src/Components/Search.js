import {  TextField } from "@mui/material";
import { Stack } from "@mui/system";

function SearchLine({query, update}){ //из paginationTeams и paginationLeagues
    return(
        <Stack spasing={4} margin={3}>
            <Stack direction='row' spasing={2} >
                <TextField label='Поиск' variant='outlined' size='small'
                value={query}
                onChange={(e)=>update(e.target.value)}

                />
                {/*<SearchIcon style={{ fill: "blue" }} />*/}
            </Stack>
        </Stack>
    )
}

export default SearchLine;