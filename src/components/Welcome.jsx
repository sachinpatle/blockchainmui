import React from 'react'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Welcome() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Grid sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'column', md: 'row' }, "justifyContent": "space-evenly", backgroundColor: "black" }}>
            {/* text and table div */}
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 style={{ "color": "white", "marginLeft": "10%", "textAlign": "center", "marginTop": "10%" }}>

                    Send Crypto
                    across the world
                </h1>
                <h4 style={{ color: "white", "marginLeft": "10%", "textAlign": "center", "marginTop": "10%" }}>
                    Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
                </h4>
                <table style={{ "marginLeft": "10%", "color": "white", "borderRadius": "10px", "border": "solid 1px" }}>
                    <tr>
                        <td style={{ padding: "20px" }}>Reliability</td>
                        <td style={{ padding: "20px" }}>Security</td>
                        <td style={{ padding: "20px" }}>Ethereum</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "20px" }}>Web 3.0</td>
                        <td style={{ padding: "20px" }}>Low Fees</td>
                        <td style={{ padding: "20px" }}>Blockchain</td>
                    </tr>
                </table>
            </div>
            {/* card and  form div */}
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ "background": "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", "borderRadius": "9px" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div >
                            <CurrencyBitcoinIcon />
                        </div>
                        <div style={{ "marginLeft": "300px" }}>
                            <PowerSettingsNewIcon />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div style={{ "marginTop": "35%", "marginLeft": "39%" }}>
                        Ethereum
                    </div>

                </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            backgroundColor:"red"
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>


            </div>
        </Grid>
    )
}
