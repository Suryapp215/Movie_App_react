import { AppBar, Button, TextField } from '@material-ui/core'
import axios from 'axios'

import React from 'react'
import useForm from './Read'

const Addmovie = () => {
 var[value,changevalue]=useForm({movieName:"",actor:"", actress:"",director:"",releasedYear:"",camera:"",producer:"",language:""})

 const readvalue=()=>{
    console.log(value)
    axios.post("http://localhost:8080/add",value).then(
        (response)=>{
            console.log(response.data)

    }
)


 }
    return (
        <div>
            <AppBar position="static" color="secondary"> <h4 align="center">Movie Details</h4></AppBar>
            
            <TextField 
            onChange={changevalue}  
            value={value.movieName} 
            fullWidth
            margin="normal" 
            variant="outlined" 
            color="primary" 
            label="Movie Name" 
            name="movieName"></TextField><br></br>
            
            <TextField 
            fullWidth
            onChange={changevalue}  
            value={value.actor}
             margin="normal" 
            variant="outlined" 
            color="primary" 
            label="Actor" 
            name="actor"></TextField><br></br>
        
    
            <TextField 
            onChange={changevalue}  
            value={value.actress} 
            margin="normal"  
            fullWidth 
            variant="outlined" 
            color="primary" 
            label="Actress" 
            name="actress"></TextField><br></br>
            
            <TextField 
            onChange={changevalue} 
            value={value.director}  
            margin="normal" 
            fullWidth 
            variant="outlined" 
            color="primary" 
            label="Director" 
            name="director"></TextField><br></br>

            <TextField 
            onChange={changevalue}  
            value={value.releasedYear} 
            margin="normal" 
            fullWidth
            variant="outlined" 
            color="primary" 
            label="Released year" 
            name="releasedYear"></TextField><br></br>
            
            <TextField 
            onChange={changevalue}  
            value={value.camera} 
            margin="normal" 
             fullWidth 
            variant="outlined" 
            color="primary" 
            label="Camera" 
            name="camera"></TextField><br></br>
            
            <TextField 
            onChange={changevalue}  
            value={value.producer} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            color="primary" 
            label="Producer" 
            name="producer"></TextField><br></br>
            
            <TextField 
            onChange={changevalue}  
            value={value.language} 
            margin="normal" 
            fullWidth  
            variant="outlined" 
            color="primary" 
            label="Language" 
            name="language"></TextField><br></br>
            <Button onClick={readvalue} varient="contained" color="primary" fullWidth>Submit</Button>
        </div>
    )
}

export default Addmovie