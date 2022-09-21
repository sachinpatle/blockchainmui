import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import dummyData from '../utils/dummyData';
import Box from '@mui/material/Box';
export default function Transaction() {

    const TransactionCard = ({transaction}) => {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={transaction.url}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    </CardActions>
                </Card>
            </div>
        )
    }
    return (
        <>
            <div>
                Latest Transactions
            </div>
            <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'column', md: 'row' ,xl:'none'}, "justifyContent": "space-evenly"}}>
                {
                    dummyData.map((transaction, i) => (
                        <TransactionCard transaction={transaction} key={i}/>
                    ))
                }
            </Box>
        </>

    )
}
