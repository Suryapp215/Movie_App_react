import { Grid } from '@material-ui/core'
import React from 'react'
import Addmovie from './Addmovie'
import SearchMovie from './SearchMovie'

const GridView = () => {
    return (
        <div>
            <Grid container>
               <Grid item xs={6} sm={6} md={6}> <Addmovie/> </Grid>
               <Grid item xs={12} sm={6} md={6}> <SearchMovie/> </Grid>
            </Grid>
        </div>
    )
}

export default GridView