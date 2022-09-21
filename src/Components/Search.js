import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

function SearchLine(){
    return(
        <Stack spasing={4} margin={3}>
            <Stack direction='row' spasing={2} >
                <TextField label='Поиск' variant='outlined' size='small'/>
                {/*<SearchIcon style={{ fill: "blue" }} />*/}
            </Stack>
        </Stack>
    )
}

export default SearchLine;