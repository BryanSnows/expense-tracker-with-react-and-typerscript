import { useState, useEffect } from 'react';
import * as C from './App.styles'
import { Categories } from './data/categories'; 
import { items } from './data/items';
import { Category } from './types/category';
import { Item } from './types/item';
import { getCurrentMonth, filterListMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';


const App = () => {

const [list, setList] = useState(items);
const [filteredList, setFilteredList] = useState<Item[]>([]);
const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

useEffect(() => {
  setFilteredList( filterListMonth(list, currentMonth) )
}, [list, currentMonth]) 

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Financeiro Família Serrão
        </C.HeaderText>
      </C.Header>
      <C.Body>
        {/*area de informação*/}
        {/*area de inserir*/}
        <TableArea />
      </C.Body>
    </C.Container>
  );
}

export default App;