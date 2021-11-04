import { Button, TextField,Table, TableBody, TableCell, TableHead, TableRow, AppBar} from '@material-ui/core'
import axios from 'axios'
import { useState } from 'react'
import useForm from './Read'

const SearchMovie = () => {
    var[read,setRead]=useForm({"movieName":""})
    var[searchData,changeSearchData]=useState([])
    const readData=()=>{
        console.log(read)
        axios.post("http://localhost:8080/searchmovie",read).then(
        
            (response)=>{
                console.log(response.data)
                changeSearchData(
                    searchData= response.data
                )
            }
        )
    }
    
    return (
        <div>
            <AppBar position="static" color="secondary"><h4 align="center">Search your favourite movie</h4></AppBar>
            
           
           <TextField
           name="movieName"
           value={read.movieName}
           onChange={setRead}
            margin="normal"
             fullWidth 
             variant="outlined" 
             label="Enter the movie" 
             color="secondary" ></TextField><br></br>
          
          
           <Button
           onClick={readData}
            margin="normal" 
           fullWidth  
           varient="contained" 
           color="primary">Search</Button>

<Table>
                <TableHead>
                    <TableRow>
                         
                        <TableCell>Movie Name</TableCell>
                        <TableCell>Actor</TableCell>
                        <TableCell>Actress</TableCell>
                        <TableCell>Director</TableCell>
                        <TableCell>Released year</TableCell>
                        <TableCell>Camera</TableCell>
                        <TableCell>Producer</TableCell>
                        <TableCell>Language</TableCell>

                        
                    </TableRow>
                </TableHead>

                <TableBody>
                    {searchData.map((value,index)=>{
                        return <TableRow>
                            <TableCell>{value.movieName}</TableCell>
                            <TableCell>{value.actor}</TableCell>
                            <TableCell>{value.actress}</TableCell>
                            <TableCell>{value.director}</TableCell>
                            <TableCell>{value.releasedYear}</TableCell>
                            <TableCell>{value.camera}</TableCell>
                            <TableCell>{value.producer}</TableCell>
                            <TableCell>{value.language}</TableCell>
                            <TableCell><Button varient="contained" color="primary">DELETE</Button></TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>


        </div>
    )
}

export default SearchMovie