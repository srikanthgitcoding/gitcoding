import { Card, Box, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import React from 'react'

function MUICard() {
  return (
    <Box width='400px'>
        <Card>
        <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="djd"
        >

        </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">Title</Typography>
                <Typography variant="body2" color='blue'>Title</Typography>

            </CardContent>
            <CardActions>
                <Button variant="contained">Cancel</Button>
                <Button variant="outlined">submit</Button>

            </CardActions>
            
        </Card>
    </Box>
  )
}

export default MUICard