import { useEffect, useState } from 'react';
import { Checkbox } from '../../components/checkbox/checkbox';
import { Container } from '../../components/container/container';
import { FilterForm } from '../../components/filter-form/filter-form';
import { MainContent } from '../../components/main-content/main-content';
import { MainNav } from '../../components/main-nav/main-nav';
import { PageTitle } from '../../components/page-title/page-title';
import { Table } from '../../components/table/table';
import { Column } from '../../components/table/table-props';

const renumber = (columns: readonly Omit<Column,'id'>[]): Column[]=>columns.map((e,id)=>({...e,id}));

const columns = renumber([
  {
    colClassName:'table__col-checkbox',
    format:(row)=>(<Checkbox name={row['id']} />),
    label: ''
  },
  {
    colClassName:'table__col-number',
    format:(row)=>row['id'],
    label: '№'
  },
  {
    colClassName:'table__col-large',
    format:(row)=>row['status'],
    label: 'Состояние'
  },
  {
    colClassName:'table__col-large',
    format:(row)=>row['customer'],
    label: 'Контрагент'
  },
  {
    colClassName:'table__col-large',
    format:(row)=>row['manager'],
    label: 'Менеджер'
  }
]);

const getKey = (row:Record<string,string>)=>row['id'];

export function Projects() {
  const [rows, setList] = useState([] as Record<string,string>[]);
  useEffect(()=>{
    (async ()=>{
      const response = await fetch('list.json');
      if(response.ok){
        setList(await response.json());
      }
    })();
  },[]);
  return (
    <Container>
      <MainNav selected={0} />
      <MainContent>
        <PageTitle className="main-content__page-title" title='Проекты'  />
        <FilterForm className='main-content__filter-form' />
        <Table className='' columns={columns} rows={rows} getKey={getKey} />
      </MainContent>
    </Container>
  );
}
