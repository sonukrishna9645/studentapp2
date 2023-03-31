import React, { useState } from 'react'
import {Button,TextField,Typography} from '@mui/material'
import axios from 'axios'
const Add = () => {
    var[input,setinput]= useState({
        name:'',
        grade:''
    })
    const inputHandler=(e)=>{
        const{name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readValues=()=>{
        console.log("clicked")
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert("Successfully added")
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
      <br />
      <br />
      <TextField label='name' name='name' value={input.name}
      onChange={inputHandler} />
      <Typography>{input.name}</Typography>
      <br />
      <br />
      <TextField label='Grade' name='grade' value={input.grade}
      onChange={inputHandler}/>
      <Typography>{input.grade}</Typography>
     <br/><br/>
     <Button variant='contained' onClick={readValues} color='success'>submit</Button>
    </div>
  )
}

export default Add
