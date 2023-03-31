import React, {useEffect, useState }  from 'react'
import {Table,TableCell,TableContainer,TableHead,TableRow,TableBody,Button} from '@mui/material'
import axios from 'axios'
const View = () => { 
    var[students,setstudents]=useState([])
    useEffect(()=>{
       axios.get(" http://localhost:3005/students")
       .then(response=>{
        setstudents(students=response.data)
        console.log(students)
    })
       
       .catch(error=>console.log(error))
    },[])
    const deleteValue=(Id)=>{
        console.log(Id)
        axios.delete("http://localhost:3005/students/"+Id)
        .then(respones=>{
            alert("Successfully deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.Name}</TableCell>
                    <TableCell>{value.Grade}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default View
