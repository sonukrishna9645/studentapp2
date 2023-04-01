import React, { useState } from 'react'
import {Button,TextField,Typography} from '@mui/material'
import axios from 'axios'

const Add = (props) => {
    var[input,setinput]= useState(props.data)
    console.log(props.data)

    const inputHandler=(e)=>{
        const{name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readValues=()=>{
        console.log("clicked")
        if(props.method=="post"){
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert("Successfully added")
        })
        .catch(error=>console.log(error))
      } else if(props.method=="put"){
        axios.put("http://localhost:3005/students/"+input.id,input )
        .then((response)=>{
          alert("updated successfullt")
          window.location.reload(false)
        })
      }
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
