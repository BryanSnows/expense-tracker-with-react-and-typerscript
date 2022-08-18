import { useState, useEffect } from 'react';
import * as C from './App.styles'
import { Categories } from './data/categories'; 
import { items } from './data/items';
import { Category } from './types/category';
import { Item } from './types/item';
import { getCurrentMonth } from './helpers/dateFilter';

const [list, setList] = useState(items);
const [filteredList, setFilteredList] = useState<Item[]>([]);
const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

useEffect(() => {
  
}, [list, currentMonth])
const app = () => {
  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Financeiro do Bryan
        </C.HeaderText>
      </C.Header>
      <C.Body>
        {/*area de informação*/}
        {/*area de inserir*/}
        {/*area de items*/}
      </C.Body>
    </C.Container>
  );
}

export default app;