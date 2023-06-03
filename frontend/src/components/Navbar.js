import { Link } from "react-router-dom"
import { Box, AppBar, Toolbar, IconButton, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

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
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { border: "none" },
        },
      }}


    />
    <IconButton type="submit" aria-label="search" sx={{bgcolor:"white", borderRadius: 0, "&:hover":{bgcolor: "white"} }}>
      <SearchIcon style={{ fill: "#1976D2", height: 19.5}} />
    </IconButton>
  </form>
);

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
    <Box sx={{ flexgrow: 1  }}>
      <AppBar position="static" sx={{ textTransform: "capitalize", height: 50, justifyContent:"center", alignItems:"center", backgroundColor: "#2874F0" }}>
        <Toolbar >

          <Typography variant="h6" component="div" marginRight={2}>
            Flipkart
          </Typography>

          <SearchBar/>


          <Button color="inherit" sx={{marginRight:3}}>User</Button>
          {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age" 
            onChange={}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { border: "none" },
              },
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}

          <Button color="inherit" sx={{marginRight:3}}>Become a Seller</Button>
          <Button color="inherit" sx={{marginRight:3}}>More</Button>
          <Button color="inherit" sx={{marginRight:3}}>Cart</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar