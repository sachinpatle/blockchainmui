import React, { useContext } from "react";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TransactionContext } from "../context/TransactionContext";

const InputButton = ({ placeholder, name, type, value, handleChange }) => {
    return (
        <TextField
            sx={{
                backgroundColor: "white"
            }}
            placeholder={placeholder}
            type={type}
            defaultValue={type === "number" ? 0.0001 : ""}
            value={value}
            onChange={(e) => handleChange(e, name)}
            label={name}
        />
    )
}

export default function Welcome() {
    const { currentAccount, connectWallet, handleChange, formData ,sendTransaction} = useContext(TransactionContext);
    console.log("currentAccount", currentAccount);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    };

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
                {
                    !currentAccount &&
                    <>
                        <div style={{ textAlign: "center" }}>
                            <Button
                                onClick={connectWallet}
                                variant="outlined">Connect to Wallet</Button>
                        </div>
                        <br>
                        </br>
                        </>
                }

                <table style={{ "marginLeft": "10%", "color": "white", "borderRadius": "10px", "border": "solid 1px" }}>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            {/* card and  form div */}
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginLeft: "20%", marginTop: "6%", width: "42%", "background": "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)", "borderRadius": "9px" }}>
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
                        "marginLeft": "17%",
                        "width": "50%",
                        "marginTop": "3%",
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        backgroundColor: "#0f0e13"
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div style={{
                        backgroundColor: "white"
                    }}>
                        <InputButton placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <InputButton placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <InputButton placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                        <InputButton placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

                    </div>
                    <hr></hr>
                    <div style={{ textAlign: "center" }}>
                        <Button
                            onClick={handleSubmit}
                            variant="outlined">Submit Now</Button>
                    </div>

                </Box>
            </div>
        </Grid>
    )
}
