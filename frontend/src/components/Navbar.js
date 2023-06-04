import * as React from 'react';
import { Link } from "react-router-dom"
import { Box, AppBar, Toolbar, IconButton, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import CustomizedMenus from "./User";
import CustomizedMenusforMore from "./More";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SearchBar = ({ setSearchQuery }) => (
  <form style={{marginRight: 150} }>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      // label="Enter a city name"
      variant="outlined"
      placeholder="Search for products, brand and more"
      size="small"
      sx={{
        // "& .MuiInputLabel-root": {bgcolor: "white", color: 'white'},//styles the label
        bgcolor: "white",
        width: 500,
        height: 35,
        fontSize: 8,
        textAlign: "center",
        justifyContent: "center",
        boxShadow: 5,
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { border: "none" },
        },
      }}


    />
    <IconButton type="submit" aria-label="search" sx={{bgcolor:"white", borderRadius: 0, "&:hover":{bgcolor: "white"} }}>
      <SearchIcon style={{ fill: "#5D0170", height: 19.5}} />
    </IconButton>
  </form>
);

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 6,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: "#F97132",
    padding: '0 4px',
    zIndex: 100,
  },
}));

const Navbar = () => {
  // return (
  //     <div className="navbar">
  //         <div><Link to ="/">Home</Link></div>    
  //         <div><Link to ="/login">Login</Link></div>    
  //         <div><Link to ="/signup">SignUp</Link></div>    
  //         <div><Link to ="/profile">Profile</Link></div>    
  //     </div>
  // )

  return (
    <Box sx={{ flexgrow: 1, justifyContent: "center" }}>
      <AppBar position="static" sx={{ height: 50, justifyContent:"center", alignItems:"center", backgroundColor: "#5D0170", height: "3.5rem" }}>
        <Toolbar >

          <Typography variant="h6" component="div" marginRight={2}>
            Flipkart
          </Typography>

          <SearchBar/>
          <CustomizedMenus/>
          <Button color="inherit" sx={{marginRight:3, textTransform: "initial" }}>Become a Seller</Button>
          <CustomizedMenusforMore/>


          <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} style={{color: "#ffffff"}}>
            <ShoppingCartIcon />
          </StyledBadge>
          </IconButton>
          <Button color="inherit" sx={{marginRight:3, marginLeft:-2, textTransform: "initial"}}>Cart</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar