import React from 'react'
import { Table } from 'semantic-ui-react'

const TableRow = ({data}) => {
  return <Table.Row>
    {
      data.map((item, index)=><Table.Cell>item</Table.Cell>)
    }
  </Table.Row>
}

export default TableRow
