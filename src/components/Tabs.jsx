import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tabs = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableCell>Godwin</TableCell>
                <TableCell>19</TableCell>
                <TableCell>Parappukkara</TableCell>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tabs
