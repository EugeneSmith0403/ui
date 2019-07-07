import React from 'react'
import { Table } from 'semantic-ui-react'

const TableHeader = ({data}) => {
  return <Table.Header>
    <Table.Row>
    {
      data.map((item, index)=><Table.HeaderCell>item</Table.HeaderCell>)
    }
    </Table.Row>
  </Table.Header>
}

export default TableHeader
