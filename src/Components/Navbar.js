import { useState } from 'react';
import  { Button, AppBar, Tabs, Tab } from '@mui/material';
import { Link } from "react-router-dom"

function Navbar() {
    /*хуко состояние для вывода "0" */
    /*создаются 2 переменные. 2-ая перем. использ.для обно"---------");*/
    const [value, setValue] = useState(0);
    /*функция для обработки входных данных*/
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
      <div>
        {/*<Button>Hello World</Button>*/}
        {/*AppBar создает синюю полоску - заголовок. Текст в середине*/}
        <AppBar position="static">

          <Tabs value={value} onChange={handleChange} textColor="inherit"
            // Задаем цвет подчеркиванию активной вкладке
            TabIndicatorProps={{sx:{backgroundColor: "white"}}} >

            <Tab label="Лиги"  component={Link} to="/Football_Stat" />
            <Tab label="Команды" component={Link} to="/teams"/>
          </Tabs>
          
        </AppBar>
      </div>
    );
  }
  
  export default Navbar;
  