import { Pagination, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import LeaguesList from '../Components/LeaguesList.js'
import SearchLine from '../Components/Search.js';
import filteredCountries from '../Components/Filtered.js'

function PaginationLeagues({ leaguesList }) { //приходит параметр из роутинга

        // We start with an empty list of items.
        const [query, setQuery] = useState("");
        const [pageCount, setPageCount] = useState(1);

    //console.log(leaguesList)//все страны

        const handleChange = (event, value) =>{
            setPageCount(value)
        }
    
        const update = (newQuery) => {
          setQuery(newQuery)
        }
    
        const filtered = filteredCountries(query, leaguesList)
        const contentPerPage = 10
        const lastIndex = pageCount * contentPerPage
        const firstIndex = lastIndex - contentPerPage
    
        const pageLeagueCount = Math.ceil(filtered.length / contentPerPage)
        //slice() копирует заданную часть массива и возвращает эту скопированную часть в виде нового массива
        const paginatedArray = filtered.slice(firstIndex, lastIndex) 
    
    return(
        <>
        <SearchLine query={query} update={update} /> 
          <Stack alignItems="center">
            {!paginatedArray.length ? (
              <Typography>
                Лиги с таким названием нет
              </Typography>
            ) : (
              <>
                <LeaguesList paginatedLeaguesList={paginatedArray} />
                <Pagination
                  size="large"
                  shape="rounded" //форма элементов страницы
                  count={pageLeagueCount}
                  page={pageCount}
                  onChange={handleChange} //вещаем обработчик собятия для поиска
                />
              </>
            )}
          </Stack>
      </>
    )
}
  
export default PaginationLeagues