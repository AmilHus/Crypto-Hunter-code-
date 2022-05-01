import React from 'react'
import { AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography, } from '@material-ui/core'
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
    }));

const darkTheme = createTheme({
    palette: {
        primary: {
        main: "#fff",
        },
        type: "dark",
    },
    });

function Header(){
  const classes = useStyles();
  const history = useHistory();

  const {currency,setCurrency} = CryptoState();
  return (
      <ThemeProvider theme={darkTheme}>
      <AppBar color='transparent' position='static' >
          <Container>
                <Toolbar>
                <Typography
                    onClick={() => history.push(`/`)}
                    variant="h6"
                    className={classes.title}>
                        Crypto Hunter
                    </Typography>
                    <Select
                    variant='outlined'
                    style={{
                        width:100,
                        height:40,
                        marginLeft:15,
                    }}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    defaultValue={"USD"}
                    >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"RUB"}>RUB</MenuItem>
                    
                    </Select>
                </Toolbar>
          </Container>
      </AppBar>
      </ThemeProvider>  
  )
}

export default Header