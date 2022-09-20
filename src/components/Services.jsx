import React from 'react'
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';

export default function Services() {

    return (
        <Grid sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'column', md: 'row' }, "justifyContent": "space-evenly", backgroundColor: "black" }}>
            <div>
                <h1 style={{ "textAlign": "center", "color": "white" }}>Services that we
                    continue to improve

                </h1>
                <h3 style={{ "textAlign": "center", "color": "white",marginLeft:"10%" }}>
                    The best choice for buying and selling your crypto assets,
                    with the various super friendly services we offer
                </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{"backgroundColor":"#322e2e","borderRadius":"10px","marginTop":"6%"}}> 
                    <span><AddModeratorIcon color="primary" /></span>
                    <span  style={{ "textAlign": "center", "color": "white" }}>Security gurantee</span>
                    <div  style={{ "width":"75%","marginTop":"8%","textAlign":"center","color":"white"}}>
                        Security is guranteed. We always maintain privacy and maintain the quality of our products
                    </div>
                </div>

                <div style={{"backgroundColor":"#322e2e","borderRadius":"10px","marginTop":"6%"}}>
                    <span><ZoomInIcon color="secondary" /></span>
                    <span  style={{ "textAlign": "center", "color": "white" }}>Best exchange rates</span>
                    <div  style={{"width":"75%","marginTop":"8%","textAlign":"center","color":"white"}}>
                        Security is guranteed. We always maintain privacy and maintain the quality of our products
                    </div>
                </div>

                <div style={{"backgroundColor":"#322e2e","borderRadius":"10px","marginTop":"6%"}}>
                    <span><FavoriteIcon sx={{ color: pink[500] }} /></span>
                    <span  style={{ "textAlign": "center", "color": "white" }}>Fastest transactions</span>
                    <div style={{"width":"75%","marginTop":"8%","textAlign":"center","color":"white"}}>
                        Security is guranteed. We always maintain privacy and maintain the quality of our products
                    </div>
                </div>
            </div>
        </Grid>
    )
}
