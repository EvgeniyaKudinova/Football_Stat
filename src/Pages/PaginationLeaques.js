import { Pagination, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import LeaquesList from '../Components/LeaquesList.js'
import SearchLine from '../Components/Search.js';

function PaginationLeaques({ leaguesList }) { //приходит параметр из роутинга

        // We start with an empty list of items.
        const [query, setQuery] = useState("");
        const [pageCount, setPageCount] = useState(1);
    
        const handleChange = (event, value) =>{
            setPageCount(value)
        }
    
        const update = (newQuery) => {
          setQuery(newQuery)
        }
    
        //const teamsList = 1
        const contentPerPage = 10
        const lastIndex = pageCount * contentPerPage
        const firstIndex = lastIndex - contentPerPage
    
        const pageLeaqueCount = Math.ceil(leaguesList.length / contentPerPage)
        //slice() копирует заданную часть массива и возвращает эту скопированную часть в виде нового массива
        const paginatedArray = leaguesList.slice(firstIndex, lastIndex) 
        //console.log("helooooooooooooo",pageLeaqueCount)
    
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
                <LeaquesList paginatedLeaquesList={paginatedArray} />
                <Pagination
                  size="large"
                  shape="rounded" //форма элементов страницы
                  count={pageLeaqueCount}
                  page={pageCount}
                  onChange={handleChange}
                />
              </>
            )}
          </Stack>
      </>
    )
}
  
export default PaginationLeaques