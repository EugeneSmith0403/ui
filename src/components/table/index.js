import React from 'react'
import { Table } from 'semantic-ui-react'
import TableRow from './TableRow'
import TableHeader from './TableHeader'



const TableView = ({dataHeader, dataRow}) => {
  return <Table celled>
    <TableHeader data={dataHeader}/>
    <Table.Body>
    <TableRow data={dataRow}/>
    </Table.Body>
  </Table>
}

export default TableView
